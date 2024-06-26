"use server";
import {
  addWorkspace,
  deleteWorkspaceById,
  updateWorkspaceById,
} from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

export const addWorkspaceAction = async (formData) => {
  console.log("Form data in action :", formData);
  const workspace = { workspaceName: formData?.get("workspaceName") };
  console.log("workspace input", workspace);
  try {
    await addWorkspace(workspace);
    revalidateTag("workspace");
  } catch (e) {
    console.log("error in action add workspace ", e);
  }
};

export const deleteWorkspaceAction = async (workspaceId) => {
  const workspace = await deleteWorkspaceById(workspaceId);
  revalidateTag("workspace");
  console.log(workspace);
};

export const updateWorkspaceAction = async (formData) => {
  console.log("Form data in update action:", formData);
  const workspaceId = formData?.get("workspaceId");
  const updatedWorkspaceDetails = {
    workspaceName: formData?.get("workspaceName"),
  };
  console.log("Updated workspace details:", updatedWorkspaceDetails);
  try {
    await updateWorkspaceById(workspaceId, updatedWorkspaceDetails);
    revalidateTag("workspace");
  } catch (e) {
    console.log("Error in updateWorkspaceAction:", e);
  }
};

export const updateFavoriteStatusAction = async (formData) => {
  console.log("Form data in update favorite status action:", formData);
  const workspaceId = formData?.get("workspaceId");
  const isFavorite = formData?.get("isFavorite") === "true"; // Assuming the form data sends "true" or "false" as a string

  console.log("Workspace ID:", workspaceId, "Is Favorite:", isFavorite);

  try {
    await updateFavoriteStatusService(workspaceId, isFavorite);
    revalidateTag("workspace");
    console.log("Favorite status updated successfully");
  } catch (e) {
    console.log("Error in updateFavoriteStatusAction:", e);
  }
};
