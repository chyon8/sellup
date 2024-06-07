import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {

    const page = req.nextUrl.searchParams.get('page') || 1;
    const limit = 10;
    const totalCount = await Product.countDocuments();
    const totalPages = Math.ceil(parseFloat(totalCount/limit))
   


    const product = await Product.find().sort({ createdAt: 'desc' })
    .populate('user')
      .skip((page - 1) * limit)
      .limit(limit);

   
    return NextResponse.json({ product,
      page,
      totalPages,
       totalCount},
       { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

