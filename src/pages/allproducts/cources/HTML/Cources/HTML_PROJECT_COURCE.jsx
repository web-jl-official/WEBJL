import React from "react";
import Layout from "../../../../../components/layout/Layout";

export default function HTML_PROJECT_COURCE() {
  return (
    <Layout>
      <div className='text-white mx-4'>
        <style dangerouslySetInnerHTML={{__html: "\n      h1{\n        font-size: 30px;\n      }\n      .videocont{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      video {\n        width: 80%;\n        border-radius: 5px;\n        border: 2px solid black;\n      }\n      h2{\n        font-size: 28px;\n      }\n      h3{\n        font-size: 20px;\n      }\n      p{\n        font-size: 15px;\n      }\n      button{\n  color: black;\n      background-color: aqua;\n        border: 1px solid white;\n        border-radius: 5px;\n      }\n      pre{\n        display: inline;\n        background-color: black;\n        color: white;\n        margin: 5px, 5px, 5px, 5px;\n        \n      }\n      li{\n        margin: 10px;\n      }\n\n      @media only screen and (min-width: 768px) {\n        h1{\n        font-size: 30px;\n      }\n      .videocont{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      video {\n        width: 60%;\n        border-radius: 5px;\n        border: 2px solid black;\n      }\n      h2{\n        font-size: 28px;\n      }\n      h3{\n        font-size: 20px;\n      }\n      p{\n        font-size: 15px;\n      }\n      button{\n        background-color: aqua;\n        border: 1px solid white;\n        border-radius: 5px;\n      }\n      pre{\n        display: inline;\n        background-color: black;\n        color: white;\n        margin: 5px, 5px, 5px, 5px;\n        \n      }\n      }\n    " }} />
        <div style={{margin: '20px', display: 'block'}}>
          <h1 style={{display: 'block', margin: 'auto', textAlign: 'center'}}>
            <b>HTML & CSS COURSE</b>
          </h1>
          <h2 style={{display: 'block', margin: 'auto', textAlign: 'center'}}>Part 1 HTML Learn</h2>
          <div className="videocont">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/j67f07RrsQ4?si=MkBLFbwT4a6NIMpV" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>

        <div style={{margin: '20px', display: 'block'}}>
          <h2 style={{display: 'block', margin: 'auto', textAlign: 'center'}}>Part 2 CSS Learn</h2>
          <div className="videocont">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/SB1n_4kr5zo?si=SUt_eBcWXdVTwfFH" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>

        <div style={{margin: '20px', display: 'block'}}>
          <h2 style={{display: 'block', margin: 'auto', textAlign: 'center'}}>Part 3 CSS Learn</h2>
          <div className="videocont">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/MUAwaRiXK1c?si=PeL4_wY0QgkCNlDc" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>

        {/* <div style={{margin: '20px', display: 'block'}}>
          <h2 style={{display: 'block', margin: 'auto', textAlign: 'center'}}>Part 2 CSS Learn</h2>
          <div className="videocont">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/SB1n_4kr5zo?si=SUt_eBcWXdVTwfFH" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div> */}
      
      </div>
    </Layout>
  );
}
