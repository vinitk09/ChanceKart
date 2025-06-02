import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import panda from "../components/HeroImage/panda.png";
// import br from "../components/HeroImage/berlin.jpeg";
import car from "../components/HeroImage/car-bg.jpg";
import ebs from "../components/HeroImage/ebs.jpeg";
import esmt from "../components/HeroImage/esmt.jpeg";
import fr from "../components/HeroImage/frankfurt.jpeg";
import gs from "../components/HeroImage/gisma.jpeg";
import hhl from "../components/HeroImage/hhl.jpeg";
import manheim from "../components/HeroImage/manheim.jpeg";
import munich from "../components/HeroImage/munich.jpeg";
import whu from "../components/HeroImage/whu.jpeg";

export default function Hero2() {
  // University data array
  const universityData = [
    {
      id: 1,
      // image: br, // Path to image
      title: "Berlin School of Business and Innovation (BSBI)",
      program: "Global MBA (#98)",
      duration: "12 Months - Online",
      badge: " 37th (Financial Times Global MBA Ranking 2024)",
      percentage: "77%",
    },
    {
      id: 2,
      image: esmt,
      title: "ESMT Berlin ",
      program: " Full-Time MBA (#37)",
      duration: "24 Months - On Campus",
      badge: "TOP 10 IN EUROPE",
      percentage: "85%",
    },
    {
      id: 3,
      image: ebs,
      title: "EBS Universität für Wirtschaft und Recht",
      program: "Full-Time MBA (#85)",
      duration: "18 Months - Hybrid",
      badge: "TOP 5 IN GERMANY",
      percentage: "90%",
    },
    {
      id: 4,
      image: fr,
      title: "Frankfurt School of Finance & Management",
      program: " Full-Time MBA (#62)",
      duration: "18 Months - Hybrid",
      badge: "TOP 5 IN GERMANY",
      percentage: "90%",
    },
    {
      id: 5,
      image: gs,
      title: "GISMA Business School ",
      program: "Global MBA (#95)",
      duration: "18 Months - Hybrid",
      badge: "TOP 5 IN GERMANY",
      percentage: "90%",
    },
    {
      id: 6,
      image: hhl,
      title: "HHL Leipzig Graduate School of Management",
      program: " Full-Time MBA (#75)",
      duration: "18 Months - Hybrid",
      badge: "TOP 5 IN GERMANY",
      percentage: "90%",
    },
    {
      id: 7,
      image: manheim,
      title: "Mannheim Business School",
      program: " Full-Time MBA (#52)",
      duration: "18 Months - Hybrid",
      badge: "TOP 5 IN GERMANY",
      percentage: "90%",
    },
    {
      id: 8,
      image: munich,
      title: "Munich Business School",
      program: " MBA International Management (#90)",
      duration: "18 Months - Hybrid",
      badge: "TOP 5 IN GERMANY",
      percentage: "90%",
    },
    {
      id: 9,
      image: whu,
      title: "WHU – Otto Beisheim School of Management",
      program: " Full-Time MBA (#63)",
      duration: "18 Months - Hybrid",
      badge: "TOP 5 IN GERMANY",
      percentage: "90%",
    },
    // Add more objects for the remaining 6 cards
  ];
  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{
        fontFamily: "Gilroy-Medium",
      }}
    >
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-2">
        Top Universities according to your Preferences!
      </h1>
      <p className="text-gray-500 text-center mb-8 max-w-3xl mx-auto">
        Get your dream university within few steps
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Help Card */}
          <div className="bg-orange-400 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute -left-4 -top-4">
              <img
                src={panda}
                alt="Sloth mascot"
                width={120}
                height={120}
                className=""
              />
            </div>
            <div className="pt-16">
              <h3 className="text-white text-xl font-semibold mb-2">
                Need more help in finding your dream college?
              </h3>
              <button className="bg-white text-black hover:bg-gray-100 mt-2 px-4 py-2 rounded">
                Talk to expert
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <FilterItem
              label="Budget"
              options={["< $10,000", "$10,000 - $20,000", "> $20,000"]}
            />
            <FilterItem
              label="Degree"
              options={["Bachelor's", "Master's", "PhD"]}
            />
            <FilterItem
              label="Semester"
              options={["Spring", "Summer", "Fall"]}
            />
            <FilterItem label="University" options={["Public", "Private"]} />
            <FilterItem
              label="Specialization"
              options={["Business", "Engineering", "Arts"]}
            />

            <div className="pt-4">
              <p className="text-gray-700 font-medium mb-3">Course level</p>
              <div className="space-y-2">
                <DegreeButton label="Bachelor's" icon="📊" active={false} />
                <DegreeButton label="Master's" icon="📊" active={true} />
              </div>
            </div>

            <FilterItem label="University" options={["Public", "Private"]} />
            <FilterItem
              label="Specialization"
              options={["Business", "Engineering", "Arts"]}
            />
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {universityData.map((data) => (
            <UniversityCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

// FilterItem component
function FilterItem({ label, options }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-200 pb-3"
      style={{
        fontFamily: "Gilroy-Medium",
      }}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{label}</span>
        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center">
          <ChevronRight
            className={`h-4 w-4 text-orange-400 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 space-y-2">
          {options.map((option, index) => (
            <div
              key={index}
              className="text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// DegreeButton component
function DegreeButton({ label, icon, active }) {
  return (
    <button
      className={`w-full flex items-center justify-start gap-2 border px-4 py-2 rounded ${
        active ? "border-orange-400 text-orange-500" : "border-gray-300"
      }`}
      style={{
        fontFamily: "Gilroy-Medium",
      }}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
      {active && (
        <div className="ml-auto h-4 w-4 rounded-full bg-green-500"></div>
      )}
    </button>
  );
}

// UniversityCard component
function UniversityCard({ data }) {
  return (
    <div
      className="overflow-hidden bg-orange-50 border border-orange-100 rounded-lg"
      style={{
        fontFamily: "Gilroy-Medium",
      }}
    >
      <div className="p-0">
        <div className="p-4">
          <div className="mb-4">
            <img
              src={data.image} // Use the image from props
              alt={data.title} // Use the title from props
              width={200}
              height={100}
              className="rounded-md w-full h-32 object-cover" // Adjust image size and styling
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-orange-500 font-semibold">{data.title}</h3>
              <p className="font-medium">{data.program}</p>
              <p className="text-sm text-gray-600 mt-1">{data.duration}</p>
              <span className="mt-2 inline-block bg-orange-100 text-orange-700 px-2 py-1 text-xs font-semibold border border-orange-200 rounded">
                {data.badge}
              </span>
            </div>
            <div className="relative h-12 w-12">
              <div className="h-12 w-12 rounded-full border-2 border-orange-300 flex items-center justify-center">
                <span className="text-orange-500 font-bold">
                  {data.percentage}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pt-0">
        <button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded">
          View Program
        </button>
      </div>
    </div>
  );
}
