const userModel = require("../Database/User")
const express = require("express")
const route = express.Router();
const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken")
const SECRET = require("../Constant/index")

let jsonParser = bodyParser.json()

async function createUser(req, res) {
    let userBody = req.body.postbody
    console.log(userBody)

    let existingUser = await userModel.findOne({
        email: userBody.email
    })
    console.log(existingUser)
    if (existingUser) {
        return res.status(500).send({
            message: "Bad Request User already exists"
        })
    }
    let data = await userModel.create(userBody)
    console.log(data)
    return res.status(200).send({
        data,
    })
}

async function addtoSubscribe(req, res) {
    let userBody = req.body.postbody

    let existingUser = await userModel.findOne({
        email: userBody.email
    })
    existingUser.subscribed.push(userBody.Item)

    await existingUser.save()
    return res.status(404).send({
        existingUser,
    })
}
async function loginUser ( req,res ){
    let userbody = req.body.postbody
    let { email,password } = userbody 
    let existingUser = await userModel.findOne({
        email:email
    },{
        password: 1,
        _id: 1,
        email: 1,
        name: 1,
        subscribed:1
    })

    if(existingUser){
        if(existingUser.password == password){
        let encrypted_Token = jwt.sign({
            id:existingUser._id,
            email:existingUser.email,
            name:existingUser.name,
            subscribed:existingUser.subscribed
        },SECRET)
        return res.send({
            data:{
                token:encrypted_Token
                
            },
           
        })
        }else{
            error:"Password Does not match"
        }

       
    }else{
        return res.status(404).send({
            error:"User was not found "
        })
    }
}
async function getLoggedinUser ( req,res ){
    
    let {token} = req.body
    if(token){
        try {
            console.log(token)
            let data = jwt.verify(token,SECRET)
            console.log(data)
            return res.status(200).send({
                data,
            })

        } catch (error) {
            return res.status(404).send({
                error:"token not Provided"
            })
        }
    }
}

async function  removeSubscribedItem ( req,res ){
    let { id,item } = req.body
    console.log(id,item)
    try {
        let user = await userModel.findById(id)

    let updatedUser = user.subscribed.filter((ele)=>ele != item)
    user.subscribed = updatedUser

    await user.save()
    return res.status(200).send({
        data:user
    })
    } catch (error) {
        return res.status(404).send({
            error:"not able to delete data"
        })
    }
}
route.post('/posts', jsonParser, createUser)
route.post('/subscribe', jsonParser, addtoSubscribe)
route.post('/login', jsonParser, loginUser)
route.post('/loogedinuser',jsonParser,getLoggedinUser)
route.post('/removetowatchlist',jsonParser,removeSubscribedItem)
module.exports = route;
// {
//     "userBody":{
//         "name":"Madan",
//         "email":"Madan@gmailcom",
//         "password":"Madan",
//         "subscribed":[]
//     }
// }