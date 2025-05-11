
export type MessageRole = 'user' | 'assistant' | 'system';
export type Language = 'en-US' | 'hi-IN';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface LegalAssistantState {
  language: Language;
  messages: ChatMessage[];
  isListening: boolean;
  isSpeaking: boolean;
  input: string;
}
