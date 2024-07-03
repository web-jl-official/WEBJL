import React from 'react'
import Layout from '../../../../../components/layout/Layout'

export default function banckaccount() {
  return (
    <Layout>
      <div className="text-white mx-4 Code">
        <h1 style={{ fontSize: "xx-large", textAlign: "center" }}>
          Bank Account Class in C++
        </h1>
        <br />
        <h2>
          Define a class to represent a bank account which includes the
          following members as
        </h2>
        <ul>
          <br />
          <h2>Data members:</h2>
          <li>a. Name of the depositor</li>
          <li>b. Account Number</li>
          <li>c. Withdrawal amount</li>
          <li>d. Deposit amount</li>
          <li>e. Balance amount in the account</li>
          <br />
          <h2>Member Functions:</h2>
          <li>a. To assign initial values</li>
          <li>b. To deposit an amount after Showing the balance</li>
          <li>c. To withdraw an amount after Showing the balance </li>
          <li>d. To display name,Account No. &amp; Balance.</li>
        </ul>
        <br />
        <hr />
        <br />
        <img
          style={{ borderRadius: "5px" }}
          src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/CPP_BAnkAccount%2FLGT_BANK.cpp%20-%20C%2B%2B%20Language%20-%20Visual%20Studio%20Code%2004-02-2024%2014_59_03.png?alt=media&token=926460ea-f2b7-448a-88ca-528fb5b73602"
          alt=""
        />
        <strong>Data Type is a Data Members to store data in a program </strong>
        <br />
        <p>
          The private is a Access Specifires for Data Member and it can be used
          by only that class where it has been declared.
        </p>
        <br />
        <img
          style={{ borderRadius: "5px" }}
          src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/CPP_BAnkAccount%2FLGT_BANK.cpp%20-%20C%2B%2B%20Language%20-%20Visual%20Studio%20Code%2004-02-2024%2015_09_38.png?alt=media&token=2de266cf-e37d-4a3f-8a5e-849fa4c015e8"
          alt=""
        />
        <img
          style={{ borderRadius: "5px" }}
          src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/CPP_BAnkAccount%2FLGT_BANK.cpp%20-%20C%2B%2B%20Language%20-%20Visual%20Studio%20Code%2004-02-2024%2015_09_50.png?alt=media&token=fd2b4096-00d6-4e83-a0ab-a7778d7d7e04"
          alt=""
        />
        <strong> Getdata Function () </strong>
        <p>
          This code is like a bank teller machine. It first asks for your name
          and account number. Then, it checks if your account number is one of
          the five numbers it knows (123451, 123452, 123453, 123454, 123455). If
          it is, it tells you how much money you have in your account.
          <br />
          <br />
          Then, it asks you what you want to do: withdraw money (by typing 'W'
          or 'w') or deposit money (by typing 'D' or 'd'). If you choose to
          withdraw, it goes to the withdrawal process. If you choose to deposit,
          it goes to the deposit process.
          <br />
          <br />
          If you type something other than 'W', 'w', 'D', or 'd', it tells you
          there was an error and asks you to try again.
          <br />
          <br />
          If your account number is not one of the five numbers it knows, it
          tells you that your account number is not valid.
        </p>
        <br />
        <img
          style={{ borderRadius: "5px" }}
          src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/CPP_BAnkAccount%2FLGT_BANK.cpp%20-%20C%2B%2B%20Language%20-%20Visual%20Studio%20Code%2004-02-2024%2015_24_49.png?alt=media&token=b702d583-70f6-4b2d-a4b5-ad81b2ac4c67"
          alt=""
        />
        <strong>Withdrawal ()</strong>
        <p>
          {" "}
          1. Withdrawalor(): This is like a money machine asking you how much
          money you want to take out. If you have enough money in your account,
          it gives you the money and tells you how much money you have left. If
          you don't have enough money, it tells you that you can't take out that
          much.
        </p>
        <br />
        <br />
        <img
          style={{ borderRadius: "5px" }}
          src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/CPP_BAnkAccount%2FLGT_BANK.cpp%20-%20C%2B%2B%20Language%20-%20Visual%20Studio%20Code%2004-02-2024%2015_24_56.png?alt=media&token=169da6cf-7a83-4f9d-9665-21ac8695c43b"
          alt=""
        />
        <strong>Depositor ()</strong>
        <p>
          2. Depositor(): This is like a money machine asking you how much money
          you want to put in. It adds the money to your account and tells you
          how much money you have now.
        </p>
        <br />
        <br />
        <p>
          So, Withdrawalor() is for taking money out and Depositor() is for
          putting money in.
        </p>
        <br />
        <br />
        <img
          style={{ borderRadius: "5px" }}
          src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/CPP_BAnkAccount%2FLGT_BANK.cpp%20-%20C%2B%2B%20Language%20-%20Visual%20Studio%20Code%2004-02-2024%2015_25_06.png?alt=media&token=55c09b4e-f2ac-4d20-884d-7afdca9c3d16"
          alt=""
        />
        <strong>main ()</strong>
        <p>
          Sure, let's correct and simplify the English for this paragraph: "This
          function is essential in a C++ program because it's the main function.
          Without this function, the program can't run. Every other function
          runs within the main function. You can think of the main function as
          the parent function and all other functions as child functions.
          <br />
          <br />
          We write the name of the class and run the getdata() function. We use
          return 0 because the main function doesn't return any value. Then we
          close the function."
          <br />
          <br />
        </p>
        <hr />
        <p />
        <strong>Here is the code for Bank Account Class :</strong>
        <div className="Code_Writer">
          <pre
            style={{
              background: "rgb(30, 30, 30)",
              borderBottomColor: "initial",
              borderBottomStyle: "initial",
              borderImage: "initial",
              borderLeftColor: "initial",
              borderLeftStyle: "initial",
              borderRadius: "10px",
              borderRightColor: "initial",
              borderRightStyle: "initial",
              borderTopColor: "rgb(221, 221, 221)",
              borderTopStyle: "solid",
              borderWidth: "5px 0px 0px",
              fontStretch: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantNumeric: "inherit",
              lineHeight: "inherit",
              marginBottom: "1.5em",
              marginTop: "0px",
              overflowWrap: "normal",
              overflow: "auto",
              padding: "12px",
              verticalAlign: "baseline",
            }}
          >
            <div
              style={{
                fontFamily: 'Consolas, "Courier New", monospace',
                fontSize: "14px",
                lineHeight: "19px",
              }}
            >
              <div style={{ color: "#d4d4d4" }}>
                <div style={{ lineHeight: "19px" }}>
                  <div>
                    <span style={{ color: "#9b9b9b" }}>#include</span>
                    <span style={{ color: "#569cd6" }}> </span>
                    <span style={{ color: "#ce9178" }}>&lt;iostream&gt;</span>
                  </div>
                  <div>
                    <span style={{ color: "#569cd6" }}>using</span>{" "}
                    <span style={{ color: "#569cd6" }}>namespace</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>std</span>;
                  </div>
                  <div>
                    <span style={{ color: "#569cd6" }}>class</span>{" "}
                    <span style={{ color: "#4ec9b0" }}>Bank</span>
                  </div>
                  <div>{"{"}</div>
                  <div>
                    <span style={{ color: "#569cd6" }}>private:</span>
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>int</span>{" "}
                    <span style={{ color: "#dadada" }}>Account_Number</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>double</span>{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span>,{" "}
                    <span style={{ color: "#dadada" }}>Withdrawal</span>,{" "}
                    <span style={{ color: "#dadada" }}>Deposit</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp;{" "}
                    <span style={{ color: "#4ec9b0" }}>string</span>{" "}
                    <span style={{ color: "#dadada" }}>Depositor_Name</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>char</span>{" "}
                    <span style={{ color: "#dadada" }}>Enter</span>;
                  </div>
                  <div>
                    <span style={{ color: "#569cd6" }}>public:</span>
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>void</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>Depositor</span>();
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>void</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>Withdrawalor</span>();
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>void</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>getdata</span>();
                  </div>
                  <div>{"}"};</div>
                  <div>
                    <span style={{ color: "#569cd6" }}>void</span>{" "}
                    <span style={{ color: "#4ec9b0" }}>Bank</span>::
                    <span style={{ color: "#c8c8c8" }}>getdata</span>()
                  </div>
                  <div>{"{"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Enter Your Name : "
                    </span>
                    ;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Depositor_Name</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Enter Your Account Number : "
                    </span>
                    ;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Account_Number</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>if</span> (
                    <span style={{ color: "#dadada" }}>Account_Number</span> =={" "}
                    <span style={{ color: "#b5cea8" }}>123451</span>)
                  </div>
                  <div>&nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> ={" "}
                    <span style={{ color: "#b5cea8" }}>10000</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Depositor_Name</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Account_Number</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Your Initial Balance is Rs."
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Withdrawal Amount Type W"
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Deposit Amount Type D "
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Enter</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'W'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'w'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Withdrawalor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'D'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'d'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Depositor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Error !!\nPlease Try Again.\n"
                    </span>
                    ;
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>&nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> (
                    <span style={{ color: "#dadada" }}>Account_Number</span> =={" "}
                    <span style={{ color: "#b5cea8" }}>123452</span>)
                  </div>
                  <div>&nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> ={" "}
                    <span style={{ color: "#b5cea8" }}>5000</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Your Initial Balance is Rs."
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Withdrawal Amount Type W"
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Deposit Amount Type D "
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Enter</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'W'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'w'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Withdrawalor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'D'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'d'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Depositor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Error !!\nPlease Try Again.\n"
                    </span>
                    ;
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>&nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> (
                    <span style={{ color: "#dadada" }}>Account_Number</span> =={" "}
                    <span style={{ color: "#b5cea8" }}>123453</span>)
                  </div>
                  <div>&nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> ={" "}
                    <span style={{ color: "#b5cea8" }}>2000</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Your Initial Balance is Rs."
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Withdrawal Amount Type W"
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Deposit Amount Type D "
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Enter</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'W'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'w'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Withdrawalor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'D'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'d'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Depositor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Error !!\nPlease Try Again.\n"
                    </span>
                    ;
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>&nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> (
                    <span style={{ color: "#dadada" }}>Account_Number</span> =={" "}
                    <span style={{ color: "#b5cea8" }}>123454</span>)
                  </div>
                  <div>&nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> ={" "}
                    <span style={{ color: "#b5cea8" }}>3000</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Your Initial Balance is Rs."
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Withdrawal Amount Type W"
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Deposit Amount Type D "
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Enter</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'W'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'w'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Withdrawalor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'D'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'d'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Depositor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Error !!\nPlease Try Again.\n"
                    </span>
                    ;
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>&nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> (
                    <span style={{ color: "#dadada" }}>Account_Number</span> =={" "}
                    <span style={{ color: "#b5cea8" }}>123455</span>)
                  </div>
                  <div>&nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> ={" "}
                    <span style={{ color: "#b5cea8" }}>9000</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Your Initial Balance is Rs."
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Withdrawal Amount Type W"
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "For Deposit Amount Type D "
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Enter</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'W'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'w'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Withdrawalor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>{" "}
                    <span style={{ color: "#569cd6" }}>if</span> ((
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'D'</span>) || (
                    <span style={{ color: "#dadada" }}>Enter</span> =={" "}
                    <span style={{ color: "#ce9178" }}>'d'</span>))
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>Depositor</span>();
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>else</span>
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Error !!\nPlease Try Again.\n"
                    </span>
                    ;
                  </div>
                  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
                  <div>&nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>else</span>
                  </div>
                  <div>&nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Your account number is not valid!"
                    </span>
                    ;
                  </div>
                  <div>&nbsp; &nbsp; {"}"}</div>
                  <div>{"}"}</div>
                  <div>
                    <span style={{ color: "#569cd6" }}>void</span>{" "}
                    <span style={{ color: "#4ec9b0" }}>Bank</span> ::
                    <span style={{ color: "#c8c8c8" }}>Withdrawalor</span>()
                  </div>
                  <div>{"{"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Enter Your Amount For Withdrawal : "
                    </span>
                    ;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Withdrawal</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>if</span> (
                    <span style={{ color: "#dadada" }}>Balance_amount</span>{" "}
                    &gt;= <span style={{ color: "#dadada" }}>Withdrawal</span>)
                  </div>
                  <div>&nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> ={" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> -{" "}
                    <span style={{ color: "#dadada" }}>Withdrawal</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "You Are &nbsp;Successfully Withdrawn The Money."
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>endl</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Your Current Balance Is : Rs."
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span>;
                  </div>
                  <div>&nbsp; &nbsp; {"}"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#569cd6" }}>else</span>
                  </div>
                  <div>&nbsp; &nbsp; {"{"}</div>
                  <div>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "\nInsufficient balance!"
                    </span>
                    ;
                  </div>
                  <div>&nbsp; &nbsp; {"}"}</div>
                  <div>{"}"}</div>
                  <div>
                    <span style={{ color: "#569cd6" }}>void</span>{" "}
                    <span style={{ color: "#4ec9b0" }}>Bank</span> ::
                    <span style={{ color: "#c8c8c8" }}>Depositor</span>()
                  </div>
                  <div>{"{"}</div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "Enter Your Amount For Deposit : "
                    </span>
                    ;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cin</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&gt;&gt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Deposit</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp;{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> ={" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span> +{" "}
                    <span style={{ color: "#dadada" }}>Deposit</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>cout</span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#ce9178" }}>
                      "\nYour Current Balance is : RS."
                    </span>{" "}
                    <span style={{ color: "#b4b4b4" }}>&lt;&lt;</span>{" "}
                    <span style={{ color: "#dadada" }}>Balance_amount</span>;
                  </div>
                  <div>{"}"}</div>
                  <div>
                    <span style={{ color: "#569cd6" }}>int</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>main</span>()
                  </div>
                  <div>{"{"}</div>
                  <div>
                    &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>class</span>{" "}
                    <span style={{ color: "#4ec9b0" }}>Bank</span>{" "}
                    <span style={{ color: "#c8c8c8" }}>Bank</span>;
                  </div>
                  <div>
                    &nbsp; &nbsp; <span style={{ color: "#c8c8c8" }}>Bank</span>
                    .<span style={{ color: "#c8c8c8" }}>getdata</span>();
                  </div>
                  <div>
                    &nbsp; &nbsp;{" "}
                    <span style={{ color: "#569cd6" }}>return</span>{" "}
                    <span style={{ color: "#b5cea8" }}>0</span>;
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </pre>
        </div>
      </div>
    </Layout>
  );
}
