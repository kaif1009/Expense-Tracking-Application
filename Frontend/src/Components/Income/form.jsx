import { useState } from "react"

import styled from "styled-components";
 
 function Form({onNewItem}){
    const [inputState,setinputState]=useState({ //hook
        title:'',
        amount:'',
        Date:'',
        category:'',
        description:'',
    })
    const {title,amount,date,category,description }=inputState;
    const handleInput=name=>event=>{
        setinputState({...inputState, [name]:event.target.value})
        
    }
    const handleonclick=()=>{
        onNewItem(inputState);
        setinputState("");
    }
  
   return (
     <FormStyled>

        <div className="input-control">
        <input type="text"
        value={title}
        name={'title'}
        placeholder="Title"
          onChange={handleInput('title')}
/>
        </div>
        <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>



        <div className="input-control">
        <input type="date"
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={handleInput('Date')}
                />
                </div>
                     <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>                 
                    <option value="investments">Investiments</option>        
                    <option value="bank">Bank Transfer</option> 
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="25" rows="4" onChange={handleInput('description')}></textarea>
            </div>

            <div className="submit-btn">
            <button type="button" class= "btn btn-primary" onClick={handleonclick}> + Add Income</button>

             </div>
     </FormStyled>



            
   )
 }
 const FormStyled =styled.form`

 display: flex;
 flex-direction: column;
 gap: 0.8rem;
 margin-top:40px;
 input, textarea, select{
     font-family: inherit;
     font-size: inherit;
     outline: none;
     border:  none;
     padding: .5rem 1rem;
     border-radius: 5px;
     border: 2px solid grey;
     background: transparent;
     resize: none;
     box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
     color: rgba(34, 34, 96, 0.9);
     
     }
 }
 .input-control{
     input{
         width: 183px;
         height:30px;
     }
 }

 .selects{
     display: flex;
     justify-content: flex-end;
     select{
         color: rgba(34, 34, 96, 0.4);
         
         }
     }
 }

 #abc{
    width:10rem;
    height:5rem;
    background-color:#FF0000;
    color:rgba(255,220,222);
    border:solid 3px #0000;
    border-radius:2rem;
    box-shadow:1px 2px  2px #000;
 } 

 #abc:hover{
    background-color:#008000;
 }
 `;
 
 export default Form;
 