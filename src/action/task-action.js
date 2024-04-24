"use service"
import { addNewTask } from "@/service/task.service";
import { revalidateTag } from "next/cache";

export const addTaskAction = async (newData) => {
  console.log(newData);

  const taskData = {
    taskTitle: newData.get("title"),
    description: newData.get("description"),
    tag: newData.get("tag"),
    dueDate: newData.get("dueDate"),
  };

  await addNewTask(taskData);
  revalidateTag("task")
};


