import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

const Profile = () => {
  const storedUser = localStorage.getItem("user");
  let userid;
  if (storedUser) {
    userid = JSON.parse(storedUser).user.uid;
    }
    console.log(userid)

  const context = useContext(myContext);
  const { mode, loading, user } = context;

  if (!user) {
    return <div>User data not available</div>; // or some other fallback
  }

  return (
    <Layout>
      {loading && <Loader />}

      <div className=" pt-10 text-white">
        {user.map((item, index) => {
          const { name, uid, email, date } = item;
            return (
              <>
                <tr
                  className="bg-gray-50 border-b  dark:border-gray-700"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <td className="px-6 py-4 text-white ">{index + 1}.</td>
                  <td className="px-6 py-4 text-white ">{name}</td>
                  <td className="px-6 py-4 text-white ">{email}</td>
                  <td className="px-6 py-4 text-white ">{uid}</td>
                </tr>
                <div className=" h-full pt-10">
                  {user
                    .filter((obj) => obj.userid == userid)
                    .map((users) => {
                      // order.cartItems.map()
                      return (
                          <div>
                              
                                      <h1>{users.name}</h1>
                            
                       </div>
                      );
                    })}
                </div>
              </>
            );
        })}
      </div>
    </Layout>
  );
};

export default Profile;
