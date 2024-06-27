import React from 'react'
import Layout from '../../../../../components/layout/Layout'

export default function PY_Calendar() {
  return (
    <Layout>
        <div className='bg-gray-900 text-white m-4'>
          <center><h1 className='text-sky-400 font-black text-2xl m-2 p-2'>1. Python Month Calender</h1></center>
           <pre style={{background: 'rgb(30, 30, 30)', borderBottomColor: 'initial', borderBottomStyle: 'initial', borderImage: 'initial', borderLeftColor: 'initial', borderLeftStyle: 'initial', borderRadius: '10px', borderRightColor: 'initial', borderRightStyle: 'initial', borderTopColor: 'rgb(221, 221, 221)', borderTopStyle: 'solid', borderWidth: '5px 0px 0px', fontStretch: 'inherit', fontVariantEastAsian: 'inherit', fontVariantNumeric: 'inherit', lineHeight: 'inherit', marginBottom: '1.5em', marginTop: '0px', overflowWrap: 'normal', overflow: 'auto', padding: '12px', verticalAlign: 'baseline'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{backgroundColor: '#1f1f1f', lineHeight: '19px'}}><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><span style={{color: '#c586c0'}}>import</span> <span style={{color: '#4ec9b0'}}>calendar;</span></div><span style={{color: '#cccccc', fontFamily: 'Consolas, Courier New, monospace'}}><span style={{fontSize: '14px'}}><br /></span></span><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><span style={{color: '#6a9955'}}># Get year and month input from the user</span></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><span style={{color: '#9cdcfe'}}>yy</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#4ec9b0'}}>int</span>(<span style={{color: '#dcdcaa'}}>input</span>(<span style={{color: '#ce9178'}}>"Enter the year: "</span>))</div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><span style={{color: '#9cdcfe'}}>mm</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#4ec9b0'}}>int</span>(<span style={{color: '#dcdcaa'}}>input</span>(<span style={{color: '#ce9178'}}>"Enter the month: "</span>))</div><span style={{color: '#cccccc', fontFamily: 'Consolas, Courier New, monospace'}}><span style={{fontSize: '14px'}}><br /></span></span><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><span style={{color: '#6a9955'}}># Display the calendar for the given year and month</span></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><span style={{color: '#dcdcaa'}}>print</span>(<span style={{color: '#4ec9b0'}}>calendar</span>.<span style={{color: '#dcdcaa'}}>month</span>(<span style={{color: '#9cdcfe'}}>yy</span>, <span style={{color: '#9cdcfe'}}>mm</span>))</div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><br /></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}>// Output</div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><br /></div><div><span style={{color: '#cccccc', fontFamily: 'Consolas, Courier New, monospace'}}><span style={{fontSize: '14px'}}>Enter the year: 2024{"\n"}Enter the month: 12{"\n"}{"   "}December 2024{"\n"}Mo Tu We Th Fr Sa Su{"\n"}{"                   "}1{"\n"} 2{"  "}3{"  "}4{"  "}5{"  "}6{"  "}7{"  "}8{"\n"} 9 10 11 12 13 14 15{"\n"}16 17 18 19 20 21 22{"\n"}23 24 25 26 27 28 29{"\n"}30 31{"\n"}</span></span></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><br /></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></pre>
        </div>
        <div className='bg-gray-900 text-white m-4'>
          <center><h1 className='text-sky-400 font-black text-2xl m-2 p-2'>2. Python Year Calender Style 1</h1></center>
           <pre style={{background: 'rgb(30, 30, 30)', borderBottomColor: 'initial', borderBottomStyle: 'initial', borderImage: 'initial', borderLeftColor: 'initial', borderLeftStyle: 'initial', borderRadius: '10px', borderRightColor: 'initial', borderRightStyle: 'initial', borderTopColor: 'rgb(221, 221, 221)', borderTopStyle: 'solid', borderWidth: '5px 0px 0px', fontStretch: 'inherit', fontVariantEastAsian: 'inherit', fontVariantNumeric: 'inherit', lineHeight: 'inherit', marginBottom: '1.5em', marginTop: '0px', overflowWrap: 'normal', overflow: 'auto', padding: '12px', verticalAlign: 'baseline'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{backgroundColor: '#1f1f1f', lineHeight: '19px'}}><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div><span style={{color: '#c586c0'}}>import</span> <span style={{color: '#4ec9b0'}}>calendar</span></div><br /><div><span style={{color: '#6a9955'}}># Prompt the user to enter a year</span></div><div><span style={{color: '#9cdcfe'}}>year</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#4ec9b0'}}>int</span>(<span style={{color: '#dcdcaa'}}>input</span>(<span style={{color: '#ce9178'}}>"Enter the year you want to view the calendar for: "</span>))</div><br /><div>&nbsp;<span style={{color: '#6a9955'}}>#Displays the full calendar for the given year.</span></div><div><span style={{color: '#dcdcaa'}}>print</span>(<span style={{color: '#569cd6'}}>f</span><span style={{color: '#ce9178'}}>"Calendar for the year </span><span style={{color: '#569cd6'}}>{"{"}</span><span style={{color: '#9cdcfe'}}>year</span><span style={{color: '#569cd6'}}>{"}"}</span><span style={{color: '#ce9178'}}>:"</span>)</div><div><span style={{color: '#dcdcaa'}}>print</span>(<span style={{color: '#4ec9b0'}}>calendar</span>.<span style={{color: '#4ec9b0'}}>TextCalendar</span>(<span style={{color: '#4ec9b0'}}>calendar</span>.<span style={{color: '#9cdcfe'}}>SUNDAY</span>).<span style={{color: '#dcdcaa'}}>formatyear</span>(<span style={{color: '#9cdcfe'}}>year</span>, <span style={{color: '#b5cea8'}}>2</span>, <span style={{color: '#b5cea8'}}>1</span>, <span style={{color: '#b5cea8'}}>2</span>, <span style={{color: '#b5cea8'}}>3</span>))</div><div><br /></div><div><br /></div></div></div></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><br /></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}>// Output</div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><br /></div><div><span style={{color: '#cccccc', fontFamily: 'Consolas, Courier New, monospace'}}><span style={{fontSize: '14px'}}>Enter the year you want to view the calendar for: 2023{"\n"}Calendar for the year 2023:{"\n"}{"                              "}2023{"\n"}{"\n"}{"      "}January{"               "}February{"               "}March{"\n"}Su Mo Tu We Th Fr Sa{"  "}Su Mo Tu We Th Fr Sa{"  "}Su Mo Tu We Th Fr Sa{"\n"} 1{"  "}2{"  "}3{"  "}4{"  "}5{"  "}6{"  "}7{"            "}1{"  "}2{"  "}3{"  "}4{"            "}1{"  "}2{"  "}3{"  "}4{"\n"} 8{"  "}9 10 11 12 13 14{"   "}5{"  "}6{"  "}7{"  "}8{"  "}9 10 11{"   "}5{"  "}6{"  "}7{"  "}8{"  "}9 10 11{"\n"}15 16 17 18 19 20 21{"  "}12 13 14 15 16 17 18{"  "}12 13 14 15 16 17 18{"\n"}22 23 24 25 26 27 28{"  "}19 20 21 22 23 24 25{"  "}19 20 21 22 23 24 25{"\n"}29 30 31{"              "}26 27 28{"              "}26 27 28 29 30 31{"\n"}{"\n"}{"       "}April{"                  "}May{"                   "}June{"\n"}Su Mo Tu We Th Fr Sa{"  "}Su Mo Tu We Th Fr Sa{"  "}Su Mo Tu We Th Fr Sa{"\n"}{"                   "}1{"      "}1{"  "}2{"  "}3{"  "}4{"  "}5{"  "}6{"               "}1{"  "}2{"  "}3{"\n"} 2{"  "}3{"  "}4{"  "}5{"  "}6{"  "}7{"  "}8{"   "}7{"  "}8{"  "}9 10 11 12 13{"   "}4{"  "}5{"  "}6{"  "}7{"  "}8{"  "}9 10{"\n"} 9 10 11 12 13 14 15{"  "}14 15 16 17 18 19 20{"  "}11 12 13 14 15 16 17{"\n"}16 17 18 19 20 21 22{"  "}21 22 23 24 25 26 27{"  "}18 19 20 21 22 23 24{"\n"}23 24 25 26 27 28 29{"  "}28 29 30 31{"           "}25 26 27 28 29 30{"\n"}30{"\n"}{"\n"}{"        "}July{"                 "}August{"              "}September{"\n"}Su Mo Tu We Th Fr Sa{"  "}Su Mo Tu We Th Fr Sa{"  "}Su Mo Tu We Th Fr Sa{"\n"}{"                   "}1{"         "}1{"  "}2{"  "}3{"  "}4{"  "}5{"                  "}1{"  "}2{"\n"} 2{"  "}3{"  "}4{"  "}5{"  "}6{"  "}7{"  "}8{"   "}6{"  "}7{"  "}8{"  "}9 10 11 12{"   "}3{"  "}4{"  "}5{"  "}6{"  "}7{"  "}8{"  "}9{"\n"} 9 10 11 12 13 14 15{"  "}13 14 15 16 17 18 19{"  "}10 11 12 13 14 15 16{"\n"}16 17 18 19 20 21 22{"  "}20 21 22 23 24 25 26{"  "}17 18 19 20 21 22 23{"\n"}23 24 25 26 27 28 29{"  "}27 28 29 30 31{"        "}24 25 26 27 28 29 30{"\n"}30 31{"\n"}{"\n"}{"      "}October{"               "}November{"              "}December{"\n"}Su Mo Tu We Th Fr Sa{"  "}Su Mo Tu We Th Fr Sa{"  "}Su Mo Tu We Th Fr Sa{"\n"} 1{"  "}2{"  "}3{"  "}4{"  "}5{"  "}6{"  "}7{"            "}1{"  "}2{"  "}3{"  "}4{"                  "}1{"  "}2{"\n"} 8{"  "}9 10 11 12 13 14{"   "}5{"  "}6{"  "}7{"  "}8{"  "}9 10 11{"   "}3{"  "}4{"  "}5{"  "}6{"  "}7{"  "}8{"  "}9{"\n"}15 16 17 18 19 20 21{"  "}12 13 14 15 16 17 18{"  "}10 11 12 13 14 15 16{"\n"}22 23 24 25 26 27 28{"  "}19 20 21 22 23 24 25{"  "}17 18 19 20 21 22 23{"\n"}29 30 31{"              "}26 27 28 29 30{"        "}24 25 26 27 28 29 30{"\n"}{"                                            "}31</span></span></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></pre>
        </div>
        <div className='bg-gray-900 text-white m-4'>
          <center><h1 className='text-sky-400 font-black text-2xl m-2 p-2'>3. Python Year Calender Style 2</h1></center>
           <pre style={{background: 'rgb(30, 30, 30)', borderBottomColor: 'initial', borderBottomStyle: 'initial', borderImage: 'initial', borderLeftColor: 'initial', borderLeftStyle: 'initial', borderRadius: '10px', borderRightColor: 'initial', borderRightStyle: 'initial', borderTopColor: 'rgb(221, 221, 221)', borderTopStyle: 'solid', borderWidth: '5px 0px 0px', fontStretch: 'inherit', fontVariantEastAsian: 'inherit', fontVariantNumeric: 'inherit', lineHeight: 'inherit', marginBottom: '1.5em', marginTop: '0px', overflowWrap: 'normal', overflow: 'auto', padding: '12px', verticalAlign: 'baseline'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{backgroundColor: '#1f1f1f', lineHeight: '19px'}}><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div><span style={{color: '#c586c0'}}>import</span> <span style={{color: '#4ec9b0'}}>calendar</span></div><br /><div><span style={{color: '#6a9955'}}># Prompt the user to enter a year</span></div><div><span style={{color: '#9cdcfe'}}>year</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#4ec9b0'}}>int</span>(<span style={{color: '#dcdcaa'}}>input</span>(<span style={{color: '#ce9178'}}>"Enter the year you want to view the calendar for: "</span>))</div><br /><div><span style={{color: '#6a9955'}}># Display the calendar for the entered year</span></div><div><span style={{color: '#dcdcaa'}}>print</span>(<span style={{color: '#569cd6'}}>f</span><span style={{color: '#ce9178'}}>"Calendar for the year </span><span style={{color: '#569cd6'}}>{"{"}</span><span style={{color: '#9cdcfe'}}>year</span><span style={{color: '#569cd6'}}>{"}"}</span><span style={{color: '#ce9178'}}>:"</span>)</div><div><span style={{color: '#c586c0'}}>for</span> <span style={{color: '#9cdcfe'}}>month</span> <span style={{color: '#c586c0'}}>in</span> <span style={{color: '#4ec9b0'}}>range</span>(<span style={{color: '#b5cea8'}}>2</span>,<span style={{color: '#b5cea8'}}>13</span>):</div><div>&nbsp; &nbsp; <span style={{color: '#dcdcaa'}}>print</span>(<span style={{color: '#4ec9b0'}}>calendar</span>.<span style={{color: '#dcdcaa'}}>month</span>(<span style={{color: '#9cdcfe'}}>year</span>, <span style={{color: '#9cdcfe'}}>month</span>))</div><br /><br /><br /><div><span style={{color: '#d4d4d4'}}>//</span> output</div><br /><div>Enter the <span style={{color: '#9cdcfe'}}>year</span> you want to view the <span style={{color: '#4ec9b0'}}>calendar</span> <span style={{color: '#c586c0'}}>for</span>: <span style={{color: '#b5cea8'}}>2024</span></div><div>Calendar <span style={{color: '#c586c0'}}>for</span> <span style={{color: '#9cdcfe'}}>the</span> year <span style={{color: '#b5cea8'}}>2024</span>:</div><div>&nbsp; &nbsp;February <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span></div><div><span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span></div><div><span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span></div><div><span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span></div><br /><div>&nbsp; &nbsp; &nbsp;March <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span></div><div><span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span></div><div><span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span></div><div><span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span> <span style={{color: '#b5cea8'}}>30</span> <span style={{color: '#b5cea8'}}>31</span></div><br /><div>&nbsp; &nbsp; &nbsp;April <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp;<span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span></div><div><span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span></div><div><span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span></div><div><span style={{color: '#b5cea8'}}>29</span> <span style={{color: '#b5cea8'}}>30</span></div><br /><div>&nbsp; &nbsp; &nbsp; May <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; &nbsp; &nbsp;<span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span></div><div><span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span></div><div><span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span></div><div><span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span> <span style={{color: '#b5cea8'}}>30</span> <span style={{color: '#b5cea8'}}>31</span></div><br /><div>&nbsp; &nbsp; &nbsp;June <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span></div><div><span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span></div><div><span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span></div><div><span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span> <span style={{color: '#b5cea8'}}>30</span></div><br /><div>&nbsp; &nbsp; &nbsp;July <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp;<span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span></div><div><span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span></div><div><span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span></div><div><span style={{color: '#b5cea8'}}>29</span> <span style={{color: '#b5cea8'}}>30</span> <span style={{color: '#b5cea8'}}>31</span></div><br /><div>&nbsp; &nbsp; August <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span></div><div><span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span></div><div><span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span></div><div><span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span> <span style={{color: '#b5cea8'}}>30</span> <span style={{color: '#b5cea8'}}>31</span></div><br /><div>&nbsp; &nbsp;September <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style={{color: '#b5cea8'}}>1</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span></div><div><span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span></div><div><span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span></div><div><span style={{color: '#b5cea8'}}>30</span></div><br /><div>&nbsp; &nbsp; October <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; <span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span></div><div><span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span></div><div><span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span></div><div><span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span> <span style={{color: '#b5cea8'}}>30</span> <span style={{color: '#b5cea8'}}>31</span></div><br /><div>&nbsp; &nbsp;November <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style={{color: '#b5cea8'}}>1</span> &nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span> &nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span></div><div><span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span> <span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span></div><div><span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span> <span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span></div><div><span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span> <span style={{color: '#b5cea8'}}>30</span></div><br /><div>&nbsp; &nbsp;December <span style={{color: '#b5cea8'}}>2024</span></div><div>Mo Tu We Th Fr Sa Su</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style={{color: '#b5cea8'}}>1</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>2</span> &nbsp;<span style={{color: '#b5cea8'}}>3</span> &nbsp;<span style={{color: '#b5cea8'}}>4</span> &nbsp;<span style={{color: '#b5cea8'}}>5</span> &nbsp;<span style={{color: '#b5cea8'}}>6</span> &nbsp;<span style={{color: '#b5cea8'}}>7</span> &nbsp;<span style={{color: '#b5cea8'}}>8</span></div><div>&nbsp;<span style={{color: '#b5cea8'}}>9</span> <span style={{color: '#b5cea8'}}>10</span> <span style={{color: '#b5cea8'}}>11</span> <span style={{color: '#b5cea8'}}>12</span> <span style={{color: '#b5cea8'}}>13</span> <span style={{color: '#b5cea8'}}>14</span> <span style={{color: '#b5cea8'}}>15</span></div><div><span style={{color: '#b5cea8'}}>16</span> <span style={{color: '#b5cea8'}}>17</span> <span style={{color: '#b5cea8'}}>18</span> <span style={{color: '#b5cea8'}}>19</span> <span style={{color: '#b5cea8'}}>20</span> <span style={{color: '#b5cea8'}}>21</span> <span style={{color: '#b5cea8'}}>22</span></div><div><span style={{color: '#b5cea8'}}>23</span> <span style={{color: '#b5cea8'}}>24</span> <span style={{color: '#b5cea8'}}>25</span> <span style={{color: '#b5cea8'}}>26</span> <span style={{color: '#b5cea8'}}>27</span> <span style={{color: '#b5cea8'}}>28</span> <span style={{color: '#b5cea8'}}>29</span></div><div><span style={{color: '#b5cea8'}}>30</span> <span style={{color: '#b5cea8'}}>31</span></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></pre>
        </div>
        <div className='bg-gray-900 text-white m-4'>
          <center><h1 className='text-sky-400 font-black text-2xl m-2 p-2'>4. Python Month Calender With Birthday Point</h1></center>
            <pre style={{background: 'rgb(30, 30, 30)', borderBottomColor: 'initial', borderBottomStyle: 'initial', borderImage: 'initial', borderLeftColor: 'initial', borderLeftStyle: 'initial', borderRadius: '10px', borderRightColor: 'initial', borderRightStyle: 'initial', borderTopColor: 'rgb(221, 221, 221)', borderTopStyle: 'solid', borderWidth: '5px 0px 0px', fontStretch: 'inherit', fontVariantEastAsian: 'inherit', fontVariantNumeric: 'inherit', lineHeight: 'inherit', marginBottom: '1.5em', marginTop: '0px', overflowWrap: 'normal', overflow: 'auto', padding: '12px', verticalAlign: 'baseline'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{lineHeight: '19px'}}><div style={{backgroundColor: '#1f1f1f', lineHeight: '19px'}}><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><div style={{lineHeight: '19px'}}><div><span style={{color: '#c586c0'}}>import</span> <span style={{color: '#4ec9b0'}}>calendar</span></div><br /><div><span style={{color: '#6a9955'}}># Prompt the user to enter a year, month, and date</span></div><div><span style={{color: '#9cdcfe'}}>year</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#4ec9b0'}}>int</span>(<span style={{color: '#dcdcaa'}}>input</span>(<span style={{color: '#ce9178'}}>"Enter the year you want to view the calendar for: "</span>))</div><div><span style={{color: '#9cdcfe'}}>month</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#4ec9b0'}}>int</span>(<span style={{color: '#dcdcaa'}}>input</span>(<span style={{color: '#ce9178'}}>"Enter the month of your birthday: "</span>))</div><div><span style={{color: '#9cdcfe'}}>date</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#4ec9b0'}}>int</span>(<span style={{color: '#dcdcaa'}}>input</span>(<span style={{color: '#ce9178'}}>"Enter the date of your birthday: "</span>))</div><br /><div><span style={{color: '#6a9955'}}># Display the calendar for the entered year and month</span></div><div><span style={{color: '#9cdcfe'}}>cal</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#4ec9b0'}}>calendar</span>.<span style={{color: '#dcdcaa'}}>month</span>(<span style={{color: '#9cdcfe'}}>year</span>, <span style={{color: '#9cdcfe'}}>month</span>)</div><br /><div><span style={{color: '#6a9955'}}># Replace the birthdate (entered date) with a heart symbol (❤️)</span></div><div><span style={{color: '#9cdcfe'}}>cal_with_heart</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#9cdcfe'}}>cal</span>.<span style={{color: '#dcdcaa'}}>replace</span>(<span style={{color: '#569cd6'}}>f</span><span style={{color: '#ce9178'}}>"</span><span style={{color: '#569cd6'}}>{"{"}</span><span style={{color: '#9cdcfe'}}>date</span><span style={{color: '#569cd6'}}>:3d{"}"}</span><span style={{color: '#ce9178'}}>"</span>, <span style={{color: '#ce9178'}}>" ❤️"</span>)</div><br /><div><span style={{color: '#dcdcaa'}}>print</span>(<span style={{color: '#569cd6'}}>f</span><span style={{color: '#ce9178'}}>"Calendar for </span><span style={{color: '#569cd6'}}>{"{"}</span><span style={{color: '#4ec9b0'}}>calendar</span>.<span style={{color: '#9cdcfe'}}>month_name</span>[<span style={{color: '#9cdcfe'}}>month</span>]<span style={{color: '#569cd6'}}>{"}"}</span><span style={{color: '#ce9178'}}> </span><span style={{color: '#569cd6'}}>{"{"}</span><span style={{color: '#9cdcfe'}}>year</span><span style={{color: '#569cd6'}}>{"}"}</span><span style={{color: '#ce9178'}}>:"</span>)</div><div><span style={{color: '#dcdcaa'}}>print</span>(<span style={{color: '#9cdcfe'}}>cal_with_heart</span>)</div></div></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><br /></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}>// Output</div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><br /></div><div><span style={{color: '#cccccc', fontFamily: 'Consolas, Courier New, monospace'}}><span style={{fontSize: '14px'}}>Enter the year you want to view the calendar for: 2024{"\n"}Enter the month of your birthday: 12{"\n"}Enter the date of your birthday: 6{"\n"}Calendar for December 2024:{"\n"}{"   "}December 2024{"\n"}Mo Tu We Th Fr Sa Su{"\n"}{"                   "}1{"\n"} 2{"  "}3{"  "}4{"  "}5 ❤️ 7{"  "}8{"\n"} 9 10 11 12 13 14 15{"\n"}16 17 18 19 20 21 22{"\n"}23 24 25 26 27 28 29{"\n"}30 31{"\n"}</span></span></div><div style={{color: '#cccccc', fontFamily: 'Consolas, "Courier New", monospace', fontSize: '14px'}}><br /></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></pre>
        </div>
    </Layout>
  )
}
