import Order from "@models/order";
import { connectToDb } from "@utils/database";

export const GET=async(request,{params})=>{
    try{
        await connectToDb() 
         
        const orders = await Order.find({customer:params.id}).populate('owner').populate('product');
        //console.log('Found products:', products);
        return new Response(JSON.stringify(orders),{
            status:200
        })
    }
    catch(error){
        console.error('Error:', error);
        return new Response("Failed to fetch all orders",{status:500})
    }
}