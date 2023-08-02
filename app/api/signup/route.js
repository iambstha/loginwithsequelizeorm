import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";

export async function POST(req, res) {
    const data = await req.json()
    const { username, password } = data

    try {
        const userExists = await User.findOne({
            where: {
                username: username
            }
        })
    
        if(!userExists){
            User.create({ username, password })
            .then(data => {
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
            console.log("User successfully created.")
            return NextResponse.json({message : "User successfully created."})
        }
        else{
            console.log("User already exists.")
            return NextResponse.json({message : "User already exists."})
        }
    } catch (error) {
        console.log("Error creating user.")
        return NextResponse.json({error : "Error creating user."})
    }
}

export async function GET(req,res){
    const data = await User.findAll()

    return NextResponse.json(data)
}