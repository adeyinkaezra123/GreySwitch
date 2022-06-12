import { React, useState } from "react";
import Link from "next/link";
import { loginFields } from "./loginFields";
import Input from "../Input";
import FormAction from "../FormAction";
import LoginProvider from "../LoginProvider";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function LoginForm() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }) {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  return (
    <div className="w-[80%] h-[75%] max-w-md bg-white flex flex-col items-start">
      <div className="text-[1.875rem] flex text-[#121212] antialiased items-center font-bold">
        <p>{"Welcome Back "}</p>
        <span className="text-[1.75rem] animate-wave">👋🏾</span>,
      </div>
      <p className="text-[#484E62] text-base">
        To get started, please provide the information needed <br /> below.
      </p>

      <form className="mt-8 space-y-6 w-full">
        <div className="-space-y-px w-full">
          {fields.map((field) => (
            <>
              <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                {...register(`${field.name}`)}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </>
          ))}
        </div>

        <FormAction text="Sign in on Greyswitch" />
        <fieldset class="border-t border-slate-300">
          <legend class="mx-auto px-4 text-grey-400 text-md">OR</legend>
        </fieldset>
        <LoginProvider provider="Google" icon={<img src="/google.svg" />} />
      </form>
      <p className="w-full text-sm text-[#484E62] text-center py-3">
        Don't Have an account?{" "}
        <Link href="/signup">
          <a className="text-blue-500 hover:text-blue-700"> Sign up now</a>
        </Link>{" "}
      </p>
    </div>
  );
}

export default LoginForm;
