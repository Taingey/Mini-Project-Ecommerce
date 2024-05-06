"use client";

import React, { useState } from "react";
import style from "./style.module.css";

import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { BASE_URL } from "@/lib/constants";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
type ValueTypes = {
	email: string;
	password1: string;
	password2: string;
	first_name: string;
	last_name: string;
};

const initialValues: ValueTypes = {
	email: "",
	password1: "",
	password2: "",
	first_name: "",
	last_name: "",
};

// 1- At least one upper case English letter, (?=.*[A-Z])
// 2- At least one lower case English letter, (?=.*[a-z])
// 3- At least one digit, (?=.*\d)
// 4- At least one special character, (?=.*[@#$%^&*])
const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*]).{8,}$");

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password1: Yup.string()
		.min(8, "Password is too short, At lease 8 characters")
		.matches(strongPasswordRegex, "Password must contain at least one upper case English letter, one lower case English letter, one digit and one special character").required("Required"),
	password2: Yup.string()
		.oneOf([Yup.ref("password1")], "Passwords must match")
		.required("Required"),
	first_name: Yup.string().required("Required"),
	last_name: Yup.string().required("Required"),
});



export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //  handle submit
  const handleSubmit = (values: ValueTypes) => {
    setLoading(true);
    fetch(`${BASE_URL}/api/user/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className={`${style.container}`}>
        <h1 className="text-6xl text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
      >
        <Form>
          <div className="w-full flex justify-center">
            <div className="p-6 w-max">
              <Link href="/">
                <img src="/logo.png" className="w-32 mx-auto" />
              </Link>
              <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-Staatliches tracking-wider font-extrabold">
                  Sign up for templatana
                </h1>
                <div className="w-full mt-8">
                  <div className="flex gap-3 justify-center ">
                    <button
                      onClick={() => signIn("google")}
                      className="w-full py-2 px-6 bg-black text-white flex items-center justify-center"
                    >
                      <div className="bg-white p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                          <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                          />
                          <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                          />
                          <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                          />
                          <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                          />
                        </svg>
                      </div>
                      <span className="ml-4 font-Staatliches tracking-widest">
                        Google
                      </span>
                    </button>

                    <button
                      onClick={() => signIn("github")}
                      className="w-full py-2 px-6 bg-black text-white flex items-center justify-center"
                    >
                      <div className="bg-white p-1 rounded-full">
                        <svg className="w-6" viewBox="0 0 32 32">
                          <path
                            fillRule="evenodd"
                            d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                          />
                        </svg>
                      </div>
                      <span className="ml-4 font-Staatliches tracking-widest">
                        GitHub
                      </span>
                    </button>
                  </div>

                  <div className="my-10 border-b text-center">
                    <div className="font-Staatliches leading-none px-2 inline-block text-sm text-gray-600 tracking-wider font-medium bg-white transform translate-y-1/2">
                      Or sign up with e-mail
                    </div>
                  </div>
                  <div className="grid gap-4 w-full">
                    <div>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full px-8 py-4  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      />
                      <ErrorMessage
                        name="email"
                        component="section"
                        className={`${style.error}`}
                      />
                    </div>
                    <div className="">
                      <Field
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="First Name"
                        className="w-full px-8 py-4  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="section"
                        className={`${style.error}`}
                      />
                    </div>
                    <div className="">
                      <Field
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Last Name"
                        className="w-full px-8 py-4  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      />
                      <ErrorMessage
                        name="last_name"
                        component="section"
                        className={`${style.error}`}
                      />
                    </div>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-8 py-4  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      />
                      {!showPassword ? (
                        <IoEyeOffSharp
                          onClick={() => handleShowPassword()}
                          className="cursor-pointer absolute right-3 top-5"
                        />
                      ) : (
                        <IoEyeSharp
                          onClick={() => handleShowPassword()}
                          className="cursor-pointer absolute right-3 top-5"
                        />
                      )}
                      <ErrorMessage
                        name="password1"
                        component="section"
                        className={`${style.error}`}
                      />
                    </div>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password2"
                        id="password2"
                        placeholder="Confirm Password"
                        className="w-full px-8 py-4  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      />
                      {!showPassword ? (
                        <IoEyeOffSharp
                          onClick={() => handleShowPassword()}
                          className="cursor-pointer absolute right-3 top-5"
                        />
                      ) : (
                        <IoEyeSharp
                          onClick={() => handleShowPassword()}
                          className="cursor-pointer absolute right-3 top-5"
                        />
                      )}
                      <ErrorMessage
                        name="password2"
                        component="section"
                        className={`${style.error}`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-5 font-Staatliches tracking-wider text-xl font-semibold bg-[black] text-gray-100 w-full py-4  flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Sign Up</span>
                    </button>
                    <Link
                      href="/login"
                      className="text-center font-Staatliches relative top-3 tracking-wider hover:underline"
                    >
                      <p>Already have an account</p>
                    </Link>
                    <p className="mt-6 text-xs text-gray-600 text-center font-Staatliches tracking-wider">
                      I agree to abide by templatana&#39;s{" "}
                      <a
                        href="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        Terms of Service
                      </a>{" "}
                      and its{" "}
                      <a
                        href="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </main>
  );
}
