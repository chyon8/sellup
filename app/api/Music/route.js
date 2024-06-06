import Music from "@/models/Music";
import { NextResponse } from "next/server";


export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {

    const page = req.nextUrl.searchParams.get('page') || 1;
 


   // const currentPage = parseInt(page) || 1;
    const limit = 10;
    const totalCount = await Music.countDocuments();
    const totalPages = Math.ceil(parseFloat(totalCount/limit))
   


    const music = await Music.find().sort({ createdAt: 'desc' })
      .skip((page - 1) * limit)
      .limit(limit);

   
    return NextResponse.json({ music,
      page,
      totalPages,
       totalCount},
       { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

