import React from 'react';

const Contact = () => {
    const LINKS = {
        linkedin: "https://www.linkedin.com/in/tahajid-ahmed/",
        whatsapp: "https://wa.me/8801602643544",
      };
    
    return (
        <div className='min-h-screen'>
    <section className=" py-12 px-6 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-2">Contact me</h2>
        <p className="text-gray-300 mb-6">
          I&rsquo;m open to projects, collaborations, and opportunities. Reach out on
          LinkedIn or send a message on WhatsApp — I usually reply quickly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5ZM0.48 24H4.48V7.98H0.48V24ZM8.98 24H12.98V15.5C12.98 12.98 16.98 12.72 16.98 15.5V24H20.98V14.5C20.98 9.74 12.98 10.06 8.98 13.38V24Z" fill="currentColor" />
              </svg>

              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <p className="text-gray-300 text-sm">Connect with me on LinkedIn</p>
                <span className="inline-block mt-3 text-blue-400 group-hover:underline">View profile →</span>
              </div>
            </div>
          </a>

          <div className="block p-5 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.52 3.48C18.2 1.16 15.08 0 12 0 5.37 0 0 5.37 0 12c0 2.95 1.08 5.68 3.04 7.78L0 24l4.38-2.88C6.48 21.9 9.23 23 12 23c6.63 0 12-5.37 12-12 0-3.08-1.16-6.2-3.48-8.52zM12 21.5c-2.31 0-4.55-.67-6.45-1.92l-.46-.28L3 20l1.71-1.09-.28-.46C3.17 16.55 2.5 14.31 2.5 12 2.5 6.2 6.2 2 12 2c2.34 0 4.55.67 6.45 1.92l.46.28L21 4l-1.71 1.09.28.46C20.83 7.45 21.5 9.69 21.5 12c0 5.8-3.7 9.5-9.5 9.5z" fill="currentColor" />
              </svg>

              <div className="flex-1">
                <h3 className="text-white font-semibold">WhatsApp</h3>
                <p className="text-gray-300 text-sm">Message me: <span className="text-blue-400">+8801602643544</span></p>

                <div className="mt-3 flex gap-3">
                  <a
                    href={LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-400 text-black font-medium hover:opacity-90"
                  >
                    Open chat
                  </a>

                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Box */}
          <div className="block mt-6 p-5 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z" fill="currentColor" />
              </svg>

              <div className="flex-1">
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-300 text-sm">tahajid406@gmail.com</p>

                <div className="mt-3 flex gap-3">
                  <a
                    href="mailto:tahajid406@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-400 text-black font-medium hover:opacity-90"
                  >
                    Send Email
                  </a>

                  <button
                    onClick={() => navigator.clipboard.writeText("tahajid406@gmail.com")}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-700 text-gray-100 hover:bg-gray-700"
                  >
                    Copy Email
                  </button>
                </div>
              </div>
            </div>
          </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>
            Prefer a different contact method? Let me know and I&rsquo;ll add it here.
          </p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Contact;