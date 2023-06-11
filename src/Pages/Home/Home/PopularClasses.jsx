import { useEffect } from "react";
import { useState } from "react";
import Pclass from "./pClass";


const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch('classes.json')
      .then(res => res.json())
      .then(data => {
      setPopularClasses(data)
    })
  },[])
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      {
        popularClasses.map(popularClass=><Pclass key={popularClass.id} popularClass={popularClass}></Pclass>)
      }
    </div>
  );
};

export default PopularClasses;