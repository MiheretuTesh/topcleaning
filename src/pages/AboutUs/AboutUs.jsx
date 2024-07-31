import React from "react";

const AboutUs = () => {
  return (
    <div className="mx-40 mb-20">
      <section
        className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
        style={{ backgroundImage: "url(/images/about.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-12 flex items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
            <h1 className="text-6xl font-bold mb-4 w-96 text-left">
              Who Are
              <br /> We? <br />
              Get To <br />
              Know Us
            </h1>
            <p className="text-2xl mb-6 text-gray-700 font-semibold text-left">
              Our cleaning company is known for its professionalism and <br />
              reliability. We ensure that every appointment is kept and every
              <br />
              job is completed to the highest standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-center mb-12">About Us</h2>
          <div className="flex-col space-y-40">
            <div className="flex flex-col md:flex-row items-center mx-10">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img
                  src="/images/about_1.png"
                  alt="What We Offer"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-12 flex flex-col justify-between h-full">
                <div className="mb-8 text-left flex flex-col space-y-10">
                  <h3 className="text-xl font-semibold mb-2">Top Cleaning</h3>
                  <p className="text-xl text-gray-700">
                    We are a group of people focused on becoming the solution to
                    your needs with quality in what concerns cleaning and
                    maintenance, creating technical solutions, through the use
                    of implements, supplies and products that guarantee
                    excellence in the services that we provide as a company. In
                    the execution of each of our services we have a highly
                    trained, qualified and certified human contingent focused on
                    working under effective and efficient procedures always
                    based on the optimization of resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mx-10">
              <div className="w-full md:w-2/3 md:pr-12 flex flex-col justify-between h-full">
                <div className="mb-8 text-left flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-xl text-gray-700">
                    Create and provide exceptional products and services that
                    strengthen and ensure the operation of each of our clients,
                    focusing on procedures that guarantee satisfied customers.
                  </p>
                </div>
                <div className="mb-8 text-left flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-xl text-gray-700">
                    We are a group of people focused on becoming the solution to
                    your needs with quality in what concerns cleaning and
                    maintenance, creating technical solutions, through the use
                    of implements, supplies and products that guarantee
                    excellence in the services that we provide as a company. In
                    the execution of each of our services we have a highly
                    trained, qualified and certified human contingent focused on
                    working under effective and efficient procedures always
                    based on the optimization of resources.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img
                  src="/images/about_2.png"
                  alt="What We Offer"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/about_3.png"
                  alt="Integrity"
                  className="w-20 h-20 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-700 text-lg text-left">
                  Integrity is at the heart of everything we do. We believe in
                  being honest and transparent with our clients, partners, and
                  employees.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/about_4.png"
                  alt="Trust"
                  className="w-20 h-20 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">Trust</h3>
                <p className="text-gray-700 text-lg text-left">
                  We are committed to building and maintaining trust with our
                  clients through consistent communication, reliability, and by
                  delivering on our promises.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/about_5.png"
                  alt="Excellence"
                  className="w-20 h-20 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-700 text-lg text-left">
                  We are dedicated to achieving excellence in all aspects of our
                  business.Our team is trained to pay attention to every detail,
                  ensuring that we deliver outstanding results every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
