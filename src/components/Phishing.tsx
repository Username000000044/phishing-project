// components/Phishing.tsx

import { useEffect, useState } from "react";
import { incrementVisitCount } from "../lib/pageCounter";
import "../index.css";

const Phishing = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    incrementVisitCount()
      .then(setCount)
      .catch((err) => {
        console.error("Error incrementing visit count:", err);
        setCount(null);
      });
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
            individuals into revealing sensitive information by impersonating
            trusted entities.
          </p>
        </div>
      </section>
      <div className="text-black text-lg mt-2">
        {count !== null ? (
          <p>{count} staff member(s) have fallen for this phishing test.</p>
        ) : (
          <p>Loading visit count...</p>
        )}
      </div>
    </div>
  );
};

export default Phishing;
