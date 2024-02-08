const mongoose=require("mongoose")
const patientschema=mongoose.Schema(
    {
        patientname:String,
        patientSymptom:String,
        patientPhn:String,
        patientAdrs:String,
        patientStatus:String

    }
)
module.exports=mongoose.model("covid patients",patientschema)