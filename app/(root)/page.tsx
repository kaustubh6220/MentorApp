// import { UserButton } from "@clerk/nextjs";
import Image from "next/image"
 
export default function Home() {
  return (
    <section className=" flex flex-col items-center">
      <h1 className=" h1-bold text-center">MIT SCHOOL OF COMPUTING</h1>
      <h1 className="h4-medium text-center">Rajbaug, Loni-Kalbhor,Pune</h1>
      <Image  src={'/assets/itbuilding.jpg'} alt={'itbuilding'} width={750} height={400} style={{
          margin: "20px",
        }} />
        <div className="md:flex gap-5 bg-slate-300  mt-6 ">


          <div className="  bg-slate-500  font-semibold text-slate-50 flex flex-col items-center justify-center">
            <h1 className="md:p-bold-20 ml-10 mr-10">...inspiring</h1> 
            <h2 className="md:p-bold-20 ml-10 mr-10">journey from</h2> 
            <h3 className="md:p-bold-20 ml-10 mr-10">knowledge </h3>
            <h4 className="md:p-bold-20 ml-10 mr-10">to wisdom !!!</h4>
          </div>


          <div className=" h-auto mt-5 font-semibold text-slate-50 flex flex-col items-center justify-center ">
            <Image src={'/assets/design.png'} alt="design" width={200} height={50}/>
            <h1 className=" text-dark-1">Vision</h1>
            <h2 className=" text-slate-600">"Our University is in pursuit of</h2>
            <h3 className=" text-slate-600">Art,Knowledge and Science to</h3> 
            <h4 className=" text-slate-600">culminate Wisdom"</h4>
            <h3  className=" text-dark-1">-------------------------------</h3>
            
            <h4  className=" text-dark-1">Mission</h4>
            <ul className="flex flex-col md:items-center max-lg:items-center">
              <li className=" text-slate-600">Creating global employability</li>
              <li className=" text-slate-600">Unleashing Potential of Students</li>
              <li className=" text-slate-600">Building Entrepreneurship</li>
              <li className=" text-slate-600">Emphasis on Promoting Innovation</li>
              <li className="mr-10 text-slate-600">Synthesis of Art, Design and </li>
              <li className="mr-10 text-slate-600">Synthesis of Art, Design and Technology in Academics</li>

            </ul>
            <Image src={'/assets/design1.png'} alt="design" width={200} height={50} className="mt-4"/>

          </div>


        </div>
    </section>
  )
}