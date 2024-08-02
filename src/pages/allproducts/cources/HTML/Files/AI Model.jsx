import React, { useRef, useState } from "react";
import Layout from "../../../../../components/layout/Layout";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AIModel = () => {
  const inpRef = useRef();
  const inpRef2 = useRef();

  const genAI = new GoogleGenerativeAI(import.meta.env.GEMAIN_API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [aiResult, setAiResult] = useState("");

  const handleClick = async () => {
    // const prompt = ;
    const result = await model.generateContent(inpRef.current.value);
    setAiResult(result.response.text);
  };

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const btnStyle = {
    backgroundColor: isHovered ? "aqua" : "black",
    color: isHovered ? "black" : "white",
    border: "2px solid black",
    width: "250px",
    height: "40px",
    borderRadius: "8px",
    padding: "8px",
    margin: "5px",
  };

  return (
    <Layout>
      <div className="flex flex-wrap justify-center text-center items-center">
        <div className="block text-center text-white w-fit">
          <h1 style={{ fontSize: "30px" }}>Make By Web JL</h1>
          <h1 style={{ fontSize: "20px" }}>Enter The Text</h1>
          <div className="text-white flex flex-wrap justify-center text-center items-center bg-gray-700 p-4 border-4 border-white rounded-xl">
            <textarea
              style={{
                fontSize: "medium",
                backgroundColor: "black",
                color: "white",
                border: "2px solid white",
                borderRadius: "8px",
                width: "250px",
                height: "350px",
                textAlign: "start",
                overflowBlock: "scroll",
              }}
              type="text"
              id="inp"
              ref={inpRef}
              placeholder="Enter Your Question."
            />
            <button
              style={btnStyle}
              id="btn"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              Ans
            </button>
            <textarea
              style={{
                fontSize: "medium",
                backgroundColor: "black",
                color: "white",
                border: "2px solid white",
                borderRadius: "8px",
                width: "250px",
                height: "350px",
                textAlign: "start",
                overflowBlock: "scroll",
              }}
              type="text"
              id="inpAI"
              ref={inpRef2}
              value={aiResult}
              placeholder="Your Ans."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AIModel;
