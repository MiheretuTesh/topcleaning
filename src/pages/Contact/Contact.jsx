import React from "react";

const Contact = () => {
  return (
    <div className="mx-40 mb-20" id="#">
      <section
        className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
        style={{ backgroundImage: "url(/images/contact.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-12 flex items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
            <h1 className="text-6xl font-bold mb-4 w-96 text-left">
              Get In
              <br />
              Touch
              <br />
              With Us.
              <br />
              Contact Us
            </h1>
            <p className="text-2xl mb-6 text-gray-700 font-semibold text-left">
              Your satisfaction is our priority. Please feel free to contact us
              <br /> for any questions or cleaning services
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="flex flex-col items-center md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex flex-col space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-2 text-left"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-2 border-black rounded-full px-4 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2 text-left"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border-2 border-black rounded-full px-4 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium mb-2 text-left"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Enter the subject"
                    className="w-full border-2 border-black rounded-full px-4 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-2 text-left"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                    className="w-full border-2 border-black rounded-full px-8 py-2"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-8 font-lato">
              <div className="space-y-10">
                <h3 className="text-4xl font-semibold">Get in Touch</h3>
                <h3 className="text-xl text-left">
                  We’d love to hear from you! Whether you have questions about
                  our services, need assistance, or just want to share your
                  feedback, feel free to reach out to us using the information
                  below.
                </h3>

                <h3 className="text-xl text-left">
                  You can reach us on +593 98 783 3508 <br /> Emai us on
                  info@topcleaningec.com
                </h3>
              </div>

              <div className="flex-col">
                <h3 className="text-4xl font-semibold mb-2">Follow Us</h3>
                <div className="flex gap-4 justify-center">
                  <img
                    src="/images/facebook_1.png"
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                  <img
                    src="/images/instagram_1.png"
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                  <img
                    src="/images/twitter_1.png"
                    alt="Twitter"
                    className="w-8 h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Our Location</h2>
          <div className="relative w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12038.08166385152!2d-74.01280983275792!3d40.71277527686759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3178372d03%3A0x8f8d4b8d8d8d8d8!2sNew%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1656005079305!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
