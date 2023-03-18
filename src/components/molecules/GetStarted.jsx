import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className=" dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            We're here to help you save money and get the best deals.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Create an account or download our app to start saving money. Add
            items to your shopping list, discover the cheapest places to shop,
            and check out best daily deals to save your wallet. Join now and
            start your virtual savings journey!
          </p>
          <Link to="/register">
            <div className="text-center">
              <span
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium 
                     text-gray-900 border border-gray-300 rounded-lg 
                     hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
                     dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Get Started
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
