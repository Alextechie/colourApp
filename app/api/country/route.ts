import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function getData() {
    try{
        const getUser = await prisma.user.findMany();
        return NextResponse.json({getUser, message: 'Found users in the database'})
    }catch(err){
        return NextResponse.json({
            message: 'Internal server error'
        })
    }
};