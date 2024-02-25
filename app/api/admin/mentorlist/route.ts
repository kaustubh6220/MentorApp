// Import necessary modules and functions
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import Mentor from "@/lib/database/models/mentor.module";

// Establish database connection
connectToDatabase();

// Define GET request handler
export async function GET(request: NextRequest) {
    try {
        // Assuming you want to get all mentors from the "Mentor" model
        const mentors = await Mentor.find({});
        console.log('Mentors:', mentors); // Log the mentors


        // Respond with mentor data
        return NextResponse.json({
            message: "Mentors Found",
            data: mentors,
        });
    } catch (error: any) {
        // Handle errors and respond with an error message
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
