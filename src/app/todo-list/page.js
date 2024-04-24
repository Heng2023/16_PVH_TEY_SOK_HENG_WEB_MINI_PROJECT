import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import CardDetailComponent from "@/components/CardDetailComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { getAllWorkspaceService } from "@/service/workspace.service";

export default async function List() {
  const workspaceData = await getAllWorkspaceService();
  console.log(workspaceData)

  return (
    <main>
      <div className="flex gap-[2rem]">
      <SidebarComponent workspaceData={workspaceData}/>
        <div className="w-full">
          <NavbarComponent />
          <div className="mt-8 mr-10 flex w-full gap-[5rem]">
            <div className="w-[54.5rem]">
              <ListBoardComponentHeader />
            </div>
            <div className="">
              <MonthlyStatisticsComponent />
            </div>
          </div>
          <div className="pb-[7.5rem]">
            <CardDetailComponent />
          </div>
        </div>
      </div>
      <div className="-mt-[10rem] flex justify-end mr-10">
        <AddNewTaskComponent />
      </div>
    </main>
  );
}
