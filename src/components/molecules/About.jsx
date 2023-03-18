import React from "react"

const About = () => {
  return (
    <section className="bg-[#5CB8BD]">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4 text-white">
            Our mission is to help you save money on everything from groceries
            to household items, and everything in between. We know that every
            penny counts, and we're here to help you stretch your budget as far
            as possible.
          </p>
          <p className="text-white">
            We compare prices across multiple retailers and share our findings
            with you, so you can make informed decisions and save money. Whether
            you're looking for the cheapest place to buy groceries, or the best
            deals on electronics, we've got you covered.
            <strong className="italic"> Everything 100% FREE</strong>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-20">
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Food Image 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt="Food Image 2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
