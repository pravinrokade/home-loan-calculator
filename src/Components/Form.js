import React from 'react'

function Form({amt, setAmt, down, setDown, loanAmt, setLoanAmt, interest, setInterest, tenure, setTenure}) {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"20px",marginTop: "30px"}}>
        <div style={{display:"flex", flexDirection:"column", width:"50vw", margin:"0 5%", fontWeight:"500"}}>
            <label style={{display:"flex", justifyContent:"start", fontWeight:"400"}} >Home Value</label>
            <span style={{display:"flex", justifyContent:"start", fontSize:"20px" }}>₹ {amt}</span>
            <input type="range" name="Home Value" id="HomeValue" min="1000000" max="5000000" step="200000" value={amt} onChange={(e)=>{
                const newAmt = Number(e.target.value);
                setAmt(newAmt);
                if(newAmt < down ){
                    setDown(newAmt);
                    setLoanAmt(0);
                }else if(loanAmt > newAmt){
                    setLoanAmt(amt);
                    setDown(0);
                }else{
                    setLoanAmt(newAmt - down);
                }
            }} />
            <div style={{display:"flex", justifyContent:"space-between", fontWeight:"200", fontSize:"12px" }}>
                <span>₹ 1000000</span>
                <span>₹ 5000000</span>
            </div>
        </div>

        <div style={{display:"flex", flexDirection:"column", width:"50vw", margin:"0 5%", fontWeight:"500"}}>
            <label style={{display:"flex", justifyContent:"start" , fontWeight:"400"}} >Down Payment</label>
            <span style={{display:"flex", justifyContent:"start", fontSize:"20px" }}>₹ {down}</span>
            <input type="range" name="Home Value" id="HomeValue" min="0" max={amt} step="200000" value={down} onChange={(e)=>{
                const newDown = Number(e.target.value);
                setDown(newDown);
                setLoanAmt(amt - newDown);
            }} />
            <div style={{display:"flex", justifyContent:"space-between", fontWeight:"200", fontSize:"12px"  }}>
                <span>₹ 0</span>
                <span>₹ {amt}</span>
            </div>
        </div>

        <div style={{display:"flex", flexDirection:"column", width:"50vw", margin:"0 5%", fontWeight:"500"}}>
            <label style={{display:"flex", justifyContent:"start", fontWeight:"400"}} >Loan Amount</label>
            <span style={{display:"flex", justifyContent:"start", fontSize:"20px" }}>₹ {loanAmt}</span>
            <input type="range" name="Home Value" id="HomeValue" min="0" max={amt} step="200000" value={loanAmt} onChange={(e)=>{
                const newLoanAmt = Number(e.target.value);
                setLoanAmt(newLoanAmt);
                setDown(amt - newLoanAmt);
            }} />
            <div style={{display:"flex", justifyContent:"space-between", fontWeight:"200", fontSize:"12px" }}>
                <span>₹ 0</span>
                <span>₹ {amt}</span>
            </div>
        </div>

        <div style={{display:"flex", flexDirection:"column", width:"50vw", margin:"0 5%", fontWeight:"500"}}>
            <label style={{display:"flex", justifyContent:"start", fontWeight:"400"}} >Interest Rate</label>
            <span style={{display:"flex", justifyContent:"start", fontSize:"20px" }}>{interest} %</span>
            <input type="range" name="Home Value" id="HomeValue" min="2" max="18" step="1" value={interest} onChange={(e)=>{
                const newInterest = Number(e.target.value);
                setInterest(newInterest);
            }} />
            <div style={{display:"flex", justifyContent:"space-between", fontWeight:"200", fontSize:"12px" }}>
                <span>0 %</span>
                <span>18 %</span>
            </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", width: "50vw", margin: "0 5%", fontWeight: "500", gap: "20px" }}>
        <label>Tenure</label>
        <select value={tenure} onChange={(e) => setTenure(Number(e.target.value))}>
          {[5, 10, 15, 20, 25, 30].map((year) => (
            <option key={year} value={year}>
              {year} Years
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Form