import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Us
        </h2>
        <p>
          I am currently open for opportunities related to full stack web development. If you
          want to discuss about that feel free to email me.
        </p>

        <p className="py-1">
          <span className="font-bold">Email:</span> shubhankarsharma22@gmail.com
        </p>
        <p className="py-1">
          <span className="font-bold">linkedin:</span> linkedin.com/in/sharma-shubhankar/
        </p>
      </div>
    </section>
  );
};

export default Contact;
