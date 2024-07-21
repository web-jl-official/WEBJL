import React from "react";
import Layout from "../../../../../components/layout/Layout";

export default function LEARN_REACT() {
  return (
    <Layout>
      <div className="text-white mx-4">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      h1{\n        font-size: 30px;\n      }\n      .videocont{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      video {\n        width: 80%;\n        border-radius: 5px;\n        border: 2px solid black;\n      }\n      h2{\n        font-size: 28px;\n      }\n      h3{\n        font-size: 20px;\n      }\n      p{\n        font-size: 15px;\n      }\n      button{\n  color: black;\n      background-color: aqua;\n        border: 1px solid white;\n        border-radius: 5px;\n      }\n      pre{\n        display: inline;\n        background-color: black;\n        color: white;\n        margin: 5px, 5px, 5px, 5px;\n        \n      }\n      li{\n        margin: 10px;\n      }\n\n      @media only screen and (min-width: 768px) {\n        h1{\n        font-size: 30px;\n      }\n      .videocont{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      video {\n        width: 60%;\n        border-radius: 5px;\n        border: 2px solid black;\n      }\n      h2{\n        font-size: 28px;\n      }\n      h3{\n        font-size: 20px;\n      }\n      p{\n        font-size: 15px;\n      }\n      button{\n        background-color: aqua;\n        border: 1px solid white;\n        border-radius: 5px;\n      }\n      pre{\n        display: inline;\n        background-color: black;\n        color: white;\n        margin: 5px, 5px, 5px, 5px;\n        \n      }\n      }\n    ",
          }}
        />
        <div style={{ margin: "20px", display: "block" }}>
          <h1 style={{ display: "block", margin: "auto", textAlign: "center" }}>
            <b>VITA + REACT </b>
          </h1>
          <h2 style={{ display: "block", margin: "auto", textAlign: "center" }}>
            Part 1 HTML Learn
          </h2>
          <div className="videocont">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/RRYEIQymMBM?si=33-CIkdszJTmwNqq"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="text-white m-4">
        <h1>VITA + REACT JS Project</h1>

        <h2>
          1{" "}
          <a href="https://devknus.notion.site/Project-Setup-1fad63b7d026432881aed555b03fdd59">
            Notes link
          </a>
        </h2>
        <h2>
          2{" "}
          <a href="https://devknus.notion.site/Folder-Structure-43368dcd8e2648e1b515b318c4f5af2f">
            Notes link
          </a>
        </h2>
        <h2>
          3 <a href="https://tailblocks.cc/">Tailblock.cc link</a>
        </h2>
        <h2>
          4{" "}
          <a href="https://magic.reactjs.net/htmltojsx.htm">
            HTML TO JSX CONVETER link
          </a>
        </h2>
      </div>
    </Layout>
  );
}
