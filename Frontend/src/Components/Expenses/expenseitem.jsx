import Expenseshow from "./expenseshow";


const Expenseitem=({givenitems,ondeleteitem})=>{
  return (
    <div className="item-container">
      {givenitems.map((item)=>( <Expenseshow some1={item.title}   some3= {item.Date} some2={item.amount} some5={item.description}  ondeleteitem={ondeleteitem}  ></Expenseshow>))}

    </div>
  )
}
export default  Expenseitem;