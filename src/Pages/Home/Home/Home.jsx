import PopularInstructor from "./PopularInstructor";
import { Helmet} from 'react-helmet-async';
import PopularClasses from "./PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lingo Bridge | Home</title>
      </Helmet>
      <div className="carousel w-full mt-4">
     
  <div id="slide1" className="carousel-item relative w-full">
          <img src="https://static.vecteezy.com/system/resources/previews/004/329/717/non_2x/language-learning-word-concept-banner-grammar-speaking-skills-foreign-language-online-school-self-education-isolated-lettering-typography-idea-with-linear-icons-presentation-illustration-vector.jpg" className="w-full" />

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
        </div> 
       
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://hejsweden.com/wp-content/uploads/2020/07/Swedish-Alphabet-Pronunciation-2048x1152.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.assetsdelivery.com/compings_v2/megavic93/megavic931801/megavic93180100013.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://www.myteacherlanguages.com/wp-content/uploads/2018/11/banner.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
    
    </div>
  </div>
      </div>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;