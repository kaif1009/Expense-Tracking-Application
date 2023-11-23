import styled from "styled-components"; 
import { InnerLayout } from "../layots/innerlayout";
import Form from "./form";
import Expenseitem from "./expenseitem";
import { rupee } from "../sidebar/icons";
  import { useState } from "react";

 const Expense = () => {
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
     <Expensestyled>
        <InnerLayout>
     <h1>Expense</h1>
     
       </InnerLayout>
       <div className="heading">
         <h2>Total Expenses: {rupee}</h2>
       </div>
       <div className="expense-container">
       
         <div className="form">
           <Form onNewItem={handleclick}></Form>
         </div>
         <div className="expenses">
            <Expenseitem givenitems={givenitem} ondeleteitem={handledeleteitem}/>
         </div>


       </div>
     </Expensestyled>
   )
 }
 const Expensestyled=styled.div`
.form{
 width:200px;
 
}
.expense-container{
 display: flex;
   gap: 11em;
   margin-top:-3px;
}
}
.expenses{
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
 color:red;
 }
 
}



 `;
 export default Expense;