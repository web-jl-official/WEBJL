import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import Testimonial from '../../components/testimonial/Testimonial'
const About = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Layout>
      <div className="m-4 text-white">
        <h3 className="text-2xl" style={{ textAlign: "center" }}>
          Welcome To <span id="W_Name1">WEB JL</span>
        </h3>
        <div className="max-w-4xl mx-auto p-6  shadow-md">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            Welcome to <strong>WEB JL</strong>, your go-to resource for all
            things programming! Founded with a passion for education and
            technology, we aim to provide comprehensive and accessible
            programming language notes, source code for short and long programs,
            and a variety of projects tailored for college students.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-4">
            At WEB JL, we believe in empowering students and developers by
            providing high-quality educational content. Our mission is to make
            learning programming languages easy and enjoyable through detailed
            notes, practical examples, and engaging video lectures.
          </p>
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Programming Language Notes</strong>: Clear and concise
              notes on various programming languages to help you understand the
              fundamentals and advanced concepts.
            </li>
            <li>
              <strong>Source Code</strong>: Access to a wide range of short and
              long programs, complete with source code, to enhance your coding
              skills.
            </li>
            <li>
              <strong>Projects</strong>: A collection of short and long projects
              suitable for college assignments and personal development.
            </li>
            <li>
              <strong>Video Lectures</strong>: Engaging video tutorials that
              walk you through complex topics and provide hands-on coding
              experience.
            </li>
            <li>
              <strong>Examples and Links</strong>: Practical examples and useful
              links to further your understanding and application of programming
              concepts.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="mb-4">
            We envision a world where anyone can learn to code and create
            innovative solutions. By providing top-notch educational resources,
            we strive to bridge the gap between theoretical knowledge and
            practical application.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
          <p>
            Whether you're a beginner looking to start your programming journey
            or an experienced developer seeking to expand your skills, WEB JL is
            here to support you every step of the way. Join our community and
            start learning today!
          </p>
        </div>
        <br />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Thanks For Visiting Our Site
          <br />
          <br />
          <span
            className="text-indigo-400 text-xl"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Have a nice day!
          </span>
        </p>
      </div>

      <Testimonial />
    </Layout>
  );
};
export default About;
