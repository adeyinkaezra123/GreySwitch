import { useState } from "react";
import Link from "next/link";
import LoginProvider from "../LoginProvider";
import { signupFields } from "./signupFields";
import FormAction from "../FormAction";
import Input from "../Input";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  return (
    <div className="w-[80%] h-[95%] max-w-md bg-white flex flex-col items-start">
      <div className="text-[1.875rem] flex text-[#121212] antialiased items-center font-bold">
        <p>{"Welcome Back "}</p>
        <span className="text-[1.75rem] animate-wave">👋🏾</span>,
      </div>
      <p className="text-[#484E62] text-base">
        To get started, please provide the information needed below.
      </p>

      <form className="mt-8 space-y-5 w-full" onSubmit={handleSubmit}>
        <div className="w-full">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormAction text="Sign up on Greyswitch" />
        <fieldset class="border-t border-slate-300">
          <legend class="mx-auto px-4 text-grey-400 text-md">OR</legend>
        </fieldset>
        <LoginProvider provider="Google" icon={<img src="/google.svg" />} />
      </form>
      <p className="w-full text-sm text-[#484E62] text-center py-3">
        Already Have an account?{" "}
        <Link href="/login">
          <a className="text-blue-500 hover:text-blue-700"> Sign in now</a>
        </Link>
      </p>
    </div>
  );
}

