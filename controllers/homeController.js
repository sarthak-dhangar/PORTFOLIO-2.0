import UserModel  from "../model/userModel.js";

const homeController=async(req,res)=>{
    try{
        res.render('index')
    }catch(error){
        console.log(error.messsage)
    }
}

//user contact controller
const ContactUserController=async(req,res)=>{
    try{
        const data=await UserModel({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            subject:req.body.mobile,
            message:req.body.message,
        })
        if(data){
            await data.save()
            console.log("user saved succsesfully")
        }
        res.render('index')
    }catch(error){
        console.log(error.message)
    }
}

export {homeController,ContactUserController}