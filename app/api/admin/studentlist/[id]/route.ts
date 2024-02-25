// pages/student/[empid].ts

// Import necessary modules
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import Profile from '@/lib/database/models/profile.model';

// Establish database connection
connectToDatabase();

// Define GET request handler
export async function GET(request:NextRequest,{ params: { id } }: { params: { id: string } }) {
  // Use id directly
  const empid = id as String;
  try {
    // Assuming you want to get students whose mentor is the specified empid
    const students = await Profile.find({ mentor_id: empid });

    // Respond with student data
    return NextResponse.json({
      message: `Students for mentor with empid ${empid}`,
      data: students,
    });
  } catch (error: any) {
    // Handle errors and respond with an error message
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
