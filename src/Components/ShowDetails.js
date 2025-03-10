import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

function ShowDetails({amt, setAmt, down, setDown, loanAmt, setLoanAmt, interest, setInterest, tenure, setTenure}) {
    const monthlyRate = interest / 12 / 100; 
    const totalMonths = tenure * 12;
    const emi =
        monthlyRate > 0
        ? (loanAmt * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        : loanAmt / totalMonths; 

  const totalInterest = emi * totalMonths - loanAmt; 
    const data = [
        { name: "Principle", value: loanAmt, color: "rgb(253, 144, 168)" },
        { name: "Interest", value: totalInterest, color: "rgb(141, 203, 248)" },
      ];
    return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px", justifyContent:"center"}}>
        <h3>Monthly EMI : {emi.toFixed(2).toLocaleString()}</h3>
        <h3>Home Loan Breakdown</h3>
        <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
        {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color}/>
            ))}
        </Pie>
            <Tooltip formatter={(value) => `₹ ${value.toFixed(2).toLocaleString()}`} />
          <Legend />
        </PieChart>
      </div>
  )
}

export default ShowDetails