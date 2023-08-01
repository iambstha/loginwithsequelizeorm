import { NextResponse } from 'next/server';
import User from '@/archieves/models/User';
const bcrypt = require('bcrypt')

export async function POST(req, res) {
    const formData = await req.formData();
    const username = formData.get('username')
    const password = formData.get('password')

    const result = await User.findOne({
        where: {
            username: username
        }
    }).then((data) => {
        const res = bcrypt.compareSync(password,data.hashedPassword)
        return res
    })
    .catch(err => {console.log(err)})


    console.log(result)
    if(result){
        return NextResponse.json({ message: true })
    }
    else{
        return NextResponse.json({ message: false })
    }
    
}

export async function GET() {
    const data = await User.findAll()
    console.log(data)
    return NextResponse.json(data)
}
