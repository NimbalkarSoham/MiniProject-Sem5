import Product from "@models/product";
import { connectToDb } from "@utils/database";

export const POST = async (req) => {
    const { userId, name, description, price, image } = await req.json();

    try {
        await connectToDb();
        const newProduct = new Product({
            creator: userId,
            name,
            description,
            price,
            image
        })

        await newProduct.save();
        return new Response(JSON.stringify(newProduct), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new product..", {status:500})
    }
}