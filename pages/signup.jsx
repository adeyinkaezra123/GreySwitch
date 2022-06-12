import Head from "next/head";
import React from "react";
import SignUpForm from "../components/Signup/SignUpForm";
import SplitLayout from "../components/SplitLayout";
import Slider from "../components/Slider";

function LoginPage() {
  return (
    <>
      <Head>
        <title>Greyswitch | Signup</title>
      </Head>
      <SplitLayout left={<Slider />} right={<SignUpForm />} />
    </>
  );
}

export default LoginPage;
