import React from "react";

const Form = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl mx-auto bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-1 bg-primary"></div>
        <div className="p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Info Section */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
                GET IN TOUCH
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary-light dark:text-text-primary-dark leading-tight">
                Elevate your brand with Me
              </h1>
              <p className="mt-4 text-text-secondary-light dark:text-text-secondary-dark text-base">
                It is an established fact that a reader will be distracted. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters.
              </p>
            </div>

            {/* Right Form Section */}
            <div>
              <form action="#" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark text-text-primary-light dark:text-text-primary-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark text-text-primary-light dark:text-text-primary-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark text-text-primary-light dark:text-text-primary-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark text-text-primary-light dark:text-text-primary-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark text-text-primary-light dark:text-text-primary-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transform transition-all duration-200 ease-in-out shadow-lg shadow-primary/30"
                  >
                    <span>Appointment Now</span>
                   
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
