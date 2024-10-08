import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true)
        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required")
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            // console.log(users)

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time : Timestamp.now()
            }
            const userRef = collection(fireDB, "users")
            await addDoc(userRef, user);
            toast.success("Signup Succesfully")
            setName("");
            setEmail("");
            setPassword("");
            navigate("/");
            setLoading(false);
            
            
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

        
    }

    return (
      <div className="bg-gray-900 flex justify-center items-center h-screen">
        {loading && <Loader />}
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Signup
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:   text-white outline-none"
              placeholder="Name"
            />
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
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:   text-white outline-none"
              placeholder="Password"
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={signup}
              className=" bg-red-500 hover:bg-red-800 w-full text-white font-bold  px-2 py-2 rounded-lg"
            >
              Signup
            </button>
          </div>
          <div>
            <Link to={"/login"}>
              <button className=" bg-cyan-400 hover:bg-violet-500 w-full text-black font-bold  px-2 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </div>
          <div className="flex justify-between mt-8">
            <Link className=" text-yellow-500 font-bold" to={"/resetpassword"}>
              Reset Password
            </Link>
            <Link className=" text-yellow-500 font-bold" to={"/"}>
              Home Page{" "}
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Signup