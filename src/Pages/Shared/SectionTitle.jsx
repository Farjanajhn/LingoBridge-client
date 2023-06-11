
const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className="text-center my-10  ">
      <h3 className="text-3xl text-purple-900 uppercase">{heading}</h3>
      
      <p className="text-lg">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;