"use client";
import Container from "@/components/Container";
import Input from "@/components/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {MdPassword} from 'react-icons/md'
import {signIn} from 'next-auth/react'
import { useState } from "react";
import { Toaster,toast } from "react-hot-toast";

const LoginPage = () => {
  const [loading,setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async(formData) => {
    try {
      const {email,password} = formData
      setLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading(false);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Login successful");
      
        router.push(callbackUrl);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("An error occurred. Try again.");
    }
  }
  return (
    <section className=" dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center mx-auto md:h-[calc(100vh-64px)] lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                labelText="Your email"
                type="email"
                name="email"
                id="email"
                placeholder="info@example.com"
                obj={...register("email", { required: true })}
                className={`${errors.email?" !border-red-500":"border-gray-300"}`}
                Icon={<AiOutlineMail />}
              />
              <Input
                labelText="Password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                obj={...register("password", { required: true })}
                errors={errors}
                className={`${errors.password?" !border-red-500":"border-gray-300"}`}
                Icon={<MdPassword />}
              />

              <button
                type="submit"
                disabled={loading || !watch("email")|| !watch("password")}
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Signup here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster  />
    </section>
  );
};

export default LoginPage;
