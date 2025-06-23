import { NextRequest,NextResponse} from "next/server";
import { UserModels } from "../../../../../models/user";
import { connectToDb } from "../../../../../database/dbConfig";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request:NextRequest){
     connectToDb()
    try{
        //input 
        const {name,email,password,role} = await request.json()
        //validate
        if(!name || !email || !password || !role){
            return NextResponse.json({error:"All fields are required"},{status:400})
        }
        //check if user already exist
        const userExist = await UserModels.findOne({email})
        if(userExist){
            return NextResponse.json({error:"User already exist"},{status:409})
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        //create user
        const user = await UserModels.create({name,email,password:hashedPassword,role});
        //create token
        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET!,{expiresIn:"1d"})


        return NextResponse.json({message:"User created successfully",user:{
            id:user._id,
            name:user.name,
            password:user.password,
            role:user.role,
            address:user.address
        },
        token
    },{status:201}
    )
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"Something went wrong"},{status:500})
        
    }
}
