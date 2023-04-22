import React from "react";
import illustrations from "../app/computer_illustration_1.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="max-w-[850px] mb-10 text-white rounded-xl gap-10 items-center justify-between p-5 mx-auto bg-slate-500 flex flex-col md:flex-row">
      <div className="flex flex-col space-y-5">
        <p className="sm:text-3xl text-lg ">Research and Scholarship Hub</p>
        <p className="text-sm">
          Welcome to the Research and Scholarship Hub, your one-stop destination
          for exploring new research opportunities and funding options.
        </p>

        <Link href={"/posts"}>
          <button className="bg-[#f7ab0a] text-xs sm:text-sm font-bold rounded-full text-white px-4 py-2">
            Check out our Posts Now
          </button>
        </Link>
      </div>
      <div>
        <Image
          src={illustrations}
          alt="Hero illustration"
          width={650}
          height={650}
        />
      </div>
    </section>
  );
};

export default HeroSection;
