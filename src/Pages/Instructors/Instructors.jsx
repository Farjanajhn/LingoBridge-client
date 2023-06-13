import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors,setInstructors]=useState([])
  useEffect(() => {
    fetch('http://localhost:3000/instructors')
      .then(res=>res.json())
      .then(data => {
      setInstructors(data)
    })
  },[])
  return (
    <div>
          <SectionTitle
        heading={"Meet Our Esteemed Instructors"}
        subHeading={'"Our team of highly skilled and experienced instructors is here to guide you on your learning journey. With a passion for teaching and a deep understanding of their respective fields, our instructors are dedicated to providing you with the knowledge and skills you need to succeed. From industry professionals to academic experts, each instructor brings a unique perspective and wealth of expertise to their classes. Join us and learn from the best in the business, as our instructors help you unlock your full potential and achieve your goals."'}
      >
      </SectionTitle>
      <div className="grid  md:grid-cols-3 gap-4 mt-4">
      {
        instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
}
    </div>
    </div>
  );
};

export default Instructors;