import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
const prisma = new PrismaClient()

export async function registerUser() {
    try {
        const addData = await prisma.user.create({
            data: {
                username: 'Alex',
                email: 'alex@gmail.com',
                country: 'KENYA',
                password: '41484877',
                createdAt: new Date()
            }
        })
        return NextResponse.json({
            addData,
            message: 'User added successfully'
        })
    }catch(err){
        return NextResponse.json({
            mesage:'Error adding the data'
        })
    }
};




