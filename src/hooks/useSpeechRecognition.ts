
import { useState, useEffect, useCallback, useRef } from 'react';
import { Language } from '@/types/chat';

interface UseSpeechRecognitionProps {
  language: Language;
  onResult: (text: string) => void;
  onEnd?: () => void;
}

const useSpeechRecognition = ({ language, onResult, onEnd }: UseSpeechRecognitionProps) => {
  const [isListening, setIsListening] = useState(false);
  // Use any for now to avoid type errors
  const recognitionRef = useRef<any>(null);

  const startListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }

    // Use window.SpeechRecognition or the webkit prefixed version
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      
      if (event.results[0].isFinal) {
        onResult(transcript);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      if (onEnd) onEnd();
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [language, onResult, onEnd]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  return { isListening, startListening, stopListening };
};

export default useSpeechRecognition;
