
import LegalChat from '@/components/LegalChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8 flex flex-col items-center">
      <header className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Vakil Vaani Suno</h1>
        <p className="text-gray-300 text-lg">Your AI-powered legal voice assistant in Hindi and English</p>
      </header>
      
      <main className="w-full max-w-3xl">
        <LegalChat />
      </main>
      
      <footer className="mt-8 text-center text-gray-400 text-sm">
        <p>This is a demo application. Legal advice provided is not a substitute for professional consultation.</p>
      </footer>
    </div>
  );
};

export default Index;
