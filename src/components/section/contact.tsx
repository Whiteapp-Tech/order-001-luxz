"use client";

import * as React from "react";
import { ContainerContent } from "@/components/container/container";

export const ContactSection = () => {
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsapp_number = "+2349161683740";

    // Format the message template
    const message = `
*${name}*
*${email}*

Messages:
-- ${content}
    `.trim();

    // Encode the message for use in a URL
    const whatsappLink = `https://wa.me/${whatsapp_number.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="w-full">
      <ContainerContent>
        <div className="w-full flex max-md:flex-col max-md:gap-[60px]">
          <div className="w-1/2 max-md:w-full flex justify-center flex-col">
            <h3 className="font-bold tracking-[1px] uppercase text-white text-[40px]">
              connect to us now!
            </h3>
            <h4 className="font-medium text-medium text-[20px] text-white">
              You have come all the way here, why don’t take the first step and
              send us an email?
            </h4>
            <p className="text-neutral-400">
              We provide any consultation for your business. We will help you
              understand the details and requirements for your next ventures in
              the brand world. Reach out to us and step-up your business with
              ease.
            </p>
          </div>
          <div className="w-1/2 max-md:w-full max-md:px-0 max-md:mt-[20px] px-2">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex w-full gap-2 pr-2">
                <InputText
                  name="name"
                  label="Name"
                  placeholder="Input your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputText
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="examples@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="messages" className="text-white">
                  Messages
                </label>
                <textarea
                  name="messages"
                  id="messages"
                  rows={10}
                  className="w-full resize-none p-2 text-[14px] text-black font-outfit border border-neutral-200"
                  placeholder="Describe your project or the services you need from us"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full border-white border p-3 mt-6 hover:bg-neutral-800 transition-all duration-150 ease-in-out rounded text-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
};

interface InputTextProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const InputText: React.FC<InputTextProps> = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex-col w-1/2 flex">
      <label htmlFor={name} className="text-[14px] font-medium text-white">
        {label}
      </label>
      <input
        name={name}
        type={type ? type : "text"}
        className="border-b border-neutral-200 text-white p-2 bg-transparent font-outfit text-[14px]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
