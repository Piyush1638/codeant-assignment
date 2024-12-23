import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

const SignInForm = () => {
  const [buttonClicked, setButtonClicked] = useState<string>("SAAS");

  const SelfHostedSignInOptions = [
    {
      image: "/signin/gitlab.svg",
      text: "Self Hosted GitLab",
    },
    {
      image: "/signin/sso.svg",
      text: "Sign in with SSO",
    },
  ];

  const SaasSignInOptions = [
    {
      image: "/signin/github.svg",
      text: "Sign in with Github",
    },
    {
      image: "/signin/bitbucket.svg",
      text: "Sign in with BitBucket",
    },
    {
      image: "/signin/azure-devops.svg",
      text: "Sign in with Azure Devops",
    },
    {
      image: "/signin/gitlab.svg",
      text: "Self Hosted GitLab",
    },
  ];
  return (
    <>
      <div className="bg-white w-full border border-[#E9EAEB] rounded-xl">
        <div className="py-9 px-6 w-full space-y-5 border-b border-[#D5D7DA]">
          <div className="flex-container gap-9 flex-col">
            <div className="font-satoshi flex-container gap-2 text-font text-3xl">
              <Image src={"logo.svg"} alt="logo" height={40} width={35.62} />
              CodeAnt AI
            </div>
            <h3 className="text-font text-2xl md:text-3xl font-semibold text-center">
              Welcome to CodeAnt AI
            </h3>
          </div>
          <div className="flex-container border border-[#E9EAEB] rounded-md">
            <Button
              text="SAAS"
              clickedButton={buttonClicked}
              onClick={setButtonClicked}
            />
            <Button
              text="Self Hosted"
              clickedButton={buttonClicked}
              onClick={setButtonClicked}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col py-6 min-h-[326px]">
          {buttonClicked === "SAAS"
            ? SaasSignInOptions.map((options: any, index: any) => (
                <SignInOptions
                  key={index}
                  text={options.text}
                  image={options.image}
                />
              ))
            : SelfHostedSignInOptions.map((options: any, index: any) => (
                <SignInOptions
                  key={index}
                  text={options.text}
                  image={options.image}
                />
              ))}
        </div>
      </div>
      <p className="text-font">
        By signing up you agree to the{" "}
        <a href="#" className="font-bold">
          Privacy Policy
        </a>
        .
      </p>
    </>
  );
};

export default SignInForm;





const Button = ({
    text,
    clickedButton,
    onClick,
  }: {
    text: string;
    clickedButton: string;
    onClick: Dispatch<SetStateAction<string>>;
  }) => (
    <button
      className={`py-4 px-2 rounded-md text-xl font-semibold w-1/2 ${
        clickedButton === text
          ? "bg-blue-500 text-white"
          : "bg-white text-[#414651]"
      }`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
  
  const SignInOptions = ({ text, image }: { text: string; image: string }) => (
    <button className="border mx-auto border-[#D8DAE5] flex-container gap-2 py-4 px-6 xl:px-44 rounded-md text-base font-semibold w-4/5 text=[#171717] text-nowrap">
      <Image src={image} alt={text} width={24} height={24} />
      {text}
    </button>
  );
  
