import TextInput from "@/components/TextInput";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  function handleLogin() {
    router.push("/dashboard");
  }

  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center">
        <Image
          src={
            "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2056.png"
          }
          alt={""}
          height={400}
          width={500}
          className="self-center justify-self-center"
        />
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg border md:mt-0 sm:max-w-md xl:p-0 border-gray-200">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    action="#"
                    method="POST"
                  >
                    <TextInput
                      label="Email"
                      name="email"
                      required={true}
                      onChange={() => {}}
                      value={""}
                    />
                    <TextInput
                      label="Password"
                      name="password"
                      placeholder="••••••••"
                      required={true}
                      onChange={() => {}}
                      value={""}
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="text-gray-500 dark:text-gray-300">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="/dashboard"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div>
                      <a
                        href="/dashboard"
                        className="w-fullup text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Sign in
                      </a>
                    </div>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Sign up
                      </a>
                    </p>
                  </form>
                </>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
