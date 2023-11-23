import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
 import History from '../History/History';
import { InnerLayout} from '../../styles/Layout';
// import { dollar } from '../../utils/Icons';
// import Chart from '../Chart/Chart';

function Dashboard() {
     const {totalExpenses, totalIncome, totalBalance,getIncomes,getExpenses} = useGlobalContext()

     useEffect(() => {
         getIncomes()
         getExpenses()
     }, [])

    return (
        <DashboardStyled>
            <InnerLayout>

            <h1>All Transactions</h1>
            <div className="amount-container">
                  <div className="income-container">
                     <h2>Total Income</h2>
                     <p>
                          {totalIncome()}
                     </p>

                     
                     
                  </div>
                  <div className="expense-container">
                      <h2>Total Expenses</h2>
                      <p>
                        {totalExpenses()}
                      </p>
                    
                  </div>
                  <div className="balance-container">
                    <h2>Total Balance</h2>
                    <p>{totalBalance()}</p>

                  </div>
                  <div className="history">
                        <History></History>
                  </div>
            </div>



            
            
                

            </InnerLayout>
            
                
           
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
  /*  .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

               

       
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }*/
`;

export default Dashboard
