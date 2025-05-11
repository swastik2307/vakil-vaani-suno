
type Language = 'en-US' | 'hi-IN';

interface TextToSpeechOptions {
  text: string;
  language: Language;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export const speakText = ({
  text,
  language,
  rate = 1,
  pitch = 1,
  volume = 1
}: TextToSpeechOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      console.error('Text-to-speech not supported in this browser');
      reject('Text-to-speech not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = (event) => {
      reject(`Speech synthesis error: ${event.error}`);
    };

    window.speechSynthesis.speak(utterance);
  });
};
