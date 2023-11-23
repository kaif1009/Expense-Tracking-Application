import styled from "styled-components";
import { calender, comment, rupee } from '../sidebar/icons';
export const Expenseshow = ({some1,some2,some3,some4,some5,ondeleteitem}) => {
  return (
    <Incomento>
 <div className="content">
     
     <h5>{some1}</h5>
         <div className='inner-content'>
           <div className='text'>
               <p className='p'>{rupee} {some2}</p>
               <p> {calender} {some3}</p>
               <p>{comment}  {some5}</p>
           </div>
           <div className="btn-cont">
           <button type="button" class="btn btn-danger" onClick={()=>ondeleteitem(some1)}>Remove</button>


           </div>
         </div>
    </div>





    </Incomento>
  )
}
const Incomento=styled.div`
background: #FCF6F9;
border: 2px solid #fff;
border-radius:20px;
padding:1rem;
width:56vw;
height:85px;
margin-left:-54px;
margin-top:4px;


  .inner-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        display: flex;
        align-items: center;
        gap: 9.5rem;
        margin-top:15px;
        p{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--primary-color);
            opacity: 0.8;
        }
    }
}
.content {
  margin-top:-13px;
  margin-left:80px;
}
.btn-cont{
  margin-bottom:17px;
}

.Heading{
  text-align:center;

}
h5{
  font-size:1.5rem;

}





`;
export default Expenseshow;