import { useState } from "react";
import { useEffect } from "react";
import PinstructorsList from "./PinstructorsList";

const PopularInstructor = () => {
  const [instructors,setInstructors]=useState([])
  useEffect(() => {
    fetch('http://localhost:3000/instructors')
      .then(res=>res.json())
      .then(data => {
      setInstructors(data)
    })
  },[])
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      {
        instructors.map(instructor=><PinstructorsList key={instructor._id} instructor={instructor}></PinstructorsList>)
}
    </div>
  );
};

export default PopularInstructor;