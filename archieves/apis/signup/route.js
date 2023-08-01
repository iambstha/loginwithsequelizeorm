import { NextResponse } from 'next/server';
import User from '@/archieves/models/User';

export async function POST(req, res) {

    const formData = await req.formData();
    const username = formData.get('username')
    const hashedPassword = formData.get('password')

    try {
        const userExists = await User.findOne({
            where: {
                username: username
            }
        })
        if (!userExists) {
            await User.create({ username, hashedPassword })
            console.log("Succesfully created new user.")
            return NextResponse.json("Succesfully created new user.")
        }
        else {
            console.log("User already exists.")
            return NextResponse.json("User already exists.")
        }
    } catch (err) {
        return NextResponse.json("Error uploading user.")
    }
}

export async function GET() {
    const data = await User.findAll()
    console.log(data)
    return NextResponse.json(data)
}
