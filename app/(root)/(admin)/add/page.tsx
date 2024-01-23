// import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <>
      <h1 className=" head-text text-left">Update Date</h1>
      <div>
        <div className="bg-white rounded-sm shadow-md mt-4 p-4 flex">
          <h1 className="text-lg font-mono">Add Mentor Data :</h1>
          <input className=" ml-20 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-sky-50 file:text-sky-700
      hover:file:bg-sky-100" type="file" name="mentor"/>
        </div>

        <div className="bg-white rounded-sm shadow-md mt-4 p-4 flex">
          <h1 className="text-lg font-mono">Add Mentee Data :</h1>
          <input className=" ml-20 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-sky-50 file:text-sky-700
      hover:file:bg-sky-100" type="file" name="mentor"/>

        </div>

        <div className="bg-white rounded-sm shadow-md mt-4 p-4 flex">
          <h1 className="text-lg font-mono">Add Class Teacher Data :</h1>
          <input className="ml-10 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-sky-50 file:text-sky-700
      hover:file:bg-sky-100" type="file" name="mentor"/>

        </div>
      </div>
      
    </>
  )
}