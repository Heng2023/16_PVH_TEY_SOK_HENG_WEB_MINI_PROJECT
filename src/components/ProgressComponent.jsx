import TodoCardComponent from "./TodoCardComponent";

const ProgressComponent = () => {
  return (
    <div className="gap-5">
      <div className="w-full flex gap-[12rem] mt-8 mr-10">
        <h2 className="font-semibold uppercase">status</h2>
      </div>
      <div className="flex gap-[2.8rem] w-full mt-2 h-8 mr-10">
        <hr class="border-yellow-200 border-2 w-[15rem]"></hr>
      </div>
      <div className="-mt-6 pr-10 pb-[12rem]">
        <TodoCardComponent />
      </div>
    </div>
  );
};

export default ProgressComponent;
