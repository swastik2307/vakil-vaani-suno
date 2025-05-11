
interface LegalResponse {
  en: string;
  hi: string;
}

const legalResponses: Record<string, LegalResponse> = {
  greeting: {
    en: "Hello! I'm your legal assistant. I can help you with basic legal information. Please note that my responses are informational only and not a substitute for professional legal advice.",
    hi: "नमस्ते! मैं आपका कानूनी सहायक हूं। मैं आपको बुनियादी कानूनी जानकारी प्रदान कर सकता हूं। कृपया ध्यान दें कि मेरी प्रतिक्रियाएँ केवल सूचनात्मक हैं और पेशेवर कानूनी सलाह का विकल्प नहीं हैं।"
  },
  default: {
    en: "I'm sorry, I don't have specific information about that legal question. For accurate legal advice, please consult with a qualified lawyer who specializes in this area.",
    hi: "मुझे खेद है, मेरे पास इस कानूनी प्रश्न के बारे में विशिष्ट जानकारी नहीं है। सटीक कानूनी सलाह के लिए, कृपया इस क्षेत्र में विशेषज्ञता रखने वाले योग्य वकील से परामर्श करें।"
  },
  consumer: {
    en: "Consumer protection laws give you rights when purchasing goods and services. If you've bought a defective product, you generally have the right to a refund, replacement, or repair. Keep all receipts and documentation of your purchase. You can file a complaint with the consumer protection agency in your area.",
    hi: "उपभोक्ता संरक्षण कानून आपको सामान और सेवाओं की खरीद के समय अधिकार देते हैं। अगर आपने एक दोषपूर्ण उत्पाद खरीदा है, तो आपको आमतौर पर धनवापसी, प्रतिस्थापन या मरम्मत का अधिकार है। अपनी खरीद के सभी रसीदों और दस्तावेजों को रखें। आप अपने क्षेत्र में उपभोक्ता संरक्षण एजेंसी के पास शिकायत दर्ज करा सकते हैं।"
  },
  property: {
    en: "Property disputes often involve boundaries, easements, or ownership rights. It's important to review your property documents carefully. Consider speaking with your neighbor directly to resolve the issue. If that doesn't work, mediation can be a cost-effective alternative to litigation. For formal legal action, consult a property lawyer.",
    hi: "संपत्ति विवादों में अक्सर सीमाओं, सुविधाओं या स्वामित्व अधिकारों का मुद्दा होता है। अपने संपत्ति दस्तावेजों की सावधानीपूर्वक समीक्षा करना महत्वपूर्ण है। मुद्दे को हल करने के लिए सीधे अपने पड़ोसी से बात करने पर विचार करें। अगर वह काम नहीं करता है, तो मध्यस्थता मुकदमेबाजी का एक किफायती विकल्प हो सकता है। औपचारिक कानूनी कार्रवाई के लिए, संपत्ति वकील से परामर्श करें।"
  }
};

export const getLegalResponse = (query: string, language: 'en-US' | 'hi-IN'): string => {
  const lang = language.startsWith('hi') ? 'hi' : 'en';
  
  // Simple keyword matching for demo purposes
  if (/consumer|refund|product|goods|service/i.test(query)) {
    return legalResponses.consumer[lang];
  } 
  else if (/property|land|house|neighbor|boundary/i.test(query)) {
    return legalResponses.property[lang];
  }
  
  return legalResponses.default[lang];
};

export const getGreeting = (language: 'en-US' | 'hi-IN'): string => {
  const lang = language.startsWith('hi') ? 'hi' : 'en';
  return legalResponses.greeting[lang];
};
