"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex flex-1 justify-center items-center bg-gray-100 p-8 h-[100vh]">
        <div className="max-w-md w-full">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">Event <span className="text-indigo-600">Hive</span></h3>
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-[60px]">
            Confirming your verification
          </h2>
          <div className="flex items-center w-full justify-center mb-6">
        {!success && !error && (
       <BeatLoader />
     )}
      <FormSuccess message={success} />
     {!success && (
       <FormError message={error} />
      )}
      
      </div>
      <div className="flex items-center w-full justify-center">
      <a href="#"
                className="group relative flex justify-center py-3 px-[80px] border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
              >
                Back to login
              </a>
      </div>
        </div>
      </div>
  )
}