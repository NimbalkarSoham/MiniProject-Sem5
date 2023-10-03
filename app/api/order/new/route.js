import Order from "@models/order";
import { connectToDb } from "@utils/database";

export const POST = async (req) => {
    const { owner, customer, product, status, shippingAddress, paymentMethod, rate, numberOfDays, isPaid, paidAt, isProcessing } = await req.json();

    try {
        await connectToDb();
        const newOrder = new Order({
            creator: customer,
            owner, 
            customer, 
            product, 
            status, 
            shippingAddress, 
            paymentMethod, 
            rate, 
            numberOfDays, 
            isPaid, 
            paidAt, 
            isProcessing
        })

        await newOrder.save();
        return new Response(JSON.stringify(newOrder), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new product..", {status:500})
    }
}