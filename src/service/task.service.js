import { headerToken } from "@/app/api/headerToken";

const baseUrl = process.env.BASE_URL;
const endpoint = "tasks";
const url = `${baseUrl}${endpoint}`;
const header = await headerToken();

export const getTaskForWorkspace = async (workspaceId) => {
  const baseUrl = "http://110.74.194.123:8989/api/todo/v1/";
  const endpoint = `tasks`;
  const url = `${baseUrl}${endpoint}?workspaceId=${workspaceId}`;

  const header = await headerToken();
  console.log(header);

  const res = await fetch(url, {
    headers: header,
    next: { tags: ["task"] },
  });

  if (!res.ok) {
    console.error("Error fetching tasks for workspace:", res.statusText);
    return null;
  }

  const data = await res.json();
  return data;
};

export const addNewTask = async (newFormData) => {
  try {
    console.log("Task data: " + newFormData);
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newFormData),
      headers: header,
    });
    // console.log(response);
    const result = await response.json();
    // console.log(result, "result");
    return result;
  } catch (errors) {
    // console.error(errors);
    return null;
  }
};
