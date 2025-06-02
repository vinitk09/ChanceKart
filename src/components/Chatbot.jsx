// Gemini chatbot

import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I can help you find the best colleges. Let's get started.",
      sender: "bot",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    currentNationality: "",
    adventureCountry: "",
    studyPlanYear: "",
    studyPlanMonth: "",
    studyLevel: "",
    subjects: [],
    undergraduateCountry: "",
    undergraduateScore: "",
    englishTest: "",
    standardizedTest: "",
  });
  const [currentStep, setCurrentStep] = useState("currentNationality");
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  const [showUniversityCards, setShowUniversityCards] = useState(false);
  const [universityCards, setUniversityCards] = useState([]);
  const chatContainerRef = useRef(null);

  // Hardcoded list of universities with descriptions for each country
  const universitiesByCountry = {
    Germany: [
      {
        name: "Technical University of Munich",
        description:
          "A leading university in Germany known for its engineering and technology programs.",
      },
      {
        name: "Heidelberg University",
        description:
          "One of the oldest universities in Germany, renowned for its research and humanities programs.",
      },
      {
        name: "Ludwig Maximilian University of Munich",
        description:
          "A top-ranked university in Germany offering a wide range of programs in science and arts.",
      },
      {
        name: "Humboldt University of Berlin",
        description:
          "A prestigious university in Berlin known for its contributions to natural sciences and humanities.",
      },
    ],
    USA: [
      {
        name: "Harvard University",
        description:
          "An Ivy League university in the USA, renowned for its law, business, and medical programs.",
      },
      {
        name: "Stanford University",
        description:
          "A world-class university in California, known for its innovation and entrepreneurship programs.",
      },
      {
        name: "Massachusetts Institute of Technology (MIT)",
        description:
          "A global leader in science, engineering, and technology education.",
      },
      {
        name: "California Institute of Technology (Caltech)",
        description:
          "A small but prestigious university focused on science and engineering.",
      },
    ],
    Canada: [
      {
        name: "University of Toronto",
        description:
          "Canada's top university, known for its research and diverse academic programs.",
      },
      {
        name: "University of British Columbia",
        description:
          "A leading university in Canada with a strong focus on sustainability and innovation.",
      },
      {
        name: "McGill University",
        description:
          "A prestigious university in Montreal, known for its medical and engineering programs.",
      },
      {
        name: "University of Alberta",
        description:
          "A top Canadian university with strengths in energy and environmental research.",
      },
    ],
    Australia: [
      {
        name: "University of Melbourne",
        description:
          "Australia's top university, known for its research and comprehensive academic programs.",
      },
      {
        name: "Australian National University",
        description:
          "A leading research university in Canberra, known for its science and policy programs.",
      },
      {
        name: "University of Sydney",
        description:
          "One of Australia's oldest universities, offering a wide range of programs.",
      },
      {
        name: "University of Queensland",
        description:
          "A top Australian university known for its research and innovation.",
      },
    ],
    UK: [
      {
        name: "University of Oxford",
        description:
          "One of the oldest and most prestigious universities in the world.",
      },
      {
        name: "University of Cambridge",
        description:
          "A world-renowned university known for its academic excellence and research.",
      },
      {
        name: "Imperial College London",
        description:
          "A leading university in the UK, specializing in science, engineering, and medicine.",
      },
      {
        name: "University College London (UCL)",
        description:
          "A top-ranked university in London, known for its research and innovation.",
      },
    ],
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, showUniversityCards]);

  const handleNext = async () => {
    if (!selectedOption) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: selectedOption, sender: "user" },
    ]);

    setUserData((prevData) => ({
      ...prevData,
      [currentStep]: selectedOption,
    }));

    const nextStep = getNextStep(currentStep);
    if (nextStep === "suggestColleges") {
      await suggestColleges();
    } else {
      setCurrentStep(nextStep);
      askNextQuestion(nextStep);
    }

    setSelectedOption("");
  };

  const getNextStep = (currentStep) => {
    const steps = [
      "currentNationality",
      "adventureCountry",
      "studyPlanYear",
      "studyPlanMonth",
      "studyLevel",
      "subjects",
      "undergraduateCountry",
      "undergraduateScore",
      "englishTest",
      "standardizedTest",
      "suggestColleges",
    ];
    const currentIndex = steps.indexOf(currentStep);
    return steps[currentIndex + 1];
  };

  const askNextQuestion = (step) => {
    let question = "";
    let options = [];
    switch (step) {
      case "currentNationality":
        question = "What is your current nationality?";
        options = [
          "Indian",
          "American",
          "Canadian",
          "German",
          "French",
          "Chinese",
          "Japanese",
          "Brazilian",
          "Australian",
          "Other",
        ];
        break;
      case "adventureCountry":
        question =
          "Which country do you plan to go to for your next adventure?";
        options = ["Germany", "USA", "Canada", "Australia", "UK"];
        break;
      case "studyPlanYear":
        question = "In which year do you plan to start your studies?";
        options = ["2025", "2026", "2027"];
        break;
      case "studyPlanMonth":
        question = "In which month range do you plan to start your studies?";
        options = ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"];
        break;
      case "studyLevel":
        question =
          "What is your desired study level? (Foundation, Undergraduate, Postgraduate, Doctorate)";
        options = ["Foundation", "Undergraduate", "Postgraduate", "Doctorate"];
        break;
      case "subjects":
        question =
          "What subjects are you interested in? (You can select up to 5 subjects)";
        options = [
          "Computer Sciences",
          "Artificial Intelligence",
          "Business",
          "Cyber Security",
          "Data Sciences and Big Data",
        ];
        break;
      case "undergraduateCountry":
        question =
          "In which country did you complete your undergraduate studies?";
        options = ["India", "USA", "Canada", "Germany", "Other"];
        break;
      case "undergraduateScore":
        question = "What was your undergraduate score?";
        options = [
          "70-80%",
          "80-90%",
          "90% and above",
          "CGPA (1-4)",
          "CGPA (1-5)",
          "CGPA (1-7)",
          "CGPA (1-10)",
        ];
        break;
      case "englishTest":
        question =
          "Which English language test have you taken? (e.g., TOEFL, IELTS, etc.)";
        options = [
          "TOEFL",
          "IELTS",
          "PTE Academic",
          "Duolingo",
          "I have'nt decided yet",
        ];
        break;
      case "standardizedTest":
        question =
          "Which standardized test have you taken? (e.g., GMAT, GRE, etc.)";
        options = ["GMAT", "GRE", "SAT", "ACT", "I have'nt decided yet"];
        break;
      default:
        question = "";
    }
    if (question) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: question, sender: "bot" },
      ]);
      setOptions(options);
    }
  };

  const suggestColleges = async () => {
    setIsLoading(true);
    try {
      // Simulate a 1-second loading delay
      setTimeout(() => {
        // Get the selected country from user data
        const selectedCountry = userData.adventureCountry;

        // Get the universities for the selected country
        const universities = universitiesByCountry[selectedCountry] || [];

        // Ensure at least 3-4 universities are shown
        if (universities.length > 0) {
          setUniversityCards(universities.slice(0, 4)); // Show top 4 universities
          setShowUniversityCards(true);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "No suitable colleges found based on your data. Please try again with different preferences.",
              sender: "bot",
            },
          ]);
        }
        setIsLoading(false);
      }, 1000); // 1-second delay
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
      setIsLoading(false);
    }
  };

  const renderText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  // Reset chatbot state when it is closed
  const resetChatbot = () => {
    setMessages([
      {
        text: "Hi! I can help you find the best colleges. Let's get started.",
        sender: "bot",
      },
    ]);
    setUserData({
      currentNationality: "",
      adventureCountry: "",
      studyPlanYear: "",
      studyPlanMonth: "",
      studyLevel: "",
      subjects: [],
      undergraduateCountry: "",
      undergraduateScore: "",
      englishTest: "",
      standardizedTest: "",
    });
    setCurrentStep("currentNationality");
    setSelectedOption("");
    setOptions([]);
    setShowUniversityCards(false);
    setUniversityCards([]);
  };

  useEffect(() => {
    if (isOpen) {
      askNextQuestion(currentStep);
    } else {
      resetChatbot(); // Reset chatbot state when it is closed
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-orange-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </div>
      {isOpen && (
        <div className="w-96 h-[500px] bg-white rounded-lg shadow-lg flex flex-col">
          <div className="bg-orange-500 text-white p-4 rounded-t-lg text-center font-semibold">
            College Suggestion Chatbot
          </div>
          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
            {!showUniversityCards ? (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.sender === "bot" ? "text-left" : "text-right"
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.sender === "bot"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {renderText(message.text)}
                  </div>
                </div>
              ))
            ) : (
              <div className="space-y-4">
                {universityCards.map((university, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold">{university.name}</h3>
                    <p className="text-sm text-gray-600">
                      {university.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {isLoading && (
              <div className="text-center text-gray-600">Loading...</div>
            )}
          </div>
          {!showUniversityCards && (
            <div className="p-4 border-t border-gray-200">
              <div className="mb-4 max-h-40 overflow-y-auto">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className={`block w-full p-2 mb-2 rounded-lg text-left ${
                      selectedOption === option
                        ? "bg-orange-500 text-white"
                        : "bg-orange-100 text-orange-800 hover:bg-orange-200"
                    } transition-colors`}
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                className={`w-full p-2 bg-orange-500 text-white rounded-lg ${
                  !selectedOption
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-orange-600"
                } transition-colors`}
                onClick={handleNext}
                disabled={!selectedOption}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;

// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot
// Gemini Chatbot

// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot
// Custom Chatbot

// import React, { useState, useEffect, useRef } from "react";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [messages, setMessages] = useState([
//     {
//       text: "Hi! I can help you find the best colleges. Let's start with your preferred field of study.",
//       sender: "bot",
//     },
//   ]);

//   const questions = [
//     "What is your preferred field of study? (e.g., English, Microbiology, Electrical Engineering, etc.)",
//     "Do you prefer English or German as the language of instruction?",
//     "What is your GPA?",
//     "What is your IELTS/TOEFL score?",
//     "Do you have any work experience? (in years)",
//     "What is your budget for tuition fees? (in euros)",
//   ];

//   const predefinedQuestions = [
//     "What are the best colleges for Computer Science?",
//     "Which universities offer scholarships?",
//     "How do I apply for a student visa?",
//   ];

//   // Ref for the chat container
//   const chatContainerRef = useRef(null);

//   // Smoothly scroll to the bottom of the chat container whenever messages change
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTo({
//         top: chatContainerRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [messages]);

//   const handleSendMessage = (message) => {
//     if (message.trim() === "") return;

//     // Add user's message
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { text: message, sender: "user" },
//     ]);

//     // Add user's answer
//     setUserAnswers((prevAnswers) => [...prevAnswers, message]);

//     // Ask next question or suggest colleges
//     if (currentQuestion < questions.length - 1) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: questions[currentQuestion + 1], sender: "bot" },
//       ]);
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       suggestColleges();
//     }
//   };

//   const suggestColleges = () => {
//     // Filter colleges based on userAnswers (this is a placeholder)
//     const suggestedColleges = [
//       "Free University of Berlin (FU Berlin)",
//       "Heidelberg University",
//       "Technical University of Munich (TUM)",
//     ];

//     // Add bot's message with college suggestions
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       {
//         text: "Thank you! Here are some colleges that match your preferences:",
//         sender: "bot",
//       },
//       ...suggestedColleges.map((college) => ({
//         text: `- ${college}`,
//         sender: "bot",
//       })),
//     ]);
//   };

//   const handlePredefinedQuestionClick = (question) => {
//     handleSendMessage(question);
//   };

//   const clearConversation = () => {
//     setMessages([
//       {
//         text: "Hi! I can help you find the best colleges. Let's start with your preferred field of study.",
//         sender: "bot",
//       },
//     ]);
//     setCurrentQuestion(0);
//     setUserAnswers([]);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       <div
//         className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-orange-600 transition-colors"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         💬
//       </div>
//       {isOpen && (
//         <div className="w-96 h-[500px] bg-white rounded-lg shadow-lg flex flex-col">
//           <div className="bg-orange-500 text-white p-4 rounded-t-lg text-center font-semibold">
//             College Suggestion Chatbot
//           </div>
//           <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`mb-4 ${
//                   message.sender === "bot" ? "text-left" : "text-right"
//                 }`}
//               >
//                 <div
//                   className={`inline-block p-3 rounded-lg ${
//                     message.sender === "bot"
//                       ? "bg-gray-100 text-gray-800"
//                       : "bg-orange-500 text-white"
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//             {currentQuestion === 0 && (
//               <div className="mt-4">
//                 <p className="text-sm text-gray-600 mb-2">
//                   Or choose a question:
//                 </p>
//                 {predefinedQuestions.map((question, index) => (
//                   <button
//                     key={index}
//                     className="block w-full p-2 mb-2 bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition-colors text-left"
//                     onClick={() => handlePredefinedQuestionClick(question)}
//                   >
//                     {question}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="p-4 border-t border-gray-200 flex">
//             <input
//               type="text"
//               placeholder="Type your answer here..."
//               className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
//               onKeyPress={(e) => {
//                 if (e.key === "Enter") {
//                   handleSendMessage(e.target.value);
//                   e.target.value = "";
//                 }
//               }}
//             />
//             <button
//               className="ml-2 p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none transition-colors"
//               onClick={(e) => {
//                 const input = e.target.previousElementSibling;
//                 handleSendMessage(input.value);
//                 input.value = "";
//               }}
//             >
//               Send
//             </button>
//           </div>
//           <button
//             className="p-2 bg-red-500 text-white rounded-b-lg hover:bg-red-600 focus:outline-none transition-colors"
//             onClick={clearConversation}
//           >
//             Clear Conversation
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
// Current Nationality, Next adventure Country, Plan to kick-start your study means year or help me decide januray-apr 2025, 2026, 2027. What do you wish to study? 📚
// Study level

// Foundation
// Undergraduate
// Postgraduate
// Doctorate
// Subjects

// Search here to select subjects
// You can pick up to 5 subjects

// Popular searches

// Computer Sciences
// Artificial Intelligence
// Business
// Cyber Security
// Health care
// Data Sciences and Big Data
// Finance
// Emergency Medicine
// Business Administration  ,

// Tell us your Undergraduate story 🔍
// Country of Education *
// University (optional)
// Grading System *
// Enter Score *
// To apply for Postgraduate programs, you need to use your Undergraduate scores.

// Continue

// Which English language test have you taken so far? ✍️
// TOEFL
// PTE Academic
// C1 Advanced(CAE)
// IELTS
// Duolingo
// OET
// LanguageCert International ESOL
// CAEL
// Goethe-Zertifikat
// TestDaF
// I haven't taken any yet

// Continue

// Which standardised test have you taken so far? ✍️
// GMAT
// ACT
// SAT
// GRE
// LSAT
// I haven't taken any yet

// Continue

// We did some magic 🪄 and conjured suitable courses for you

// 70
// Easy to get in

// card
// 0
// Give it a try

// card
// 0
// Tough to get in

// card
// Master in Artificial Intelligence for Business
// Easy to get in

// master-in-artificial-intelligence-for-business
// EU Business School, Switzerland
// €10,400
// MBA in Artificial Intelligence
// Easy to get in

// mba-in-artificial-intelligence
// IU International University of Applied Sciences, Germany
// £10,020
// Master (MSC) in Artificial Intelligence
// Easy to get in

// master-msc-in-artificial-intelligence
// IU International University of Applied Sciences, Germany
// £7,476

// Reveal my matches
