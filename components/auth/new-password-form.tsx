"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewPasswordSchema } from "@/schemas";
import { newPassword } from "@/actions/new-password";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

export function NewPasswordForm() {

    const searchParams = useSearchParams();
    const token = searchParams.get("token");
  
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
  
    const form = useForm<z.infer<typeof NewPasswordSchema>>({
      resolver: zodResolver(NewPasswordSchema),
      defaultValues: {
        password: "",
      },
    });
  
    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
      setError("");
      setSuccess("");
  
      startTransition(() => {
        newPassword(values, token)
          .then((data) => {
            setError(data?.error);
            setSuccess(data?.success);
          });
      });
    };

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-1 justify-center items-center bg-gray-100 p-8">
        <div className="max-w-md w-full">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">Event <span className="text-indigo-600">Hive</span></h3>
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-[60px]">
            Enter a new password
          </h2>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-[30px]">
              <label htmlFor="password" className={`block text-sm font-medium ${form.formState.errors.password ? 'text-red-600' : 'text-gray-700'}`}>
                YOUR PASSWORD
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...form.register("password")}
                  className="block w-full px-3 py-3 border-none rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="******"
                  disabled={isPending}
                />
                {form.formState.errors.password && (
          <p className="mt-1 text-sm text-red-600">{form.formState.errors.password.message}</p>
        )}
              </div>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <div className="flex items-center justify-center mb-8">
              <button
                type="submit"
                className="group relative flex justify-center py-3 px-[80px] border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
              >
                Update password
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center relative text-white p-8">
        <div className="absolute inset-0 bg-[url('/images/signUpPage.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-10">Hello Friend</h2>
          <p className="mb-10">To keep connected with us provide us with your information</p>
        </div>
      </div>
    </div>
  );
}