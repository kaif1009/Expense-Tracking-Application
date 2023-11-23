import Incomeshow from "./incomeshow";


const Incomeitem=({givenitems,ondeleteitem})=>{
  return (
    <div className="item-container">
      {givenitems.map((item)=>( <Incomeshow some1={item.title}   some3= {item.Date} some2={item.amount} some5={item.description}  ondeleteitem={ondeleteitem}  ></Incomeshow>))}

    </div>
  )
}
export default  Incomeitem;