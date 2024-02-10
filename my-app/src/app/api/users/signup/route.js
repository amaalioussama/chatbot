import connect from "../../../../utils/db";
import User from "../../../../models/schema";
import { NextResponse } from "next/server";

connect();

async function POST(request ,NextResponse) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);

        const newUser = new User({
            username,
            email,
            password,
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export default POST;
