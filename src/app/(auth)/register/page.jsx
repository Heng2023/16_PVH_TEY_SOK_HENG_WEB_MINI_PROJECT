"use client";
import React from "react";
import Image from "next/image";
import { registerService } from "../../../service/register.service";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const formDataHandler = async (data) => {
    const userDetail = {
      email: data.get("email"),
      password: data.get("password"),
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      gender: data.get("gender"),
      profile_url: "string",
    };
    console.log(userDetail);

    const response = await registerService(userDetail);
    console.log(response);
    if (response.status == 200) {
      router.push("login");
    }
  };

  return (
    <form action={formDataHandler}>
      <div className="ml-[9rem] mt-[5rem] relative">
        <div className="w-96 h-96 left-[50px] mt-[6rem] absolute">
          <div className="w-80 h-20 relative">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-28 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              First Name :
            </div>
            <input
              type="text"
              name="firstname"
              className="w-[17rem] bg-zinc-100 -mt-1 h-[1.7rem] left-[23px] top-[48px] absolute text-md font-normal font-['Poppins'] rounded-md px-2 py-2 focus:outline-none focus:border-blue-500 border-none"
              placeholder="Enter your name..."
            />
          </div>

          <div className="w-80 h-20 left-0 top-[112px] absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-20 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              Email :
            </div>
            <input
              type="email"
              name="email"
              className="w-[17rem] bg-zinc-100 -mt-1 h-[1.7rem] left-[23px] top-[48px] absolute text-md font-normal font-['Poppins'] rounded-md px-2 py-2 focus:outline-none focus:border-blue-500 border-none"
              placeholder="info@xyz.com"
            />
          </div>
          <div className="w-80 h-20 left-0 top-[224px] absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-24 left-0 top-0 absolute">
              <span className="text-neutral-600 text-base font-normal font-['SF Pro Display']">
                Password
              </span>
              <span className="text-neutral-600 text-base font-normal font-['Poppins']">
                {" "}
                :
              </span>
            </div>
            <input
              type="password"
              name="password"
              className="w-[17rem] bg-zinc-100 -mt-1 h-[1.7rem] left-[23px] top-[48px] absolute text-md font-normal font-['Poppins'] rounded-md px-2 py-2 focus:outline-none focus:border-blue-500 border-none"
              placeholder="xxxxxxxxxx"
            />
          </div>
          <div className="w-80 h-20 left-[388px] top-0 absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-28 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              Last Name :
            </div>
            <input
              type="text"
              name="lastname"
              className="w-[17rem] bg-zinc-100 -mt-1 h-[1.7rem] left-[23px] top-[48px] absolute text-md font-normal font-['Poppins'] rounded-md px-2 py-2 focus:outline-none focus:border-blue-500 border-none"
              placeholder="Enter your name..."
            />
          </div>
          <div className="w-80 h-20 left-[388px] top-[112px] absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-28 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              Gender:
            </div>
            <select
              name="gender"
              className="w-[17rem] bg-zinc-100 -mt-2 h-[2rem] left-[23px] top-[48px] absolute text-md font-normal font-['Poppins'] rounded-md px-2 py-2 focus:outline-none focus:border-blue-500 border-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="w-80 h-20 left-[388px] top-[224px] absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-44 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              Confirm Password :
            </div>
            <input
              type="password"
              name="password"
              className="w-[17rem] bg-zinc-100 -mt-1 h-[1.7rem] left-[23px] top-[48px] absolute text-md font-normal font-['Poppins'] rounded-md px-2 py-2 focus:outline-none focus:border-blue-500 border-none"
              placeholder="xxxxxxxxxx"
            />
          </div>
          <div className="w-36 left-[31px] top-[361px] absolute text-center text-white text-base font-semibold font-['Poppins']">
            Sign up{" "}
          </div>
        </div>
        <div className="w-96 h-96 left-[875px] mt-[8rem] absolute">
          <Image src={"/assets/icons/sign-up.svg"} width={300} height={100} />
        </div>
        <div className="justify-between items-center inline-flex">
          <div className="justify-start items-center gap-6 flex">
            <Image src={"/assets/icons/logo.svg"} width={220} height={100} />
          </div>
        </div>
        <button
          type="submit"
          className="w-44 h-12 px-6 left-[50px] top-[450px] absolute bg-blue-600 rounded-2xl justify-center items-center gap-2 inline-flex"
        >
          <div className="text-white text-xl font-bold font-['SF Pro Display'] tracking-tight">
            Sign Up
          </div>
        </button>
      </div>
    </form>
  );
}
