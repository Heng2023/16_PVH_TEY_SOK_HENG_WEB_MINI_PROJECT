"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Register() {
  const router = useRouter();
  const formDataHandler = async (data) => {
    const userDetail = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const response = signIn("credentials", {
      redirect: false,
      ...userDetail,
    });
    if ((await response).ok) {
      
      router.push("/todo-board");
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="relative bg-white rounded-2xl">
        <div className="w-60 h-12 justify-between items-center inline-flex">
          <div className="-ml-[6rem] justify-start items-center gap-3.5 flex">
            <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
          </div>
        </div>
        <form action={formDataHandler} className="flex mt-[5rem] gap-[15rem]">
          <div className="">
            <div className="-mt-4 text-neutral-600 text-2xl font-bold font-['SF Pro Display'] leading-9">
              <p className="mb-4">Login</p>
            </div>
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="w-96 h-14 px-4 bg-white rounded border border-stone-300 justify-start items-center inline-flex">
                    <input
                      type="email"
                      name="email"
                      className="shrink px-5 basis-0 h-10 justify-start items-center flex-grow"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="w-96 h-14 px-4 bg-white rounded border border-stone-300 justify-start items-center inline-flex">
                    <input
                      type="password"
                      name="password"
                      className="shrink basis-0 h-10 justify-start items-center px-5 flex-grow"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="w-28 h-1" />
              <div className="w-96 justify-start items-start inline-flex">
                <button className="grow shrink basis-0 h-12 px-7 py-3.5 bg-stone-300 rounded-lg justify-center items-center gap-0.5 flex">
                  <div className="text-white text-lg font-bold font-['SF Pro Display'] leading-relaxed tracking-wide">
                    Login
                  </div>
                </button>
              </div>
              <div className="w-28 h-px" />
              <div>
                <span className="text-neutral-600 text-base font-normal font-['SF Pro Display'] leading-snug tracking-tight">
                  Don’t have an account ?
                </span>
                <Link href="/register">
                  <span className="ml-1 text-blue-600 text-base font-bold font-['SF Pro Display'] leading-snug tracking-tight">
                    Register
                  </span>
                </Link>
              </div>
            </div>
            <div className="">
              <div className="w-full h-11 bg-white justify-center items-center inline-flex">
                <div className="flex items-center">
                  <hr className="w-[8.5rem] border border-[#a0a0a0]"></hr>
                  <p className="text-stone-400 text-base font-normal font-['Lato'] leading-snug tracking-tight px-2">
                    Continue with
                  </p>
                  <hr className="w-[8.5rem] border-[#a0a0a0] border"></hr>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-96 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-14 px-7 py-3.5 rounded-lg border border-stone-300 justify-center items-center gap-4 flex">
                  <div className="w-4 h-5 py-px flex-col justify-center items-center inline-flex">
                    <div className="w-4 h-5 relative">
                      <div className="w-4 h-5 left-0 top-0 absolute"></div>
                      <div className="w-3.5 h-2 "></div>
                    </div>
                  </div>
                  <button className="grow shrink basis-0 h-14 py-3.5 rounded-lg justify-center items-center gap-4 flex">
                    <Image
                      src="/assets/icons/Google__G__logo.svg.webp"
                      alt="Google logo"
                      width={24}
                      height={24}
                      layout="intrinsic"
                      className="-ml-8"
                    />
                    <div className="-ml-3 mt-1 text-neutral-600 text-base font-bold font-['Lato'] leading-snug tracking-tight">
                      Google
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-[6rem]">
            <Image src={"/assets/icons/login.svg"} width={350} height={100} />
          </div>
        </form>
        <div className="w-[20rem] -ml-[6rem] mt-[3rem] text-zinc-500 text-base font-normal font-['SF Pro Display'] leading-snug tracking-wide">
          © 2024 My office . All Rights Reserved
        </div>
      </div>
    </div>
  );
}
