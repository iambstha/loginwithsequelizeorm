import { NextResponse } from 'next/server';
import User from '@/models/User';

export async function POST(req, res) {

    const formData = await req.formData(); 
    const username = formData.get('username')
    const hashedPassword = formData.get('password')

    try {
        await User.create({username, hashedPassword})
        console.log("Succesfully created new user.")
    } catch (err) {
        console.log("Error uploading user data")
    }

    return NextResponse.json("Succesfully uploaded user.")
}

// export async function GET() {
//     const data = await User.findAll()
//     console.log(data)
//     return NextResponse.json(data)
// }
