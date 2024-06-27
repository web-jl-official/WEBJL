import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import {sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';

const Resetpassword = () => {
    const context = useContext(myContext)
    const {loading, setLoading} = context;

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        setLoading(true)
        try {
            const result = await sendPasswordResetEmail(auth,email);
            toast.success("Reset Password E-mail sent", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            navigate('/login')
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(loading)
        }

    }
   
    return (
      <div className="bg-gray-900 flex justify-center items-center h-screen">
        {loading && <Loader />}
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Reset Password
            </h1>
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:   text-white outline-none"
              placeholder="Email"
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={login}
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              Reset Password
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Don't have an account{" "}
              <Link className=" text-yellow-500 font-bold" to={"/signup"}>
                Signup
              </Link>
            </h2>
          </div>
          <div>
            <h2 className="text-white">
              You have an account
              <Link className=" text-yellow-500 font-bold" to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
          <div>
            <h2 className="text-white">
              Go to Home Page{" "}
              <Link className=" text-yellow-500 font-bold" to={"/="}>
                Home Page{" "}
              </Link>
            </h2>
          </div>
        </div>
      </div>
    );
}

export default Resetpassword;
