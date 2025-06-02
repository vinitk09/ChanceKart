import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import panda from "../components/HeroImage/panda.png";
import { useNavigate } from "react-router-dom";
import {
  FaBusinessTime,
  FaLaptopCode,
  FaCogs,
  FaUsers,
  FaBuilding,
  FaGraduationCap,
  FaUtensils,
  FaFlask,
  FaRunning,
  FaPalette,
  FaBalanceScale,
  FaChalkboardTeacher,
  FaCalculator,
  FaMedkit,
  FaNewspaper,
  FaSeedling,
} from "react-icons/fa";
import science from "../assets/icons/science.png";
import math from "../assets/icons/math.png";
import law from "../assets/icons/law.png";
import growth from "../assets/icons/growth.png";
import freelancer from "../assets/icons/freelancer.png";

export default function Hero() {
  const [selectedDegree, setSelectedDegree] = useState("Bachelor's");
  const [step, setStep] = useState(1); // State to track the current step
  const [selectedCourse, setSelectedCourse] = useState(null); // State to track the selected course
  const [educationLevel, setEducationLevel] = useState(null); // State to track the selected education level
  const [percentage, setPercentage] = useState(50); // State to track the percentage slider value
  const [backlogs, setBacklogs] = useState(0); // State to track the backlogs slider value
  const [preferredIntake, setPreferredIntake] = useState(null); // State to track the preferred intake
  const [englishTest, setEnglishTest] = useState(null); // State to track the selected English test
  const [englishScore, setEnglishScore] = useState(3); // State to track the English test score
  const navigate = useNavigate();

  const categories = [
    { name: "Business and Management", icon: growth },
    { name: "Computer Science and IT", icon: math },
    { name: "Engineering", icon: math },
    { name: "Social Science", icon: law },
    // { name: "Architecture", icon: architecture },
    { name: "Professional Studies", icon: law },
    // { name: "Hospitality and Tourism", icon: freelancer },
    { name: "Science", icon: freelancer },
    // { name: "Sports", icon: freelancer },
  ];
  const splitCategories = (categories) => {
    const chunks = [];
    const slicedCategories = categories.slice(0, 10); // Only take the first 10 items
    chunks.push(slicedCategories.slice(0, 2)); // First grid: 2 items
    chunks.push(slicedCategories.slice(2, 5)); // Second grid: 3 items
    chunks.push(slicedCategories.slice(5, 7)); // Third grid: 4 items
    chunks.push(slicedCategories.slice(7, 10)); // Fourth grid: 1 item
    return chunks;
  };

  const intakeOptions = [
    "Apr-Jun 2025",
    "Jul-Sep 2025",
    "Oct-Dec 2025",
    "Jan-Mar 2026",
    "Apr-Jun 2026",
    "Not Decided",
  ];

  const englishTests = ["TOEFL", "IELTS", "PTS", "None"];

  // Function to handle "Next" button click
  const handleNext = () => {
    setStep((prev) => prev + 1); // Move to the next step
  };

  const handleNext2 = () => {
    navigate("/hero2"); // Navigate to Hero2
  };

  // Function to handle "Back" button click
  const handleBack = () => {
    setStep((prev) => prev - 1); // Move to the previous step
    // Reset states based on the current step
    if (step === 2) setSelectedCourse(null);
    if (step === 3) {
      setEducationLevel(null);
      setPercentage(50);
      setBacklogs(0);
    }
    if (step === 4) setPreferredIntake(null);
    if (step === 5) {
      setEnglishTest(null);
      setEnglishScore(3);
    }
  };

  // Function to handle English score slider change
  const handleScoreChange = (e) => {
    const value = parseFloat(e.target.value);
    setEnglishScore(value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="flex gap-4 max-w-4xl w-full relative">
        {/* Left Section */}
        <div
          className="relative text-white p-10 rounded-2xl w-[340px] h-[460px] bg-[#FA890ED6] flex flex-col justify-center items-start z-10"
          style={{
            backgroundColor: "#FA890ED6",
          }}
        >
          {/* Sloth Image */}
          <div className="absolute -top-12 -left-10">
            <img src={panda} alt="Sloth" className="w-64" />
          </div>

          {/* Germany Map SVG */}
          <div className="absolute inset-0 flex items-center top-24 justify-center z-0 opacity-50">
            <svg
              fill="#FFCC9533"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 196 260"
              enableBackground="new 0 0 196 260"
              xmlSpace="preserve"
              width="400"
              height="250"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M186.695,112.9l-3.258-34.73l-11.126-8.64l4.586-16.532l-4.682-20.129l-14.746-5.623l-12.212-10.475l-7.434-0.603 l-20.249,19.525l-10.981-1.762l3.113-7.506L89.119,14.237l-2.003-8.302L62.786,2l2.679,29.059l6.65,5.93l-11.96-0.041l-1.424,8.061 l0.796,3.306l-11.898-7.168l-14.553,1.279l-4.417,7.072l2.486,16.436l-4.344,24.304l-14.047,13.129l-9.509,0.145l5.02,14.409 l-6.203,20.056l7.651,15.905l-5.068,3.379l3.041,23.363l10.064,11.174l11.778,2.003l19.96,5.985l-10.957,12.936l-7.723,31.52 l18.825,3.669l12.623-2.076l15.953,2.582L94.065,258l5.02-7.603l16.774,4.199l8.182-6.468l25.921-3.186l-0.845-15.253l21.287-14.312 l1.834-8.327l-23.218-18.005L134.374,160.3l10.173,0.075l35.777-24.884l9.22,1.762l4.393-14.553L186.695,112.9z"></path>{" "}
              </g>
            </svg>
          </div>

          <h2
            className="text-xl z-10"
            style={{
              fontFamily: "Gilroy-Medium",
            }}
          >
            Let us help you
          </h2>
          <p
            className="text-xl z-10"
            style={{
              fontFamily: "Gilroy-Medium",
            }}
          >
            Find your dream!
          </p>
        </div>

        {/* Right Section */}
        <div
          className={`w-1/2 p-8 rounded-2xl shadow-md flex flex-col items-center z-10 relative ${
            step === 2
              ? "h-[500px] w-[600px]"
              : step === 3
              ? "h-[400px] w-[600px]"
              : step === 4
              ? "h-[400px] w-[600px]"
              : step === 5
              ? "h-[400px] w-[600px]"
              : "h-[250px]"
          }`}
          style={{
            background: "#FFCC9540",
          }}
        >
          {/* Back Button (Small Circle) */}
          {(step === 2 || step === 3 || step === 4 || step === 5) && (
            <button
              className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              onClick={handleBack}
            >
              <FaArrowLeft className="text-xl text-gray-700" />
            </button>
          )}

          {/* Step 1: Degree Selection */}
          {step === 1 && (
            <>
              <h3
                className="text-xl text-black-700 mb-6"
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
              >
                Which degree do you want to pursue?
              </h3>
              <div className="flex gap-4 mb-6">
                {["Bachelor's", "Master's"].map((degree) => (
                  <button
                    key={degree}
                    className={`px-6 py-3 border rounded-full flex items-center gap-2 text-xl bg-white ${
                      selectedDegree === degree
                        ? "border-orange-500 shadow-md"
                        : "border-gray-300"
                    }`}
                    style={{
                      fontFamily: "Gilroy-Medium",
                      background: "white",
                    }}
                    onClick={() => setSelectedDegree(degree)}
                  >
                    <span
                      className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text"
                      style={{
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      🎓 {degree}
                    </span>
                  </button>
                ))}
              </div>
              <button
                className="text-white px-6 py-3 rounded-full flex justify-center items-center gap-2"
                style={{
                  background:
                    "linear-gradient(180deg, #FF9422 0%, #D63715 100%)",
                  fontFamily: "Gilroy-Medium",
                }}
                onClick={handleNext}
              >
                Next <FaArrowRight />
              </button>
            </>
          )}

          {/* Step 2: Course Selection */}
          {step === 2 && (
            <>
              <h3
                className="text-xl text-black-700 mb-6"
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
              >
                Select your course
              </h3>
              {splitCategories(categories).map((chunk, chunkIndex) => (
                <div
                  key={chunkIndex}
                  className={`grid gap-4 w-full ${
                    chunkIndex === 0
                      ? "grid-cols-2" // First grid: 2 items
                      : chunkIndex === 1
                      ? "grid-cols-3" // Second grid: 3 items
                      : chunkIndex === 2
                      ? "grid-cols-4" // Third grid: 4 items
                      : "grid-cols-1" // Fourth grid: 1 item
                  }`}
                >
                  {chunk.map((category, index) => (
                    <button
                      key={index}
                      className={`relative px-4 py-3 border rounded-[30px] flex items-center gap-2 text-sm bg-white ${
                        selectedCourse === category.name
                          ? "border-orange-500 shadow-md"
                          : "border-gray-300"
                      }`}
                      style={{
                        fontFamily: "Gilroy-Medium",
                        background: "white",
                        minWidth: "150px", // Set a minimum width for all buttons
                        maxWidth: "100%",
                        marginBottom: "6px",
                        marginLeft: "6px",
                        // Ensure buttons don't overflow
                      }}
                      onClick={() => setSelectedCourse(category.name)}
                    >
                      <img
                        src={category.icon} // Use the PNG image path
                        alt={category.name}
                        className="w-6 h-6" // Adjust the size as needed
                      />
                      <span
                        className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text whitespace-nowrap overflow-hidden overflow-ellipsis"
                        style={{
                          fontFamily: "Gilroy-Medium",
                        }}
                      >
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
              <button
                className={`mt-6 px-6 py-3 rounded-full flex justify-center items-center gap-2 ${
                  selectedCourse
                    ? "bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white"
                    : "bg-gray-300 text-gray-700 cursor-not-allowed"
                }`}
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
                disabled={!selectedCourse}
                onClick={handleNext}
              >
                Next <FaArrowRight />
              </button>
            </>
          )}
          {/* Step 3: Education Level Selection */}
          {step === 3 && (
            <>
              <h3
                className="text-xl text-black-700 mb-6"
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
              >
                What is your current education level?
              </h3>
              <div className="flex gap-4 mb-6">
                {["12th", "Bachelor", "Master"].map((level) => (
                  <button
                    key={level}
                    className={`px-6 py-3 border rounded-full flex items-center gap-2 text-xl bg-white ${
                      educationLevel === level
                        ? "border-orange-500 shadow-md"
                        : "border-gray-300"
                    }`}
                    style={{
                      fontFamily: "Gilroy-Medium",
                      background: "white",
                    }}
                    onClick={() => setEducationLevel(level)}
                  >
                    <span
                      className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text"
                      style={{
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      {level}
                    </span>
                  </button>
                ))}
              </div>

              {/* Percentage Slider (for 12th, Bachelor, and Master) */}
              {(educationLevel === "12th" ||
                educationLevel === "Bachelor" ||
                educationLevel === "Master") && (
                <div className="w-full mb-4">
                  <h4
                    className="text-lg text-black-700 mb-2"
                    style={{
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    Percentage Marks Obtained
                  </h4>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={percentage}
                      onChange={(e) => setPercentage(Number(e.target.value))}
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-orange-500 [&::-moz-range-thumb]:rounded-full"
                    />
                    <div className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm">
                      {percentage}%
                    </div>
                  </div>
                </div>
              )}

              {/* Backlogs Slider (for Bachelor and Master) */}
              {(educationLevel === "Bachelor" ||
                educationLevel === "Master") && (
                <div className="w-full mb-4">
                  <h4
                    className="text-lg text-black-700 mb-2"
                    style={{
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    Backlogs
                  </h4>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={backlogs}
                      onChange={(e) => setBacklogs(Number(e.target.value))}
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-orange-500 [&::-moz-range-thumb]:rounded-full"
                    />
                    <div className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm">
                      {backlogs}
                    </div>
                  </div>
                </div>
              )}

              <button
                className={`mt-0 px-6 py-3 rounded-full flex justify-center items-center gap-2 ${
                  educationLevel
                    ? "bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white"
                    : "bg-gray-300 text-gray-700 cursor-not-allowed"
                }`}
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
                disabled={!educationLevel}
                onClick={handleNext}
              >
                Next <FaArrowRight />
              </button>
            </>
          )}

          {/* Step 4: Preferred Intake Selection */}
          {step === 4 && (
            <>
              <h3
                className="text-xl text-black-700 mb-6"
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
              >
                What is your preferred intake?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {intakeOptions.map((intake, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 border rounded-full flex items-center justify-center text-sm bg-white ${
                      preferredIntake === intake
                        ? "border-orange-500 shadow-md"
                        : "border-gray-300"
                    }`}
                    style={{
                      fontFamily: "Gilroy-Medium",
                      background: "white",
                      width: "100%", // Full width for grid items
                      height: "80px", // Adjusted height
                    }}
                    onClick={() => setPreferredIntake(intake)}
                  >
                    <span
                      className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text text-center"
                      style={{
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      {intake}
                    </span>
                  </button>
                ))}
              </div>
              <button
                className={`mt-6 px-6 py-3 rounded-full flex justify-center items-center gap-2 ${
                  preferredIntake
                    ? "bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white"
                    : "bg-gray-300 text-gray-700 cursor-not-allowed"
                }`}
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
                disabled={!preferredIntake}
                onClick={handleNext}
              >
                Next <FaArrowRight />
              </button>
            </>
          )}

          {/* Step 5: English Test Selection */}
          {step === 5 && (
            <>
              <h3
                className="text-xl text-black-700 mb-6"
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
              >
                Which English test did you take?
              </h3>
              <div className="flex gap-4 mb-6">
                {englishTests.map((test) => (
                  <button
                    key={test}
                    className={`px-6 py-3 border rounded-full flex items-center gap-2 text-xl bg-white ${
                      englishTest === test
                        ? "border-orange-500 shadow-md"
                        : "border-gray-300"
                    }`}
                    style={{
                      fontFamily: "Gilroy-Medium",
                      background: "white",
                    }}
                    onClick={() => setEnglishTest(test)}
                  >
                    <span
                      className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text"
                      style={{
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      {test}
                    </span>
                  </button>
                ))}
              </div>

              {/* Score Slider (for TOEFL, IELTS, PTS) */}
              {englishTest !== "None" && (
                <div className="w-full mb-4">
                  <h4 className="text-lg text-black-700 mb-2">
                    Select Your Score
                  </h4>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="3"
                      max="9"
                      step="0.5"
                      value={englishScore}
                      onChange={handleScoreChange}
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-orange-500 [&::-moz-range-thumb]:rounded-full"
                    />
                    <div className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm">
                      {englishScore}
                    </div>
                  </div>
                </div>
              )}

              <button
                className={`mt-4 px-6 py-3 rounded-full flex justify-center items-center gap-2 ${
                  englishTest
                    ? "bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white"
                    : "bg-gray-300 text-gray-700 cursor-not-allowed"
                }`}
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
                disabled={!englishTest}
                onClick={handleNext2}
              >
                Next <FaArrowRight />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
