// pages/student/[empid].ts

// Import necessary modules
import { connectToDatabase } from '@/lib/database';
import Profile from '@/lib/database/models/profile.model';
import { NextRequest, NextResponse } from 'next/server';

// Establish database connection
connectToDatabase();

// Define GET request handler
export async function GET(request:NextRequest) {
  // Use id directly
  // const empid = "MIT001";
  try {
    // Assuming you want to get students whose mentor is the specified empid
    const students = await Profile.find({});

    // Respond with student data
    return NextResponse.json({
      message: `Students `,
      data: students,
    });
  } catch (error: any) {
    // Handle errors and respond with an error message
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
