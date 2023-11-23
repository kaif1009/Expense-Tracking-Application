//add the memory and state hook
import React, {useState} from 'react'
import styled from 'styled-components';
import bg from './image/bg.jpg'
import { MainLayout } from './styles/Layout'
// import Backframe from './Components/Backframe/Backframe'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard'
import Expenses from './Components/Expenses/Expenses'
import Income from './Components/Income/Income'
import { useGlobalContext } from './context/globalContext';
function App() {
  //CREATE THE STATE FOR ACTIVENESS ON ITEMS
  //START FROM THE DASHBOARD
  //import the global context
  const global=useGlobalContext();
  console.log(global)
  const [active,setActive]=useState(1)

  const display=()=>{
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
         return <Dashboard/>
      case 3:
        return <Income/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>

          }
  }
  

  return (
    <AppStyled bg={bg} className='App-style'>
     {/* <Backframe></Backframe> */}
      <MainLayout>
        <Navigation active={active} setActive={setActive}></Navigation>
        <main>
           {display()} 
         </main>
    

      </MainLayout>

    </AppStyled>

  )
}
const AppStyled = styled.div`
   height: 100vh;
   background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;



export default App
