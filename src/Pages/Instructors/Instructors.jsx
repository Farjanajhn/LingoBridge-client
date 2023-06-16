import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors,setInstructors]=useState([])
  useEffect(() => {
    fetch('https://lingo-bridge-server-farjanajhn.vercel.app/instructorsList')
      .then(res=>res.json())
      .then(data => {
      setInstructors(data)
    })
  },[])
  return (
    <div >
          <SectionTitle
        heading={"Lead Instructors"}
        subHeading={" Our instructors are dedicated to providing you with the knowledge and skills you need to succeed. From industry professionals to academic experts, each instructor brings a unique perspective and wealth of expertise to their classes. "}
      >
      </SectionTitle>
      <div className="grid  md:grid-cols-3 gap-4 ">
      {
        instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
}
    </div>
    </div>
  );
};

export default Instructors;