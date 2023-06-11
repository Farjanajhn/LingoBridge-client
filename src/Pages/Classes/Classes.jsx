import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import Class from "./Class";

const Classes = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/classes')
      .then(res => res.json())
      .then(data => {
      setPopularClasses(data)
    })
  },[])
  return (
    <div>
    <SectionTitle
        heading={"Popular Classes"}
        subHeading={"Discover our popular language classes and embark on a journey to become fluent in a new language. Whether you're a beginner or looking to enhance your language skills, our expert instructors will guide you every step of the way. Immerse yourself in interactive lessons, practice conversations, and learn from real-life examples. With a focus on practical application and cultural understanding, our language classes offer a dynamic and engaging learning experience. Join our vibrant community of language learners and broaden your horizons today!"}
      ></SectionTitle>
         <div className="grid md:grid-cols-2 gap-10 mt-4">
      {
        popularClasses.map(popularClass=><Class key={popularClass.id} popularClass={popularClass}></Class>)
      }
    </div>
    </div>
  );
};

export default Classes;