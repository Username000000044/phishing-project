const Form = () => {
  return (
    <div className="font-roboto min-h-screen bg-[#eee8f7]">
      <form className="mx-auto max-w-3xl pt-4 pb-18">
        {/* Top Section */}
        <section className="relative bg-white rounded-lg border border-gray-300">
          <div className="absolute w-full h-[0.7rem] bg-[#5c33ae] rounded-t-md"></div>
          <div className="p-8">
            <h1 className="text-4xl">Blood Drive Form – Your Input Matters!</h1>
            <h2 className="mt-3">
              This survey asks teachers about their awareness, involvement, and
              opinions on the school’s blood drive. It gathers feedback on
              communication methods, concerns, and ideas to improve student
              participation.
            </h2>
            <p className="mt-3 text-[#d22a22]">* Required</p>
          </div>
        </section>

        {/* Question 1 */}
        <section className="mt-4 p-8 bg-white rounded-lg border border-gray-300">
          <h1 className="text-xl text-gray-800">
            Full Name <span className="text-[#d22a22] text-lg">*</span>
          </h1>
          <input
            type="text"
            className="block py-2 mt-7 w-64 text-md border-b border-gray-300 focus:border-[#5c33ae] focus:outline-none"
            placeholder="Your answer"></input>
        </section>

        {/* Question 2 */}
        <section className="mt-4 p-8 bg-white rounded-lg border border-gray-300">
          <h1 className="text-gray-800 text-xl">
            Were you aware that our school is hosting a blood drive?{" "}
            <span className="text-[#d22a22] text-lg">*</span>
          </h1>
          <div className="space-x-3 flex items-center mt-7">
            <input
              type="radio"
              id="option1"
              name="answer"
              value="Yes"
              className="w-5 h-5 text-[#5c33ae] border-gray-300"
            />
            <label htmlFor="option1" className="text-gray-800">
              Yes
            </label>
            <input
              type="radio"
              id="option1"
              name="answer"
              value="Yes"
              className="w-5 h-5 text-[#5c33ae] bg-white border-gray-r focus:2.1"
            />
            <label htmlFor="option1" className="text-gray-800">
              No
            </label>
          </div>
        </section>

        {/* Question 3 */}
        <section className="mt-4 p-8 bg-white rounded-lg border border-gray-300">
          <h1 className="text-gray-800 text-xl">
            Have you ever participated in a school blood drive (as a donor or
            volunteer)? <span className="text-[#d22a22] text-lg">*</span>
          </h1>
          <div className="space-x-3 flex items-center mt-7">
            <input
              type="radio"
              id="option1"
              name="answer"
              value="Yes"
              className="w-5 h-5 text-[#5c33ae] border-gray-300"
            />
            <label htmlFor="option1" className="text-gray-800">
              Yes
            </label>
            <input
              type="radio"
              id="option1"
              name="answer"
              value="Yes"
              className="w-5 h-5 text-[#5c33ae] bg-white border-gray-r focus:2.1"
            />
            <label htmlFor="option1" className="text-gray-800">
              No
            </label>
          </div>
        </section>

        {/* Question 4 */}
        <section className="mt-4 p-8 bg-white rounded-lg border border-gray-300">
          <h1 className="text-gray-800 text-xl">
            Do you think school blood drives are a valuable educational or
            community service activity?{" "}
            <span className="text-[#d22a22] text-lg">*</span>
          </h1>
          <div className="space-x-3 flex items-center mt-7">
            <input
              type="radio"
              id="option1"
              name="answer"
              value="value"
              className="w-5 h-5 text-[#5c33ae] border-gray-300"
            />
            <label htmlFor="option1" className="text-gray-800">
              Strongly Agree
            </label>
            <input
              type="radio"
              id="option1"
              name="answer"
              value="value"
              className="w-5 h-5 text-[#5c33ae] bg-white border-gray-r focus:2.1"
            />
            <label htmlFor="option1" className="text-gray-800">
              Agree
            </label>
            <input
              type="radio"
              id="option1"
              name="answer"
              value="value"
              className="w-5 h-5 text-[#5c33ae] bg-white border-gray-r focus:2.1"
            />
            <label htmlFor="option1" className="text-gray-800">
              Neutral
            </label>
            <input
              type="radio"
              id="option1"
              name="answer"
              value="value"
              className="w-5 h-5 text-[#5c33ae] bg-white border-gray-r focus:2.1"
            />
            <label htmlFor="option1" className="text-gray-800">
              Disagree
            </label>
            <input
              type="radio"
              id="option1"
              name="answer"
              value="value"
              className="w-5 h-5 text-[#5c33ae] bg-white border-gray-r focus:2.1"
            />
            <label htmlFor="option1" className="text-gray-800">
              Strongly Disagree
            </label>
          </div>
        </section>

        {/* Question 5 */}
        <section className="mt-4 p-8 bg-white rounded-lg border border-gray-300">
          <h1 className="text-gray-800 text-xl">
            What concerns, if any, have students expressed to you about donating
            blood? <span className="text-[#d22a22] text-lg">*</span>
          </h1>
          <input
            type="text"
            className="block py-2 mt-7 w-64 text-md border-b border-gray-300 focus:border-[#5c33ae] focus:outline-none"
            placeholder="Your answer"></input>
        </section>

        {/* Question 6 */}
        <section className="mt-4 mb-7 p-8 bg-white rounded-lg border border-gray-300">
          <h1 className="text-gray-800 text-xl">
            Do you believe students understand the health and safety protocols
            involved in donating blood?{" "}
            <span className="text-[#d22a22] text-lg">*</span>
          </h1>
          <div className="space-x-3 flex items-center mt-7">
            <input
              type="radio"
              id="option1"
              name="answer"
              value="Yes"
              className="w-5 h-5 text-[#5c33ae] border-gray-300"
            />
            <label htmlFor="option1" className="text-gray-800">
              Yes
            </label>
            <input
              type="radio"
              id="option1"
              name="answer"
              value="Yes"
              className="w-5 h-5 text-[#5c33ae] bg-white border-gray-r focus:2.1"
            />
            <label htmlFor="option1" className="text-gray-800">
              Maybe
            </label>
            <input
              type="radio"
              id="option1"
              name="answer"
              value="Yes"
              className="w-5 h-5 text-[#5c33ae] bg-white border-gray-r focus:2.1"
            />
            <label htmlFor="option1" className="text-gray-800">
              No
            </label>
          </div>
        </section>

        <a className="px-8 py-3 bg-[#5c33ae] rounded-lg text-white text-lg">
          Submit
        </a>
      </form>
    </div>
  );
};

export default Form;
