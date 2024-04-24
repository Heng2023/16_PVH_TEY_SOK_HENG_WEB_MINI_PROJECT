const CardDetailComponent = () => {
    return (
       <div className="rounded-xl w-[56rem] mr-11 mt-3 bg-yellow-200 px-5 py-1 flex flex-col"> 
         <div className="flex mt-4 pb-4"> 
           <div className="bg-white text-black rounded-xl px-4">
             <p className="text-red-500 font-bold pt-2">Month</p>
             <p className="text-black text-[2.7rem] -mt-3 font-bold">18</p>
           </div>
           <div className="ml-8">
             <h2 className="capitalize text-xl font-bold">Title</h2>
             <p>Description</p>
           </div>
         </div>
         <div className="w-full flex justify-end -mt-[3.4rem] pb-3"> 
           <button className="px-12 py-2 rounded-lg bg-sky-100">
             <p className="text-sky-500">Todo</p>
           </button>
         </div>
       </div>
    );
   };
   
   export default CardDetailComponent;
   