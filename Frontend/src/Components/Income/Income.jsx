 import styled from "styled-components"; 
 import { InnerLayout } from "../layots/innerlayout";
import Form from "./form";
import Incomeitem from "./incomeitem";
import { rupee } from "../sidebar/icons";
import { useState } from "react";

  const Income = () => {
  const [givenitem,setgivenitem]=useState([]);
const handleclick=(something)=>{
  console.log(something);
  const newgivenitems=[...givenitem, something]
  setgivenitem(newgivenitems);
}
const handledeleteitem=(itemname)=>{
  const newitem=givenitem.filter((item)=>item.title 
  !== itemname);
  setgivenitem(newitem);

}




    return (
      <Incomestyled>
         <InnerLayout>
      <h1>Income</h1>
      
        </InnerLayout>
        <div className="heading">
          <h2>Total Incomes: {rupee}</h2>
        </div>
        <div className="income-container">
        
          <div className="form">
            <Form onNewItem={handleclick}></Form>
          </div>
          <div className="incomes">
             <Incomeitem givenitems={givenitem} ondeleteitem={handledeleteitem} />
          </div>


        </div>
      </Incomestyled>
    )
  }
  const Incomestyled=styled.div`
.form{
  width:200px;
  
}
.income-container{
  display: flex;
    gap: 11em;
    margin-top:-3px;
}
}
.incomes{
  width: 706px;
  margin-top: 55px;
}
.heading{
  border: 2px solid black;
  border-radius: 7px;
  height: 68px;
  text-align: center;
  padding-right:102px;
  padding-top: 14px;
  i{
    font-size:24px;
  color:green;
  }
  
}



  `;
  export default Income;

