import React from "react";
import Head from "next/head";

import LoginForm from "../components/Login/LoginForm";
import SplitLayout from "../components/SplitLayout";
import Slider from "../components/Slider";

function SignUpPage() {
    return (
      <>
        <Head>
          <title>Greyswitch | Login</title>
        </Head>
        <SplitLayout left={<Slider />} right={<LoginForm />} />
      </>
    );
}

export default SignUpPage;
