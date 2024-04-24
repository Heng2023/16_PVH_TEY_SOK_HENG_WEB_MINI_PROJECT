import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";

export default function TodoCardComponent() {
  return (
    <div className="border border-gray mt-3 rounded-lg w-full relative">
      <div className="p-5">
        <div className="flex justify-between">
          <p>Title</p>
          <div className="absolute top-2 right-3">
            {/* <Image
              src={"/assets/icons/tabler_dots.svg"}
              width={20}
              height={20}
              alt={"edit delete card"}
            /> */}
            <EditDeleteDropDownComponent />
          </div>
        </div>

        <p className="text-gray">Description</p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
            Tag
          </div>
          <div className="rounded-full w-5 h-5 bg-todo"></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex gap-2 justify-end pr-3 py-2">
        <Image
          src={"/assets/icons/calendar.svg"}
          width={20}
          height={20}
          alt="calendar icon"
        />
        <p className="text-gray">Due Date</p>
      </div>
    </div>
  );
}
