"use client";
import {
  deleteWorkspaceAction,
} from "@/action/workspace-action";
import Image from "next/image";
import React, { useState } from "react";
import UpdateWorkspacePopupComponent from "./UpdateWorkspaceComponent";

export default function EditDeleteDropDownComponent({ workspaceId }) {
  console.log("In edit and delete component: " + workspaceId);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <details className="dropdown">
      <summary className=" btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <label onClick={toggleModal} htmlFor="my_modal_5">
            Edit
          </label>
        </li>
        <li>
          <a
            onClick={() => {
              deleteWorkspaceAction(workspaceId);
            }}
          >
            Delete
          </a>
        </li>
      </ul>
      {showModal && (
        <UpdateWorkspacePopupComponent
          workspaceId={workspaceId}
          toggleModal={toggleModal}
        />
      )}
    </details>
  );
}
