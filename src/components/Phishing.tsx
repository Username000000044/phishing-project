import "../index.css";

import { useEffect, useState } from "react";
import axios from "axios";

// const SHORT_LINK = 'https://your.short.link'; // Replace this with your Short.io link
// const SHORTIO_API_KEY = 'your_shortio_api_key_here';

const Phishing = () => {
  return (
    <div className="flex flex-col font-roboto min-h-screen bg-white justify-center items-center">
      <section className="bg-[#2C2F33] max-w-[70rem] text-center shadow-[0px_0px_110px_15px_rgba(60,190,27,0.2)] rounded-lg p-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center">
          <h1 className="text-8xl font-anonymous text-[#00FF41] font-bold">
            You have been{" "}
            <mark className="px-2 text-white bg-[#00b52e] rounded-sm">
              phished
            </mark>
            !{/* <span className="text-[20rem] text-white">1</span> */}
          </h1>
          <p className="text-2xl text-gray-400 text-justify ms-4 my-8">
            Phishing attacks are deceptive attempts by cybercriminals to trick
            individuals into revealing sensitive information, such as passwords
            or credit card numbers, by impersonating trusted entities. This form
            and email was contructed to appear as legit however when clicked on,
            redirected the user to another page, and could of been used to
            collect sensative data.
          </p>
        </div>
      </section>
      <p className="text-left text-lg mt-2">
        {1} Staff Member(s) have fallen for this phishing email/form
      </p>
    </div>
  );
};

export default Phishing;
