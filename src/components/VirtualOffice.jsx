import React from "react";
import video from "./video.mp4";

const VirtualOffice = () => {
  return (
    <div className="main flex h-full w-full flex-row overflow-hidden">
      <div
        className="div1 w-[57%] h-[100vh] px-14 py-6 grid items-center"
        style={{
          background:
            "radial-gradient(135.63% 115.9% at 4.24% 97.94%, rgb(237, 224, 250) 0%, rgb(238, 227, 231) 48.06%, rgb(236, 245, 255) 100%)",
        }}
      >
        <div
          className="inside_div1 overflow-clip rounded-xl bg-white"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <section className="text-center space-y-1 p-6">
            <p className="text-3xl font-bold flex flex-col items-center  bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent">
              Welcome to Germanywale's on-spot
              <span>Counselling service</span>
            </p>{" "}
            <p className="text-gray-600">
              Your Study in Germany. Answered instantly by our experts!
            </p>
          </section>
          <section className="space-y-6 pt-0 p-6">
            <div className="flex h-full flex-col max-h-[320px] overflow-clip 2xl:max-h-[440px]">
              <video
                className="w-full cursor-pointer rounded-b-xl xl:-mt-[8%] xl:-mb-[8%] 2xl:-mt-[2%]"
                autoPlay
                loop
                playsInline
                muted
              >
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="div1 flex flex-grow items-center gap-2.5 px-4 py-2 rounded-lg bg-orange-300 ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4052/4052981.png"
                  alt="Counselling"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-sm font-bold leading-5 bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent">
                  Get Personalized Counselling
                </span>
              </div>
              <div className="div2 flex flex-grow items-center gap-2.5 px-4  py-2 rounded-lg bg-orange-300 ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1570/1570887.png"
                  alt="Application"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-sm font-bold leading-5 bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent">
                  Overview of Application Process
                </span>
              </div>
              <div className="div3 flex flex-grow items-center gap-2.5 px-4 py-2 rounded-lg bg-orange-300 ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4776/4776371.png"
                  alt="Scholarship"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-sm font-bold leading-5 bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent">
                  Scholarship and Loan Advice
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="div2 w-[43%] bg-gray-50 p-14 flex h-[100vh]">
        <div className="id2 h-full w-full">
          <div className="div1 flex h-full flex-col justify-center">
            <div className="div11 space-y-2">
              <div className="div111 w-fit rounded-full text-white bg-blue-600 px-3 py-1.5">
                Free Counselling
              </div>
              <p className="text-2xl font-bold">
                Signin to start clearing your doubts
              </p>
            </div>
            <div className="mb-6 mt-9 min-h-[304px]">
              {" "}
              {/* Changed mb-10 to mb-6 to move OTP button up */}
              <div className="div12 space-y-6">
                <div className="div121">
                  <p className="mb-2 text-sm font-bold">
                    Enter Your Number to Login
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="relative ">
                      <select className="w-full rounded-lg py-2.5 pl-3 mr-6 pr-4 border border-gray-300 appearance-none">
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full rounded-lg py-2.5 px-3 border border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="flex w-full justify-center items-center gap-2 rounded-xl px-5 py-3 bg-blue-600 text-white font-medium cursor-not-allowed">
              Get OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualOffice;
// import React from "react";
// import video from "./video.mp4";

// const VirtualOffice = () => {
//   return (
//     <div className="main flex h-screen w-full">
//       {/* Left Column (57%) */}
//       <div className="w-[57%] h-full p-6 flex items-center justify-center">
//         <div className="w-full h-full max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-lg">
//           <section className="text-center space-y-1 p-6">
//             <p className="text-3xl font-bold flex flex-col items-center">
//               Welcome to Germanywale's on-spot
//               <span>Counselling service</span>
//             </p>
//             <p className="text-gray-600">
//               Your Study in Germany. Answered instantly by our experts!
//             </p>
//           </section>
//           <section className="space-y-6 px-6 pb-6">
//             <div className="flex h-full flex-col max-h-[320px] overflow-hidden 2xl:max-h-[440px]">
//               <video
//                 className="w-full cursor-pointer rounded-lg"
//                 autoPlay
//                 loop
//                 playsInline
//                 muted
//               >
//                 <source src={video} type="video/mp4" />
//               </video>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex flex-1 items-center gap-3 p-3 rounded-lg bg-gray-50">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/4052/4052981.png"
//                   alt="Counselling"
//                   className="h-10 w-10 object-contain"
//                 />
//                 <span className="text-sm font-bold">
//                   Get Personalized Counselling
//                 </span>
//               </div>
//               <div className="flex flex-1 items-center gap-3 p-3 rounded-lg bg-gray-50">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/1570/1570887.png"
//                   alt="Application"
//                   className="h-10 w-10 object-contain"
//                 />
//                 <span className="text-sm font-bold">
//                   Overview of Application Process
//                 </span>
//               </div>
//               <div className="flex flex-1 items-center gap-3 p-3 rounded-lg bg-gray-50">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/4776/4776371.png"
//                   alt="Scholarship"
//                   className="h-10 w-10 object-contain"
//                 />
//                 <span className="text-sm font-bold">
//                   Scholarship and Loan Advice
//                 </span>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* Right Column (43%) */}
//       <div className="w-[43%] h-full flex items-center justify-center bg-gray-50">
//         <div className="w-full max-w-md p-8">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="w-fit rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white">
//                 Free Counselling
//               </div>
//               <h2 className="text-2xl font-bold">
//                 Sign in to start clearing your doubts
//               </h2>
//             </div>
//             <div className="mb-10 mt-9 min-h-[304px]">
//               <div className="space-y-6">
//                 <div>
//                   <label className="mb-2 block text-sm font-bold">
//                     Enter Your Number to Login
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                       <span className="text-gray-500">+91</span>
//                       <div className="mx-2 h-5 w-px bg-gray-300"></div>
//                     </div>
//                     <input
//                       type="tel"
//                       placeholder="Mobile Number"
//                       className="w-full rounded-lg border border-gray-300 py-2.5 pl-20 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>

//                 <button className="w-full rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                   Get OTP
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VirtualOffice;
