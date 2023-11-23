
const IncomeSchema=require("../models/IncomeM")
exports.addIncome=async(req,res)=>{
    const {title,amount,category,description,date}=req.body
    //---------------
    const income=IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
    })
    try{
        //APPLY THE CONDITION FOR SHOWING SOME MESSAGE
        if(!title || !amount ||!category || !date){
            return res.status(404).json({message:'Hello sir :Something went wrong'})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(404).json({message:'What are you doing bro something went wrong :'})
        }
        await income.save()
         res.status(200).json({message:"Income Added"})
    }
    catch(error){
        res.status(500).json({message:'server error'})

    }
    console.log(income)
}
//  to retrieve income records from a collection named IncomeSchema
exports.getIncome=async(req,res)=>{
    try{
        //FROM ASCENDING ORDER
        
        const incomes=await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)

    }
    catch(error){
        res.status(500).json({message:'server Error'})
    }
}
exports.deleteIncome=async(req,res)=>{
    // get the id bc every item deleted by id
    const {id}=req.params;
    console.log(req.params);
    IncomeSchema.findByIdAndDelete(id)
         .then((income)=>{
            res.status(200).json({message:'Income deleted successfully'})
         })
         .catch((error)=>{
            res.status(500).json({message:'server Error'})
    })
}