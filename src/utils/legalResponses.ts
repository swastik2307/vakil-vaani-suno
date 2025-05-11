
interface LegalResponse {
  en: string;
  hi: string;
}

const legalResponses: Record<string, LegalResponse> = {
  greeting: {
    en: "Hello! I'm your legal assistant. I can help you with basic legal information across various areas like property, consumer rights, employment, family law, and more. Please note that my responses are informational only and not a substitute for professional legal advice.",
    hi: "नमस्ते! मैं आपका कानूनी सहायक हूं। मैं आपको संपत्ति, उपभोक्ता अधिकार, रोजगार, पारिवारिक कानून और अन्य विभिन्न क्षेत्रों में बुनियादी कानूनी जानकारी प्रदान कर सकता हूं। कृपया ध्यान दें कि मेरी प्रतिक्रियाएँ केवल सूचनात्मक हैं और पेशेवर कानूनी सलाह का विकल्प नहीं हैं।"
  },
  default: {
    en: "I'm sorry, I don't have specific information about that legal question. For accurate legal advice, please consult with a qualified lawyer who specializes in this area.",
    hi: "मुझे खेद है, मेरे पास इस कानूनी प्रश्न के बारे में विशिष्ट जानकारी नहीं है। सटीक कानूनी सलाह के लिए, कृपया इस क्षेत्र में विशेषज्ञता रखने वाले योग्य वकील से परामर्श करें।"
  },
  consumer: {
    en: "Consumer protection laws give you rights when purchasing goods and services. If you've bought a defective product, you generally have the right to a refund, replacement, or repair. Keep all receipts and documentation of your purchase. You can file a complaint with the consumer protection agency in your area. Under the Consumer Protection Act, you're also protected against misleading advertisements, unfair trade practices, and deficient services. There are consumer courts at district, state, and national levels where you can file complaints.",
    hi: "उपभोक्ता संरक्षण कानून आपको सामान और सेवाओं की खरीद के समय अधिकार देते हैं। अगर आपने एक दोषपूर्ण उत्पाद खरीदा है, तो आपको आमतौर पर धनवापसी, प्रतिस्थापन या मरम्मत का अधिकार है। अपनी खरीद के सभी रसीदों और दस्तावेजों को रखें। आप अपने क्षेत्र में उपभोक्ता संरक्षण एजेंसी के पास शिकायत दर्ज करा सकते हैं। उपभोक्ता संरक्षण अधिनियम के तहत, आप भ्रामक विज्ञापनों, अनुचित व्यापार प्रथाओं और कमी वाली सेवाओं के खिलाफ भी संरक्षित हैं। जिला, राज्य और राष्ट्रीय स्तर पर उपभोक्ता अदालतें हैं जहां आप शिकायत दर्ज करा सकते हैं।"
  },
  property: {
    en: "Property disputes often involve boundaries, easements, or ownership rights. It's important to review your property documents carefully. Consider speaking with your neighbor directly to resolve the issue. If that doesn't work, mediation can be a cost-effective alternative to litigation. For formal legal action, consult a property lawyer. Property laws cover various aspects like land registration, transfer of property, lease agreements, and inheritance. The Registration Act requires certain property transactions to be registered with local authorities. Transfer of Property Act governs how property ownership is transferred.",
    hi: "संपत्ति विवादों में अक्सर सीमाओं, सुविधाओं या स्वामित्व अधिकारों का मुद्दा होता है। अपने संपत्ति दस्तावेजों की सावधानीपूर्वक समीक्षा करना महत्वपूर्ण है। मुद्दे को हल करने के लिए सीधे अपने पड़ोसी से बात करने पर विचार करें। अगर वह काम नहीं करता है, तो मध्यस्थता मुकदमेबाजी का एक किफायती विकल्प हो सकता है। औपचारिक कानूनी कार्रवाई के लिए, संपत्ति वकील से परामर्श करें। संपत्ति कानून विभिन्न पहलुओं को कवर करते हैं जैसे भूमि पंजीकरण, संपत्ति का हस्तांतरण, पट्टा समझौते और विरासत। पंजीकरण अधिनियम के तहत कुछ संपत्ति लेनदेन को स्थानीय अधिकारियों के साथ पंजीकृत करना आवश्यक है। संपत्ति हस्तांतरण अधिनियम यह नियंत्रित करता है कि संपत्ति का स्वामित्व कैसे हस्तांतरित किया जाता है।"
  },
  employment: {
    en: "Employment laws protect your rights in the workplace. These include minimum wage requirements, overtime pay, workplace safety standards, anti-discrimination provisions, and protection against unfair termination. If you believe your rights have been violated, document all incidents and communications. You can file a complaint with the labor department or consult an employment attorney. The Industrial Disputes Act, Factories Act, and other labor laws provide protection to employees. For contractual disputes, carefully review your employment contract and company policies.",
    hi: "रोजगार कानून कार्यस्थल पर आपके अधिकारों की रक्षा करते हैं। इनमें न्यूनतम वेतन आवश्यकताएँ, ओवरटाइम भुगतान, कार्यस्थल सुरक्षा मानक, भेदभाव विरोधी प्रावधान और अनुचित समाप्ति के खिलाफ संरक्षण शामिल हैं। यदि आपको लगता है कि आपके अधिकारों का उल्लंघन किया गया है, तो सभी घटनाओं और संचार का दस्तावेजीकरण करें। आप श्रम विभाग में शिकायत दर्ज कर सकते हैं या रोजगार वकील से परामर्श कर सकते हैं। औद्योगिक विवाद अधिनियम, कारखाना अधिनियम और अन्य श्रम कानून कर्मचारियों को संरक्षण प्रदान करते हैं। अनुबंध संबंधी विवादों के लिए, अपने रोजगार अनुबंध और कंपनी नीतियों की सावधानीपूर्वक समीक्षा करें।"
  },
  family: {
    en: "Family law covers marriage, divorce, child custody, adoption, and domestic violence. In divorce proceedings, issues like property division, alimony, and child support are determined. For child custody, courts consider the best interests of the child. Mediation is often encouraged to resolve family disputes before litigation. Domestic violence victims can seek protection orders. The Hindu Marriage Act, Special Marriage Act, and personal laws based on religion govern marriage and divorce. For adoption, follow the procedures set by the Central Adoption Resource Authority.",
    hi: "पारिवारिक कानून में विवाह, तलाक, बच्चों की हिरासत, गोद लेना और घरेलू हिंसा शामिल है। तलाक की कार्यवाही में, संपत्ति विभाजन, भरण-पोषण और बाल सहायता जैसे मुद्दों का निर्धारण किया जाता है। बच्चों की हिरासत के लिए, अदालतें बच्चे के सर्वोत्तम हित पर विचार करती हैं। मुकदमेबाजी से पहले पारिवारिक विवादों को हल करने के लिए अक्सर मध्यस्थता को प्रोत्साहित किया जाता है। घरेलू हिंसा के पीड़ित संरक्षण आदेश मांग सकते हैं। हिंदू विवाह अधिनियम, विशेष विवाह अधिनियम और धर्म पर आधारित व्यक्तिगत कानून विवाह और तलाक को नियंत्रित करते हैं। गोद लेने के लिए, केंद्रीय दत्तक ग्रहण संसाधन प्राधिकरण द्वारा निर्धारित प्रक्रियाओं का पालन करें।"
  },
  criminal: {
    en: "Criminal law deals with offenses against the state. If you're accused of a crime, you have the right to remain silent and the right to an attorney. The burden of proof lies with the prosecution to prove guilt beyond reasonable doubt. If you're a victim of crime, report it to the police immediately and cooperate with the investigation. The Indian Penal Code defines criminal offenses, while the Criminal Procedure Code outlines the procedure for investigation and trial. For bail applications, approach the appropriate court depending on the severity of the offense.",
    hi: "आपराधिक कानून राज्य के खिलाफ अपराधों से संबंधित है। यदि आप पर अपराध का आरोप है, तो आपको चुप रहने का अधिकार है और वकील का अधिकार है। अभियोजन पक्ष पर उचित संदेह से परे दोष साबित करने का भार होता है। यदि आप अपराध के शिकार हैं, तो तुरंत पुलिस को रिपोर्ट करें और जांच में सहयोग करें। भारतीय दंड संहिता आपराधिक अपराधों को परिभाषित करती है, जबकि आपराधिक प्रक्रिया संहिता जांच और परीक्षण के लिए प्रक्रिया की रूपरेखा तैयार करती है। जमानत आवेदनों के लिए, अपराध की गंभीरता के आधार पर उपयुक्त अदालत से संपर्क करें।"
  },
  tax: {
    en: "Tax laws require individuals and businesses to file returns and pay taxes. Income tax is levied on your annual income, with different tax brackets for different income levels. Tax deductions and exemptions can reduce your tax liability. Late filing or non-payment can result in penalties and interest. GST (Goods and Services Tax) applies to the supply of goods and services. For tax disputes, you can file an appeal with the tax authorities. Consider consulting a tax professional for complex tax matters or if you receive a notice from the tax department.",
    hi: "कर कानून व्यक्तियों और व्यवसायों को रिटर्न दाखिल करने और कर का भुगतान करने की आवश्यकता होती है। आयकर आपकी वार्षिक आय पर लगाया जाता है, विभिन्न आय स्तरों के लिए अलग-अलग कर ब्रैकेट होते हैं। कर कटौती और छूट आपके कर दायित्व को कम कर सकती है। देर से फाइलिंग या गैर-भुगतान के परिणामस्वरूप जुर्माना और ब्याज हो सकता है। GST (माल और सेवा कर) माल और सेवाओं की आपूर्ति पर लागू होता है। कर विवादों के लिए, आप कर अधिकारियों के पास अपील दायर कर सकते हैं। जटिल कर मामलों के लिए या यदि आपको कर विभाग से नोटिस मिलता है, तो एक कर पेशेवर से परामर्श करने पर विचार करें।"
  },
  intellectual: {
    en: "Intellectual property laws protect creations of the mind. Copyrights protect original literary, artistic, and musical works. Patents protect inventions. Trademarks protect brands and logos. To register a trademark, apply with the Trademark Registry. For patent protection, file an application with the Patent Office with a complete description of your invention. Copyright registration, while not mandatory, provides stronger protection and can be obtained from the Copyright Office. Infringement of intellectual property rights can lead to civil and criminal penalties.",
    hi: "बौद्धिक संपदा कानून मन की रचनाओं की रक्षा करते हैं। कॉपीराइट मौलिक साहित्यिक, कलात्मक और संगीत कार्यों की रक्षा करता है। पेटेंट आविष्कारों की रक्षा करते हैं। ट्रेडमार्क ब्रांड और लोगो की रक्षा करते हैं। ट्रेडमार्क पंजीकृत करने के लिए, ट्रेडमार्क रजिस्ट्री के साथ आवेदन करें। पेटेंट संरक्षण के लिए, अपने आविष्कार के पूर्ण विवरण के साथ पेटेंट कार्यालय में आवेदन दाखिल करें। कॉपीराइट पंजीकरण, हालांकि अनिवार्य नहीं है, मजबूत सुरक्षा प्रदान करता है और कॉपीराइट कार्यालय से प्राप्त किया जा सकता है। बौद्धिक संपदा अधिकारों का उल्लंघन सिविल और आपराधिक दंड का कारण बन सकता है।"
  },
  contract: {
    en: "Contract law governs agreements between parties. For a valid contract, there must be an offer, acceptance, consideration, legal capacity, and lawful purpose. Read contracts carefully before signing and consider negotiating unfavorable terms. If a contract is breached, the affected party can seek remedies like damages or specific performance. The Indian Contract Act lays down the basic principles of contract formation, performance, and breach. Alternative dispute resolution methods like arbitration or mediation can be used to resolve contractual disputes without going to court.",
    hi: "अनुबंध कानून पक्षों के बीच समझौतों को नियंत्रित करता है। एक वैध अनुबंध के लिए, प्रस्ताव, स्वीकृति, विचार, कानूनी क्षमता और कानूनी उद्देश्य होना चाहिए। हस्ताक्षर करने से पहले अनुबंधों को ध्यान से पढ़ें और प्रतिकूल शर्तों पर बातचीत करने पर विचार करें। यदि अनुबंध का उल्लंघन किया जाता है, तो प्रभावित पक्ष हर्जाना या विशिष्ट प्रदर्शन जैसे उपचार मांग सकता है। भारतीय अनुबंध अधिनियम अनुबंध निर्माण, प्रदर्शन और उल्लंघन के बुनियादी सिद्धांतों को निर्धारित करता है। मध्यस्थता या मध्यस्थता जैसी वैकल्पिक विवाद समाधान पद्धतियों का उपयोग अदालत में जाए बिना अनुबंध संबंधी विवादों को हल करने के लिए किया जा सकता है।"
  },
  immigration: {
    en: "Immigration laws govern foreign nationals entering and residing in a country. For visas, apply at the relevant embassy or consulate with required documents. Different visa categories have different eligibility criteria and duration of stay. For citizenship, you generally need to meet residency requirements and pass a citizenship test. OCI (Overseas Citizen of India) status provides certain privileges to foreign nationals of Indian origin. Consult an immigration lawyer for complex cases or if your application is rejected.",
    hi: "आप्रवासन कानून विदेशी नागरिकों के एक देश में प्रवेश और निवास को नियंत्रित करते हैं। वीजा के लिए, आवश्यक दस्तावेजों के साथ संबंधित दूतावास या वाणिज्य दूतावास में आवेदन करें। विभिन्न वीजा श्रेणियों के लिए अलग-अलग पात्रता मानदंड और रहने की अवधि होती है। नागरिकता के लिए, आपको आमतौर पर निवास आवश्यकताओं को पूरा करना होगा और नागरिकता परीक्षण पास करना होगा। OCI (भारत के प्रवासी नागरिक) स्थिति भारतीय मूल के विदेशी नागरिकों को कुछ विशेषाधिकार प्रदान करती है। जटिल मामलों के लिए या यदि आपका आवेदन अस्वीकार कर दिया जाता है तो एक आप्रवासन वकील से परामर्श करें।"
  },
  constitutional: {
    en: "The Constitution is the supreme law of the land, providing fundamental rights and establishing the structure of government. Fundamental rights include the right to equality, freedom of speech, life and personal liberty, and religious freedom. These rights can be enforced through writ petitions in High Courts or the Supreme Court. Public Interest Litigation (PIL) allows any citizen to approach the court for the public good. The constitution also divides powers between the central and state governments and establishes independent judiciary, executive, and legislative branches.",
    hi: "संविधान देश का सर्वोच्च कानून है, जो मौलिक अधिकार प्रदान करता है और सरकार की संरचना स्थापित करता है। मौलिक अधिकारों में समानता का अधिकार, भाषण की स्वतंत्रता, जीवन और व्यक्तिगत स्वतंत्रता और धार्मिक स्वतंत्रता शामिल हैं। इन अधिकारों को उच्च न्यायालयों या सर्वोच्च न्यायालय में रिट याचिकाओं के माध्यम से लागू किया जा सकता है। जनहित याचिका (PIL) किसी भी नागरिक को सार्वजनिक भलाई के लिए अदालत का रुख करने की अनुमति देती है। संविधान केंद्र और राज्य सरकारों के बीच शक्तियों को विभाजित करता है और स्वतंत्र न्यायपालिका, कार्यपालिका और विधायी शाखाएं स्थापित करता है।"
  }
};

export const getLegalResponse = (query: string, language: 'en-US' | 'hi-IN'): string => {
  const lang = language.startsWith('hi') ? 'hi' : 'en';
  const lowerCaseQuery = query.toLowerCase();

  // Using more specific patterns with word boundaries for better matching
  if (/\b(consumer|refund|product|goods|service|purchase|warranty|shop|buy|bought|defective|return)\b/i.test(lowerCaseQuery)) {
    return legalResponses.consumer[lang];
  } 
  else if (/\b(property|land|house|neighbor|boundary|rent|lease|real estate|tenant|landlord|building|owner|flat|apartment)\b/i.test(lowerCaseQuery)) {
    return legalResponses.property[lang];
  }
  else if (/\b(job|work|employee|employer|salary|wage|termination|fired|workplace|discrimination|harassment|office|company|business|resign|notice|boss)\b/i.test(lowerCaseQuery)) {
    return legalResponses.employment[lang];
  }
  else if (/\b(marriage|divorce|child|custody|adoption|alimony|maintenance|domestic violence|family|spouse|husband|wife|partner|married|wedding|separation)\b/i.test(lowerCaseQuery)) {
    return legalResponses.family[lang];
  }
  else if (/\b(crime|criminal|police|arrest|bail|fir|accused|theft|murder|assault|victim|jail|prison|court|investigation|case|lawyer|attorney|evidence|judge)\b/i.test(lowerCaseQuery)) {
    return legalResponses.criminal[lang];
  }
  else if (/\b(tax|income tax|gst|return|filing|exemption|deduction|audit|penalty|finances|money|payment|government|due|deadline)\b/i.test(lowerCaseQuery)) {
    return legalResponses.tax[lang];
  }
  else if (/\b(copyright|patent|trademark|intellectual property|invention|creative|author|artist|brand|logo|design|innovation|creator|rights)\b/i.test(lowerCaseQuery)) {
    return legalResponses.intellectual[lang];
  }
  else if (/\b(contract|agreement|breach|parties|clause|terms|conditions|sign|offer|acceptance|consideration|deal|promise|document|binding|legal|obligation)\b/i.test(lowerCaseQuery)) {
    return legalResponses.contract[lang];
  }
  else if (/\b(visa|passport|immigration|citizenship|foreigner|residency|oci|permanent|overseas|travel|abroad|foreign|country|nation|migrant|immigrant)\b/i.test(lowerCaseQuery)) {
    return legalResponses.immigration[lang];
  }
  else if (/\b(constitution|fundamental rights|supreme court|high court|writ|pil|government|state|freedom|democracy|right|justice|petition|citizen|law)\b/i.test(lowerCaseQuery)) {
    return legalResponses.constitutional[lang];
  }
  
  return legalResponses.default[lang];
};

export const getGreeting = (language: 'en-US' | 'hi-IN'): string => {
  const lang = language.startsWith('hi') ? 'hi' : 'en';
  return legalResponses.greeting[lang];
};
