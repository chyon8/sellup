import mongoose, { Schema } from "mongoose";
import connectDB from "@/lib/mongodb";

//mongoose.connect(process.env.MONGODB_URI);
//mongoose.Promise = global.Promise;

connectDB()

const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    thumbnail:{
      type:[String]
    },
    productImages:{
      type:[String]
    },

    title: {
      type: String,  
    },
    type:{
      type:[String],
    },
  
    stack: {
      type: String,
     
    },
    category: {
      type: [String],

    },
    description: {
      type: String,  
    },
    
    whysell: {
      type: String
    
    },
    revenue: {
      type: [String],

    },
    revenueDesc: {
      type: String,
      default: null
    },
    price: {
      type: [Number,null],
      default: null
     
    },
    minPrice: {
      type: [Number,null],
      default: null
    }, 
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
