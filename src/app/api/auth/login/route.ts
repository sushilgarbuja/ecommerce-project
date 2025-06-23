import jwt from 'jsonwebtoken';
import { NextRequest,NextResponse} from "next/server";
import { UserModels } from "../../../../../models/user";
import { connectToDb } from "../../../../../database/dbConfig";
import bcrypt from "bcryptjs";

export async function POST (request:NextRequest){
    connectToDb()
    try{
        //input
        const {email,password} = await request.json()

        //check validate
        if(!email || !password){
            return NextResponse.json({error:"All fields are required"},{status:400})
        }
        //find user in db
        const user = await UserModels.findOne({email})
        if(!user){
            return NextResponse.json({error:"User not found"},{status:404})
        }
        //compare password
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return NextResponse.json({error:"Invalid credentials"},{status:401})
        }
        //create token
        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET!,{expiresIn:"1d"})

        //return user with detail
        return NextResponse.json({message:"User logged in successfully",user:{
            id:user._id,
            name:user.name,
            password:user.password,
            role:user.role,
            address:user.address
        }
        ,token
    })
    }catch(error){
        console.log(error);
        return NextResponse.json({error:"Something went wrong"},{status:500})
    }
}