// components/Phishing.tsx

import { useEffect, useState } from "react";
import { incrementVisitCount } from "../lib/pageCounter";

const Phishing = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    incrementVisitCount()
      .then(setCount)
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="flex flex-col font-roboto min-h-screen bg-white justify-center items-center">
      <section className="bg-[#2C2F33] max-w-[70rem] text-center shadow-[0px_0px_110px_15px_rgba(60,190,27,0.2)] rounded-lg p-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center">
          <h1 className="text-8xl font-anonymous text-[#00FF41] font-bold">
            You have been{" "}
            <mark className="px-2 text-white bg-[#00b52e] rounded-sm">
              phished
            </mark>
            !
          </h1>
          <p className="text-2xl text-gray-400 text-justify ms-4 my-8">
            Phishing attacks are deceptive attempts by cybercriminals to trick
            individuals into revealing sensitive information, such as passwords
            or credit card numbers, by impersonating trusted entities. This form
            and email was constructed to appear as legit; however, when clicked
            on, it redirected the user to another page and could have been used
            to collect sensitive data.
          </p>
        </div>
      </section>
      <div className="text-black text-lg mt-2">
        {count !== null ? (
          <p>
            {count} Staff Member(s) have fallen for this phishing email/form.
          </p>
        ) : (
          <p>Loading visit count...</p>
        )}
      </div>
    </div>
  );
};

export default Phishing;
