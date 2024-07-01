"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { login } from "@/actions/login";
import { LoginSchema } from "@/schemas";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { GoogleSignupButton } from "./google-signup-button";

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider!"
    : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    
    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-1 justify-center items-center bg-gray-100 p-8">
        <div className="max-w-md w-full">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">Event <span className="text-indigo-600">Hive</span></h3>
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-[60px]">
           {showTwoFactor ? 'Enter two factor code' : 'Sign In to Event Hive'} 
          </h2>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {showTwoFactor && <div className="mb-[30px]">
              <label htmlFor="code" className={`block text-sm font-medium ${form.formState.errors.email ? 'text-red-600' : 'text-gray-700'}`}>
                Two factor code
              </label>
              <div className="mt-1">
                <input
                  id="code"
                  type="email"
                  {...form.register("code")}
                  className="block w-full px-3 py-3 border-none rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="123456"
                  disabled={isPending}
                />
                {form.formState.errors.email && (
          <p className="mt-1 text-sm text-red-600">{form.formState.errors.email.message}</p>
        )}
              </div>
            </div>}
            {!showTwoFactor && <><div className="mb-[30px]">
              <label htmlFor="email" className={`block text-sm font-medium ${form.formState.errors.email ? 'text-red-600' : 'text-gray-700'}`}>
                YOUR EMAIL
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="block w-full px-3 py-3 border-none rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                  disabled={isPending}
                />
                {form.formState.errors.email && (
          <p className="mt-1 text-sm text-red-600">{form.formState.errors.email.message}</p>
        )}
              </div>
            </div>
            <div className="mb-10">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className={`block text-sm font-medium ${form.formState.errors.password ? 'text-red-600' : 'text-gray-700'}`}>
                  PASSWORD
                </label>
                <Link href="/auth/reset" className="text-sm text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...form.register("password")}
                  className="block w-full px-3 py-3 border-none rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  disabled={isPending}
                />
                {form.formState.errors.password && (
          <p className="mt-1 text-sm text-red-600">{form.formState.errors.password.message}</p>
        )}
              </div>
            </div>
            </>}
            
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <div className="flex items-center justify-center mb-8">
              <button
                type="submit"
                className="group relative flex justify-center py-3 px-[80px] border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
              >
                {showTwoFactor ? "Confirm" : "Login"}
              </button>
            </div>
            {
              !showTwoFactor && <><div className="flex items-center justify-center mb-8">
              <span className="text-gray-500">Or</span>
            </div>
            <div className="flex items-center justify-center">
              <GoogleSignupButton callbackUrl={callbackUrl}/>
            </div></>
            }
            
          </form>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center relative text-white p-8">
        <div className="absolute inset-0 bg-[url('/images/signInPage.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-10">Hello Friend</h2>
          <p className="mb-10">To keep connected with us provide us with your information</p>
          <button className="px-10 py-3 bg-white-40 text-white rounded-md hover:bg-white hover:text-blue-900">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
