import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../redux/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);
  function loginHandler() {
    setIsLogin(!isLogin);
  }

  async function getInputData(e) {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      //login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
        console.log(res);
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //register
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    }

    setFullname("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
          alt="banner"
        />
      </div>

      <form
        onSubmit={getInputData}
        className="flex flex-col w-[20%] p-12 my-44 opacity-90 left-0 right-0 mx-auto items-center justify-center absolute bg-black rounded-md"
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Fullname"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium "
          >
            {`${isLoading ? "loading..." : isLogin ? "Login" : "Sigup"}`}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix?" : "Already have an account?"}

            <span
              className=" text-blue-800 cursor-pointer ml-2"
              onClick={loginHandler}
            >
              {isLogin ? "Signup" : "Signin"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
