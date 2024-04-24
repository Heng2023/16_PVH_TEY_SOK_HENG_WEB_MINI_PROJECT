import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import ProgressComponent from "@/components/ProgressComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { getAllWorkspaceService } from "@/service/workspace.service";

export default async function Board() {
  const workspaceData = await getAllWorkspaceService();
  console.log(workspaceData)

  return (
    <main className="h-screen">
      <div className="flex gap-[2rem]">
        <SidebarComponent workspaceData={workspaceData}/>
        <div className="w-full">
          <NavbarComponent />
          <div className="mt-8 mr-10">
            <ListBoardComponentHeader />
          </div>
          <div className="flex gap-4">
            <ProgressComponent />
          </div>
        </div>
      </div>
      <div className="-mt-[10rem] flex justify-end mr-10">
        {/* <AddNewTaskComponent /> */}
      </div>
    </main>
  );
}
