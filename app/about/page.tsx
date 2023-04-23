"use client";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <main>
      <Navbar />

      <section className="max-w-[800px] px-5 sm:px-0 mb-10 flex flex-col w-full space-y-5 mx-auto">
        <p>
          Welcome to Research-Information, your go-to source for information on
          research grants and scholarships! Our team is passionate about making
          it easier for you to find and apply for grants and scholarships. We
          understand how important it is to have access to funding that can
          support your academic and research endeavours, which is why we have
          created a platform that makes the search process easy and efficient.
        </p>
        <div className="bg-slate-700 mx-auto hover:scale-95 transition-all duration-300 rounded-xl text-white max-w-[700px] p-5">
          <p className="sm:text-3xl text-lg mb-3 font-bold">
            What is the tech-stack?
          </p>
          <p className="text-sm">
            Our website is built using the latest web technologies, including
            Next.js, a popular open-source JavaScript framework for building
            server-side rendered web applications. We believe that by using this
            technology, we can provide you with a seamless browsing experience
            that is fast, responsive, and user-friendly. To ensure that we
            deliver accurate and up-to-date information, we have chosen to use
            Sanity CMS as our data storage solution. This powerful tool allows
            us to manage and publish content with ease, while also giving us the
            flexibility to scale our platform as needed.
          </p>
        </div>
        <p>
          At our core, we are committed to making it easier for individuals and
          organizations to access the funding they need to achieve their
          research and educational goals. We are constantly updating our website
          with new and relevant information, and we are always looking for ways
          to improve the user experience. Thank you for choosing our platform as
          your source for information on research grants and scholarships. We
          look forward to helping you achieve your academic and research goals!
        </p>
        <div className="bg-slate-700 mx-auto hover:scale-95 transition-all duration-300 rounded-xl text-white max-w-[700px] p-5">
          <p className="sm:text-3xl text-lg font-bold mb-3">
            Standout Features
          </p>
          <p className="text-sm sm:text-base">
            One of the standout features of our website is the ability to filter
            scholarship and grant opportunities based on your specific needs.
            Whether you are looking for funding for a specific research project,
            or you want to apply for a scholarship in a particular field of
            study, we have made it easy for you to find what you need. Also, we
            have implemented search functionality where user can search specific
            scholarship or grant by name. We also understand that the grant and
            scholarship landscape can be overwhelming, which is why we have
            implemented a pagination feature that makes it easy to navigate
            through large amounts of data.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
