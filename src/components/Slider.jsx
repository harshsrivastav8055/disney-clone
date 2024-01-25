import React, { useEffect , useState , useRef} from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
import {HiChevronLeft , HiChevronRight} from "react-icons/hi2";
export default function Slider() {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;
  useEffect(() => {
    getTendingMovies();
  }, []);

  const getTendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  };

  const sliderRight = (element) => {
      element.scrollLeft += screenWidth-130; 
  }
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth-130; 
}

  return( 
    <div>
      <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[205px] cursor-pointer" onClick={()=>sliderLeft(elementRef.current)}/>
      <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[205px] right-0 cursor-pointer" onClick={()=>sliderRight(elementRef.current)}/>
      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
    {movies.map((movie, index) => (
          <div key={movie.id} className="min-w-full">
            <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} 
            className = 'min-w-full md:h-[410px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'/>
            <h3 className='text-neutral-50'>{movie.title}</h3>
          </div>
      ))
    }
    </div>
    </div>
    )
}
