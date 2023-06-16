import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle";

import PinstructorsList from "./PinstructorsList";

const PopularInstructor = () => {
  const [instructors,setInstructors]=useState([])
  useEffect(() => {
    fetch('https://lingo-bridge-server-farjanajhn.vercel.app/instructors')
      .then(res=>res.json())
      .then(data => {
      setInstructors(data)
    })
  },[])
  return (
    <section>
      <SectionTitle
        heading={"Meet Our Esteemed Instructors"}
        subHeading={'Our team of highly skilled and experienced instructors is here to guide you on your learning journey. With a passion for teaching and a deep understanding of their respective fields, our instructors are dedicated to providing you with the knowledge and skills you need to succeed. '}
      >
      </SectionTitle>
         <div className="grid  md:grid-cols-3 gap-4 mt-4">
      {
        instructors.map(instructor=><PinstructorsList key={instructor._id} instructor={instructor}></PinstructorsList>)
}
    </div>
 </section>
  );
};

export default PopularInstructor;