import React, { useContext, useEffect, useState } from "react";
import getUserData from "../../context/data/myState";
import myContext from "../../context/data/myContext";


const Profile = () => {
  const context = useContext(myContext);
  const { user } = context;
    const [userData, setUserData] = useState(user);
   
    useEffect((userData) => { 
        const data = getUserData(userData);
        console.log(data);
        setUserData(data);
    },[])
    
  return <div className="bg-gray-900 text-white">hello Livesh</div>;
};

export default Profile;
