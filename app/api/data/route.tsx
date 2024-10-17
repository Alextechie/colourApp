import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// should use the request type on request
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const {id, username, email, country, password } = body
    try {
        // check id user already exists
        const checkIfExists = await prisma.user.findUnique({
            where: {email: email, id: id},
            select: {email: true}
        });

        if (checkIfExists) {
            return NextResponse.json({
                message: "User already exists"
            })
        } else {
            const addUser = await prisma.user.create({
                data: {
                    id,
                    username,
                    email,
                    country,
                    password,
                    createdAt: new Date()
                }
            })
            return NextResponse.json({
                addUser,
                message: 'User added succesfully'
            })
        }
    } catch (err) {
        return NextResponse.json({
            message: 'Server error. User not added to the Db', err
        })
    }
};