import { updateWorkspaceAction } from "@/action/workspace-action";

export default function UpdateWorkspacePopupComponent() {
  return (
    <div>
      <input type="checkbox" id="my_modal_5" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg capitalize">update new workspace</h3>
          <form action={updateWorkspaceAction}>
            <input
              type="text"
              name="workspaceId"
              placeholder="workspace id"
              className="mt-3 block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />
            <input
              type="text"
              name="workspaceName"
              placeholder="workspace name"
              className="mt-3 block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />
            <div className="modal-action">
              <button
                type="submit"
                htmlFor="my_modal_5"
                className="bg-blue-600 rounded-lg text-white mr-3 h-12 px-5 flex items-center"
              >
                Update
              </button>
              <label htmlFor="my_modal_5" className="btn">
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
