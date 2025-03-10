import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.js';
import { useState } from 'react';
import ShowDetails from './Components/ShowDetails.js';

function App() {

  const [amt, setAmt] = useState(3000000);
  const [down, setDown] = useState(600000);
  const [loanAmt, setLoanAmt] = useState(amt-down);
  const [interest, setInterest] = useState(5);
  const [tenure, setTenure] = useState(20);

  return (
    <div >
      <h2 style={{backgroundColor:"rgb(141, 203, 248)",display:"flex", padding:"30px 0", alignItems:"center", justifyContent:"center"}}>Home Loan Calculator</h2>
      <div className="App" style={{display:"flex", alignItems:"center"}}>
        <Form amt={amt} setAmt={setAmt} down={down} setDown={setDown} loanAmt={loanAmt} setLoanAmt={setLoanAmt} interest={interest} setInterest={setInterest} tenure={tenure} setTenure={setTenure} />
        <ShowDetails amt={amt} setAmt={setAmt} down={down} setDown={setDown} loanAmt={loanAmt} setLoanAmt={setLoanAmt} interest={interest} setInterest={setInterest} tenure={tenure} setTenure={setTenure} />
    </div>
    </div>
  );
}

export default App;
