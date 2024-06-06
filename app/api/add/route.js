

import Product from "@/models/Product";
import { NextResponse } from "next/server";


export const dynamic = 'force-dynamic';

export const config = {
  api: {
    bodyParser: false
  }
};

export async function POST(req) {
  try {


    const body = await req.json();

    const toDb = {}
    const tally = body.data.fields
  

    tally.forEach(obj => {
  
  
        if(obj.type=="MULTIPLE_CHOICE" || obj.type=="MULTI_SELECT"){
  

          function multipleQ(elem){
  
            for (var i = 0; i < obj.value.length; i++) {
              if(elem.id==obj.value[i]){
                return true
         
              }
            }
       
          }      
          toDb[obj.label] = obj.options.filter(multipleQ).map(item=> item.text)
  
        }
        else {
          toDb[obj.label] = obj.value;
        }

    });

  console.log(toDb)
 await Product.create(toDb)

     
   
    return NextResponse.json({tally},
       { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


