import axios from "axios";
import { Top_Rated_Movie, options } from "../utils/constant";
import { getTopRatedMovie } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

async function useTopRatedMovie() {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Top_Rated_Movie, options);
    console.log(res);
    dispatch(getTopRatedMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
}

export default useTopRatedMovie;
