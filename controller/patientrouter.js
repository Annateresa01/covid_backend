const express=require("express")
const patientmodel=require("../model/patientmodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let covpatients=new patientmodel(data)
    let result=await covpatients.save()
    res.json(
        {
            status:"Success"
        }
    )

})

router.get("/view",async(req,res)=>{
    let data=await patientmodel.find()
    res.send(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await patientmodel.find(input)
    res.json(data)
})

module.exports=router
