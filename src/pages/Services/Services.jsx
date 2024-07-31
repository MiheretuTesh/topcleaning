import React from "react";

const Services = () => {
  return (
    <div className="mx-40 mb-20">
      <section
        className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
        style={{ backgroundImage: "url(/images/service.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-12 flex items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h1 className="text-6xl font-bold mb-4 w-96 text-left">
              We’re The Ones You’Ve Been Looking For
            </h1>
            <p className="text-2xl mb-6  text-gray-700 font-bold text-left">
              Our commitment is to excellence, ensuring that every corner
              <br />
              receives the attention it deserves.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-center mb-12">Our Services</h2>
          <div className="flex-col space-y-40">
            <div className="flex flex-col md:flex-row items-start mx-10">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img
                  src="/images/service_1.png"
                  alt="What We Offer"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-12 flex flex-col justify-between h-full">
                <div className="mb-8 text-left flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">
                    Residential Service
                  </h3>
                  <p className="text-xl text-gray-700">
                    We transform your home into a sanctuary of cleanliness and
                    tranquility, using eco-friendly products that protect your
                    family and the environment.
                  </p>
                </div>
                <div className="mt-auto flex">
                  <button className="bg-[#3461FF] text-white px-4 font-semibold pt-0 pb-2 text-2xl rounded-full w-30">
                    RESERVE IT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start mx-10">
              <div className="w-full md:w-2/3 md:pr-12 flex flex-col justify-between h-full">
                <div className="mb-8 text-left flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">
                    Commercial Service
                  </h3>
                  <p className="text-xl text-gray-700">
                    Keep your business looking great and welcoming to customers
                    and employees with flexible schedules that fit your work
                    pace.
                  </p>
                </div>
                <div className="mt-auto flex">
                  <button className="bg-[#3461FF] text-white px-4 font-semibold pt-0 pb-2 text-2xl rounded-full w-30">
                    RESERVE IT
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img
                  src="/images/service_2.png"
                  alt="What We Offer"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start mx-10">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img
                  src="/images/service_3.png"
                  alt="What We Offer"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-12 flex flex-col justify-between h-full">
                <div className="mb-8 text-left flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">
                    Residential Service
                  </h3>
                  <p className="text-xl text-gray-700">
                    We transform your home into a sanctuary of cleanliness and
                    tranquility, using eco-friendly products that protect your
                    family and the environment.
                  </p>
                </div>
                <div className="mt-auto flex">
                  <button className="bg-[#3461FF] text-white px-4 font-semibold pt-0 pb-2 text-2xl rounded-full w-30">
                    RESERVE IT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
