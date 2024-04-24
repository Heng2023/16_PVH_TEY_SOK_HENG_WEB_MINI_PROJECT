import { headerToken } from "@/app/api/headerToken";

const baseUrl = process.env.BASE_URL;
const endpoint = "workspaces";
const url = `${baseUrl}${endpoint}`;
const header = await headerToken();

export const getAllWorkspaceService = async () => {
  console.log(header);

  const res = await fetch(url, {
    headers: header,
    next: { tags: ["workspace"] },
  });

  if (!res.ok) {
    console.error("Error fetching workspaces:", res.statusText);
    return null;
  }

  const data = await res.json();
  return data;
};

export const addWorkspace = async (workspaceDetails) => {
  console.log("workspace detail name : ", workspaceDetails);
  try {
    const { workspaceName } = workspaceDetails;
    console.log("header in service ", header);

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(workspaceName),
      headers: header,
    });

    const data = await res.json();
    console.log("data in addworkspace service ", data);
    return data;
  } catch (err) {
    console.log("error in service add :", err);
  }
};

export const deleteWorkspaceById = async (id) => {
  console.log("in delete service: " + id);
  try {
    let response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        workspaceId: id,
      }),
      headers: header,
    });
    console.log("Response Delete:", response);
    if (!response.ok) {
      console.error("Server responded with error:", response.status);
      return null;
    }

    const result = await response.json();
    console.log("Result Delete:", result);
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};

export const updateWorkspaceById = async (id, updatedWorkspaceDetails) => {
  console.log("Updating workspace with ID:", id);
  try {
    // Ensure the updatedWorkspaceDetails object contains the necessary fields
    const { workspaceName } = updatedWorkspaceDetails;
    console.log("Updated workspace details:", updatedWorkspaceDetails);

    // Construct the URL for the specific workspace
    const updateUrl = `${url}/${id}`;

    // Send a PUT request to update the workspace
    const res = await fetch(updateUrl, {
      method: "PUT",
      body: JSON.stringify(updatedWorkspaceDetails),
      headers: header,
    });

    // Check if the request was successful
    if (!res.ok) {
      console.error("Error updating workspace:", res.statusText);
      return null;
    }

    // Parse the response to JSON
    const data = await res.json();
    console.log("Workspace updated successfully:", data);
    return data;
  } catch (err) {
    console.error("Error in updateWorkspaceById service:", err);
    return null;
  }
};

export const updateFavoriteStatusService = async (id, isFavorite) => {
  console.log("Updating favorite status for workspace with ID:", id);
  try {
    // Construct the URL for the specific workspace
    const updateUrl = `${url}/${id}`;

    // Prepare the updated workspace details object
    const updatedWorkspaceDetails = {
      isFavorite: isFavorite,
    };

    // Send a PUT request to update the workspace's favorite status
    const res = await fetch(updateUrl, {
      method: "PUT",
      body: JSON.stringify(updatedWorkspaceDetails),
      headers: header,
    });

    // Check if the request was successful
    if (!res.ok) {
      console.error(
        "Error updating workspace favorite status:",
        res.statusText
      );
      return null;
    }

    // Parse the response to JSON
    const data = await res.json();
    console.log("Workspace favorite status updated successfully:", data);
    return data;
  } catch (err) {
    console.error("Error in updateFavoriteStatusService:", err);
    return null;
  }
};
