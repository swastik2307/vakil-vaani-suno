
import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2, Languages, Send } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChatMessage, Language } from '@/types/chat';
import useSpeechRecognition from '@/hooks/useSpeechRecognition';
import { speakText } from '@/utils/textToSpeech';
import { getLegalResponse, getGreeting } from '@/utils/legalResponses';

const LegalChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState<Language>('en-US');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleResult = (transcript: string) => {
    setInput(transcript);
  };
  
  const { isListening, startListening, stopListening } = useSpeechRecognition({
    language,
    onResult: handleResult
  });
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en-US' ? 'hi-IN' : 'en-US');
  };
  
  const addMessage = (content: string, role: 'user' | 'assistant') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    addMessage(userMessage, 'user');
    setInput('');
    stopListening();
    
    // Process the user's message and get a response
    setTimeout(() => {
      const response = getLegalResponse(userMessage, language);
      addMessage(response, 'assistant');
      
      // Speak the response
      setIsSpeaking(true);
      speakText({ text: response, language })
        .finally(() => setIsSpeaking(false));
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  
  useEffect(() => {
    // Add welcome message on first load
    if (messages.length === 0) {
      const greeting = getGreeting(language);
      addMessage(greeting, 'assistant');
      
      // Speak the greeting
      setIsSpeaking(true);
      speakText({ text: greeting, language })
        .finally(() => setIsSpeaking(false));
    }
  }, []);
  
  // Auto-scroll to the most recent message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground flex flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3">
            <img src="/placeholder.svg" alt="Logo" className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold">
            {language === 'en-US' ? 'Legal Voice Assistant' : 'कानूनी सहायक'}
          </h2>
        </div>
        <Button variant="outline" size="icon" onClick={toggleLanguage}>
          <Languages className="h-5 w-5" />
        </Button>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[75%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <CardFooter className="border-t p-3">
        <div className="flex w-full items-center space-x-2">
          <Button
            variant={isListening ? "destructive" : "outline"}
            size="icon"
            onClick={isListening ? stopListening : startListening}
            disabled={isSpeaking}
          >
            {isListening ? <MicOff /> : <Mic />}
          </Button>
          
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={language === 'en-US' ? "Ask a legal question..." : "कानूनी प्रश्न पूछें..."}
            className="flex-1"
            disabled={isSpeaking}
          />
          
          {isSpeaking ? (
            <Button variant="outline" size="icon" disabled>
              <Volume2 className="h-5 w-5 animate-pulse" />
            </Button>
          ) : (
            <Button variant="outline" size="icon" onClick={handleSend}>
              <Send className="h-5 w-5" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LegalChat;
