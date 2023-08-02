import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
const bcrypt = require('bcrypt')

export async function POST(req, res) {
    const data = await req.json()
    const { username, password } = data

    try {
        const userExists = await User.findOne({
            where: {
                username: username,
            }
        })

        if (userExists) {
            const state = await User.findOne({
                where: {
                    username: username
                }
            }).then(data => {
                const hash = data.password
                return hash
            }).then((hash) => {
                const pwd = bcrypt.compareSync(password, hash)
                return pwd
            }).catch(err => {
                console.log(err)
            })

            if (state) {
                return NextResponse.json({ message: "User is succesfully logged in." })
            } else {
                return NextResponse.json({ message: "Wrong Password." })
            }
        }
        else {
            console.log("User does not exists.")
            return NextResponse.json({ message: "User does not exists." })
        }
    } catch (error) {
        console.log("Error logging in the user.")
        return NextResponse.json({ error: "Error logging in the user." })
    }
}

export async function GET(req, res) {
    const data = await User.findAll()

    return NextResponse.json(data)
}