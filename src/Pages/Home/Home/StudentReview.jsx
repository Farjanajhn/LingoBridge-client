import {  FaBookOpen,  FaRegFolderOpen, FaSortAmountUp } from "react-icons/fa";





const StudentReview = () => {
  return (
    <div>
      <div className="flex flex-col w-full my-6">
        <div className="grid h-[600px] md:h-[300px] px-8 card bg-base-300 rounded-box place-items-center">
          <h1 className="text-purple-900 text-5xl font-bold">Why Lingo Bridge?</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div>
              <FaRegFolderOpen/>
              <h1 className="text-3xl font-semibold text-purple-900">Learn anything</h1>
              <p>Whether you want to develop as a professional or discover a new hobby, there's an online course for that. You can even take your learning further with online microcredentials and degrees.</p>
            </div>
            <div>
            <FaBookOpen/>
              <h1 className="text-3xl font-semibold text-purple-900">Learn together</h1>
              <p>Join millions of people from around the world learning together. Online learning is as easy and natural as chatting with a group of friends.</p>
            </div>
            <div>
            <FaSortAmountUp/>
              <h1 className="text-3xl font-semibold text-purple-900">Learn with experts</h1>
              <p>Whether you want to develop as a professional or discover a new hobby, there's an online course for that. You can even take your learning further with online microcredentials and degrees.</p>
            </div>
          </div>
        </div> 
  <div className="divider"></div> 
  <div className="grid h-20 card bg-purple-900 rounded-box place-items-center"><button className="btn glass text-white">Enroll Now</button></div>
</div>
    </div>
  );
};

export default StudentReview;
