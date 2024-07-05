import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

const Birthday = () => {
  const today = new Date().toISOString().split("T")[0];

  const [ShowInput, setShowInput] = useState(true);
  const [ShowOutput,  setShowOutput] = useState(false);

  const [UserName, setUserName] = useState("");
  const [BirthWish, setBirthWish] = useState("");
  const [Downlode, setDownlode] = useState("");
  const [Image, setImage] = useState("");
  const [BirthDate, setBirthDate] = useState("");

  function back() {
   setShowInput(true);
    setShowOutput(false);

}

  function Birth() {
    const Date = BirthDate;

    setShowInput(false);
    setShowOutput(true);

    switch (Date) {
      case "1998-11-27":
      case "2024-11-27":
        setUserName("Sachin");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2Fsachin.png?alt=media&token=808d0d3f-8a68-4546-a378-315210ae8dbb"
        );
        setBirthWish(
          `Happy Birthday to the most amazing brother in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/1cBR0BRpSAo8344P9-gnd0gPBg5cCZ46m/view?usp=drive_link"
        );
        break;
      case "2004-07-21":
      case "2024-07-21":
        setUserName("Muskan");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2FDesigner%20(1).png?alt=media&token=b6e96cfb-4ff6-448b-bd77-e669f625c636"
        );
        setBirthWish(
          `Happy Birthday to the most amazing sister in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/1MPP6YPjGCj6xpDKnrmAIbo5OapyPT4D0/view?usp=drive_link"
        );
        break;
      case "2006-02-04":
      case "2024-02-04":
        setUserName("Lakhpreet");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2FDesigner.png?alt=media&token=56abb7d4-c9a3-4a99-8280-8dad341ba470"
        );
        setBirthWish(
          `Happy Birthday to the most amazing brother in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/1aWdyGFf7xSyGI4xgfGAio5ARzHHJ5axq/view?usp=drive_link"
        );
        break;
      case "2005-08-19":
      case "2024-08-19":
        setUserName("Aseem");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2FAseem.png?alt=media&token=b0656c8d-760e-4a17-8d87-84c5aacc8703"
        );
        setBirthWish(
          `Happy Birthday to the most amazing brother in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/1m5QcvjgsWiB4EulRQ0PHypVSkZiu3BDU/view?usp=drive_link"
        );
        break;
      case "2005-08-06":
      case "2024-08-06":
        setUserName("Amarveer");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2FAmarveer.png?alt=media&token=ff514417-949f-492b-b4d9-0813eea0a924"
        );
        setBirthWish(
          `Happy Birthday to the most amazing brother in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/1cYIOyYkNgNYr4389V8Qx28reWYS1Q-ix/view?usp=drive_link"
        );
        break;
      case "2005-09-13":
      case "2024-09-13":
        setUserName("Khushi");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2FKhushi.png?alt=media&token=79851355-c2c1-45c0-a181-29d406c55331"
        );
        setBirthWish(
          `Happy Birthday to the most amazing sister in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/13h7yKScEefbSSmLkLk4gxGrgLQiv9SQa/view?usp=drive_link"
        );

        break;
      case "2003-08-31":
      case "2024-08-31":
        setUserName("Raghav");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2FRaghav.png?alt=media&token=b7ad11a1-e1ec-4b81-af1c-9ca17cba1a9d"
        );
        setBirthWish(
          `Happy Birthday to the most amazing brother in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/1KZ0yJfT66OJuk4N5DdqGryULc3DitN6a/view?usp=drive_link"
        );
        break;
      case "2005-10-11":
      case "2024-10-11":
        setUserName("Jatin");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2FJatin.jpeg?alt=media&token=b0518b92-b4e0-4780-9070-b7570bb7caba"
        );
        setBirthWish(
          `Happy Birthday to the most amazing brother in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/1G-VTLJ6USOd6glnuYy4rSS0-_PFkoIUs/view?usp=drive_link"
        );
        break;
      case "2005-12-20":
      case "2024-12-20":
        setUserName("Sharik");
        setImage(
          "https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Birthday%20Card%2Fsharik.jpeg?alt=media&token=d1d1faec-0e45-43a9-8ccd-a2cfd6401d97"
        );
        setBirthWish(
          `Happy Birthday to the most amazing brother in the world! Your kindness, love, and support mean everything to me. I am so grateful to have you in my life, and I cherish every moment we share. May your special day be filled with joy, laughter, and all the wonderful things you deserve. Love you always!`
        );
        setDownlode(
          "https://drive.google.com/file/d/1E76gsQuPj62acHdP7mcLOOqz93y6wX7z/view?usp=drive_link"
        );
        break;
      default:
        setUserName("Brother/Sister");
        setImage(
          "https://www.shutterstock.com/image-vector/birthday-balloons-vector-background-design-260nw-2003677130.jpg"
        );
        setBirthWish(
          `Happy Birthday to someone who knows me better than I know myself.`
        );
        setDownlode(
          "https://drive.google.com/file/d/1DkEChcdOUgyab6tsvumAw0NDZgSpWNQ9/view?usp=drive_link"
        );
        break;
    }
  }
  const handleDownload = async () => {
    const link = document.createElement("a");
    link.href = `${Downlode}`;
    link.download = "Muskan.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Layout>
      <div className="w-full h-full bg-center bg-fixed bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2015/12/30/11/53/birthday-1114056_1280.jpg')]">
        {ShowInput && (
          <div
            id="1input"
            style={{ display: "flex" }}
            className="bg-black/60 w-full h-screen justify-center text-center items-center"
          >
            <div className="text-white">
              <h1 className="text-3xl mb-4">Enter DOB (Date of Birth)</h1>
              <input
                onChange={(e) => setBirthDate(e.target.value)}
                className=" bg-white text-black w-52 p-2 m-2 border-4 rounded-3xl  border-cyan-400"
                type="Date"
                defaultValue={today}
                name=""
                id="Date"
              />
              <button
                className="bg-cyan-400 w-52 p-2 m-2 text-black text-xl items-center text-center border-4 rounded-3xl  border-cyan-400 "
                onClick={Birth}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {ShowOutput && (
          <div
            id="2output"
            style={{ display: "flex" }}
            className="bg-black/60 w-full h-screen  justify-center text-center items-center"
          >
            <div className="max-w-sm mx-auto  shadow-lg rounded-lg overflow-hidden">
              <div className="bg-white">
                <div className="bg-blue-500 p-4">
                  <h1 className="text-white text-2xl font-bold">
                    Happy Birthday! {UserName}
                  </h1>
                </div>
                <div className="p-4">
                  <img
                    src={Image}
                    alt="Birthday Celebration"
                    className="w-full h-auto"
                  />
                  <p className="text-gray-700 mt-4">{BirthWish}</p>
                </div>
              </div>

              <div className="flex p-4 bg-gray-100 justify-evenly">
                
                <button
                  onClick={handleDownload}

                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Downlode Card
                </button>
                <button
                  onClick={back}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Back To Input
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Birthday;
