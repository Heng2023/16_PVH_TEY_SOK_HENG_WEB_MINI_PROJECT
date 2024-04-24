import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";

export default async function SidebarComponent({ workspaceData }) {
  console.log("Data in sidebar: " + workspaceData);
  const favoriteWorkspaces = workspaceData.data?.filter(workspace => workspace.isFavorite);
  const nonFavoriteWorkspaces = workspaceData.data?.filter(workspace => !workspace.isFavorite);

  return (
    <div className="pl-10 mt-6 h-screen w-[22.5rem]">
      <div className="flex justify-between gap-6">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* Render Each Workspace */}
      {nonFavoriteWorkspaces?.map((workspace, key) => (
        <div key={key} className="flex items-center mt-5 w-full">
          <div className="rounded-full w-4 h-4 bg-todo"></div>
          <div className="flex justify-between w-full pl-3">
            <p>{workspace.workspaceName}</p>
            <EditDeleteDropDownComponent workspaceId={workspace.workSpaceId} />
          </div>
        </div>
      ))}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      {favoriteWorkspaces?.map((workspace, key) => (
        <div key={key} className="pb-10 flex items-center mt-5 w-full">
          <div className="rounded-full w-4 h-4 bg-workingOn"></div>
          <div className="flex justify-between w-full pl-3">
            <p>{workspace.workspaceName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
