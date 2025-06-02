// "use client";
import { MapPin, Phone } from "lucide-react";
// import Image from "next/image";

const ClientCard = ({
  name,
  company,
  address,
  location,
  position,
  phone,
  website,
  email,
}) => {
  // Random person images from Unsplash
  const randomImages = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
  ];
  const randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)];

  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_10px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_15px_rgba(249,115,22,0.4)] transition-shadow duration-300 flex relative">
      {" "}
      {/* Left side - Image and Position */}
      <div className="flex flex-col items-center mr-4 mt-2">
        {" "}
        {/* Added mt-2 for downward shift */}
        <div className="relative w-24 h-24 mb-2 rounded-full overflow-hidden border-4 border-sky-100">
          {" "}
          {/* Enlarged to w-24 h-24 */}
          <img
            src={randomImage}
            alt={`${name} profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-600 font-medium">{position}</p>
      </div>
      {/* Right side - Details */}
      <div className="flex-1 ml-4">
        {" "}
        {/* Added ml-4 to shift right content further right */}
        <div className="flex flex-col">
          <h3 className="text-md font-bold">{name}</h3>
          <p className="text-gray-700 text-sm">{company}</p>
          <p className="text-sm text-gray-500 mt-1">{address}</p>

          <div className="w-full mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">{phone}</span>
            </div>
          </div>

          {/* Centered website and email */}
          <div className="w-full mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              {" "}
              {/* Added text-center */}
              {website} | {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function SuccessfulClients() {
  const clients = [
    {
      name: "Jay Vaughn",
      company: "Shell, Inc.",
      address: "08 Deshawn Crossing Apt. 199.PA",
      location: "Pennsylvania",
      position: "Manager",
      phone: "011-024-2411",
      website: "www.jayvaughn.com",
      email: "jay@insurance.com",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207-wWn7B47FT82Pr45Q504CzeOtNEYeBC.png",
    },
    {
      name: "Jay Vaughn",
      company: "Shell, Inc.",
      address: "08 Deshawn Crossing Apt. 199.PA",
      location: "Pennsylvania",
      position: "Manager",
      phone: "011-024-2411",
      website: "www.jayvaughn.com",
      email: "jay@insurance.com",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207-wWn7B47FT82Pr45Q504CzeOtNEYeBC.png",
    },
    {
      name: "Jay Vaughn",
      company: "Shell, Inc.",
      address: "08 Deshawn Crossing Apt. 199.PA",
      location: "Pennsylvania",
      position: "Manager",
      phone: "011-024-2411",
      website: "www.jayvaughn.com",
      email: "jay@insurance.com",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207-wWn7B47FT82Pr45Q504CzeOtNEYeBC.png",
    },
    {
      name: "Jay Vaughn",
      company: "Shell, Inc.",
      address: "08 Deshawn Crossing Apt. 199.PA",
      location: "Pennsylvania",
      position: "Manager",
      phone: "011-024-2411",
      website: "www.jayvaughn.com",
      email: "jay@insurance.com",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207-wWn7B47FT82Pr45Q504CzeOtNEYeBC.png",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-black">Meet Our</span>
            <br className="md:hidden" />
            <span className="text-orange-500"> Successful Clients</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Beyond job applications, we assist with essential relocation
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <ClientCard key={index} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
