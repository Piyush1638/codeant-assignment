"use client";
import Data from "@/components/signinPage/Data";
import Features from "@/components/signinPage/Features";
import SignInForm from "@/components/signinPage/SignInForm";
import Image from "next/image";

const Home = () => {
  return (
    <main className="w-full min-h-[960px] flex overflow-x-hidden bg-white">
      <div className="w-full min-h-screen relative p-6 lg:flex hidden items-center justify-center ">
        <div className="mx-auto my-10 w-[474px] py-2 z-20 relative">
          <Features />
          <Data />
        </div>
        <Image
          src={"/signin/logo.svg"}
          alt="logo"
          height={319}
          width={284}
          className="absolute left-0 bottom-0"
        />
      </div>
      <div className="w-full flex-container flex-col min-h-screen font-satoshi bg-[#FAFAFA] p-6 gap-8 ">
        <SignInForm />
      </div>
    </main>
  );
};

export default Home;
