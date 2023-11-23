import React from 'react'
import styled from 'styled-components'
import { Items } from '../../utils/Items'
import avatar from '../../image/avatar.jpg'
import { signout } from '../../utils/Icons'  

function Navigation({active,setActive}){
    return (
        <NavStyled>
            <div className="user-container">
                <img src={avatar} alt="img" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className='items'>
                {/* ACCESS THE ITEM */}
                {Items.map((item) =>{
                    return <li
                        key={item.id}
                        onClick={()=>setActive(item.id)}
                        //USING TERNARY OPERATOR CONDITION....
                        className={active ===item.id ? 'active':''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                    </li>
                })}

            </ul>
            <div className="bottom-navBar">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    
    )
    
}
const NavStyled=styled.nav`
padding: 1.5rem 1.5rem;
width: 374px;
height: 100%;
background: rgba(252, 246, 249, 0.78);
border: 3px solid #FFFFFF;
backdrop-filter: blur(4.5px);
border-radius: 32px;
display: flex;
flex-direction: column;
justify-content:space-between;
gap: 2rem;

.user-container{
    display :flex;
    align-items: center;
    gap: 1rem;
    height:95px;
    
}
img{
    height:85px;
    width:85px;
    border-radius:50%;
    object-fit:cover;
    // border:0.5px solid #FFFFFFFF;
    // padding:0.09rem;
    box-shadow:0px 1px 17px rgba(0,0,0,0.04);
    background:#fcf6f9;
    padding-top:0.25rem;
   }

h2{
    color:rgba(34,35,90,1);
}
p{
    color:rgba(34,36,94,0.7);
}
.items{
    flex:1;
    display:flex;
    
    flex-direction:column;

}
li{
    display:grid;
    grid-template-columns:35px auto;
    align-items:center;
    margin:.4rem 0;
    font-weight:600;
    cursor:pointer;
    transition:all 2s ease-in-out;
    padding-left:1rem;
    position:relative;

    i{
        color:rgba(34,34,94,0.7);
        font-size:1.4rem;
        transition:all 0.5s ease-in-out;
    }
   

}
.active{
    color: rgba(34, 34, 96, 1) !important;
    i{
        color: rgba(34, 34, 96, 1) !important;
    }
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: #222260;
        border-radius: 0 10px 10px 0;
    }
}


   
   

`;
export default Navigation