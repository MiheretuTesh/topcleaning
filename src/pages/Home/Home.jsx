import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: false,
    arrows: false,
  };

  return (
    <div className="mx-40 mb-20">
      <section
        className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
        style={{ backgroundImage: "url(/images/home.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-12 flex items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h1 className="text-5xl font-bold mb-4 w-60 text-left">
              We Take Care of Your Cleanliness
            </h1>
            <p className="text-lg mb-6 text-slate-600 text-left">
              We care about our work and we care <br />
              about our clients.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 w-full md:w-auto"
              />
              <button className="bg-[#3461FF] text-white px-6 py-2 rounded-xl hover:bg-[#2547c1] w-full md:w-auto">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-center mb-12">What We Offer</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <img
                src="/images/home_2.png"
                alt="What We Offer"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-12">
              <div className="mb-8 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Monthly cleaning and maintenance
                </h3>
                <p className="text-md text-gray-700">
                  Scheduled maintenance and cleaning services every month,
                  ensuring that your facilities remain in optimal condition
                </p>
              </div>
              <div className="mb-8 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Daily cleaning and maintenance of construction sites
                </h3>
                <p className="text-md text-gray-700">
                  Daily post-construction cleaning services for construction
                  sites in progress, keeping the work environment safe and
                  organized
                </p>
              </div>
              <div className="mb-8 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Cleaning of refrigerated containers
                </h3>
                <p className="text-md text-gray-700">
                  Specialized services for the sanitation and maintenance of
                  refrigerated containers, ensuring health and optimal quality
                  for storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-center mb-12">
            What Our Clients Say About Us
          </h2>
          <Slider {...settings}>
            <div className="p-4">
              <div className="bg-[#1F3A99] text-white w-96 p-6 rounded-3xl shadow-md h-[250px] flex-col items-center font-lato">
                <div className="flex gap-3">
                  <img
                    src="/images/person_1.png"
                    alt="Client 1"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <p className="font-semibold text-xl">Yazmine</p>
                </div>
                <div>
                  <p className="text-lg mt-2">
                    "The team from Sparkle Clean was punctual and professional.
                    They arrived exactly on time and got straight to work. It's
                    great to have a cleaning company you can rely on."
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#D9D9D9] w-96 p-6 rounded-3xl shadow-md h-[250px]  flex-col items-center font-lato ">
                <div className="flex gap-3">
                  <img
                    src="/images/person_2.png"
                    alt="Client 1"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <p className="font-semibold text-xl">jane</p>
                </div>
                <div>
                  <p className="text-lg mt-2">
                    "Excellent value for the money. The quality of the cleaning
                    service far exceeds the cost, making it a great investment
                    for my home."
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <div className="relative bg-[#232038] p-8 overflow-hidden mx-[200px] rounded-3xl">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="border-l border-2 border-gray-700"
              style={{
                height: "100%",
                left: `${(i / 8) * 100}%`,
                position: "absolute",
              }}
            ></div>
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="border-t border-2 border-gray-700"
              style={{
                width: "100%",
                top: `${(i / 3) * 100}%`,
                position: "absolute",
              }}
            ></div>
          ))}
        </div>

        <div className="relative flex items-center justify-between pt-10">
          <div className="text-white w-1/2 pr-8 flex flex-col justify-center">
            <h2 className="text-6xl font-bold mb-4 text-left">
              Start your <br /> Cleaning with us <br />
              now
            </h2>
            <button className="bg-[#3461FF] text-white px-6 py-3 rounded-full font-semibold w-32">
              Start Now
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="bg-[#E0FF22] p-4 rounded-full flex items-center justify-center p-10">
              <img
                src="/images/home_3.png"
                alt="Feature"
                className="w-40 h-40 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
