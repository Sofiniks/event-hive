"use client";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { FcGoogle } from "react-icons/fc";


export const GoogleSignupButton = ({
    callbackUrl,
  }: {
    callbackUrl: string | null;
  }) => {
    const handleGoogleSignup = () => {
        signIn("google", {
          callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
      }
    return (
       <button
                type="button"
                className="group relative flex justify-center py-3 px-[80px] border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
                onClick={handleGoogleSignup}
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign up with Google
              </button> 
    )
    
}