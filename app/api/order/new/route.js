import Order from "@models/order";
import { connectToDb } from "@utils/database";

export const POST = async (req) => {
    console.log("route called");
    

    try {
        const body = await req.json();

        if (!body) {
            throw new Error("Invalid JSON data in the request body.");
        }

        const { owner, customer, product, shippingAddress, rate } = body;
        console.log(owner);
        await connectToDb();
        const newOrder = new Order({
            // creator: customer,
            owner, 
            customer, 
            product, 
            status:'OPEN', 
            shippingAddress,  
            rate
        });

        await newOrder.save();
        return new Response(JSON.stringify(newOrder), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new Order..:"+error, {status:500})
    }
}