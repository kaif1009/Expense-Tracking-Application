import { dashboard,expenses,trend,transactions } from "../utils/Icons"
//AUTOMATICALLY IMPORT THE OTHER ICONS
export const Items=[
    {
        id:1,
        title:'Dashboard',
        icon:dashboard,
        link:"/dashboard",
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
]