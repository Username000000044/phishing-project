import { useState, useEffect } from "react";

import PhishingPage from "../src/components/Phishing";
import FormPage from "../src/components/Form";
import { incrementVisitCount } from "./lib/pageCounter";

const App = () => {
  const [pageRendered, setPageRendered] = useState<boolean>(false);

  useEffect(() => {
    incrementVisitCount();
  }, []);

  useEffect(() => {
    const handleClick = () => {
      setPageRendered(!pageRendered);
      console.log("Document clicked!");
    };

    // Add event listener
    document.addEventListener("click", handleClick);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  try {
    return pageRendered ? <PhishingPage /> : <FormPage />;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Access properties of the Error object safely
      console.error(error.message);
    } else {
      // Handle cases where the thrown value is not an Error object
      console.error("An unknown error occurred:", error);
    }
  }
};

export default App;
