import { connectToDb } from "@utils/database";
import Product from "@models/product";

export const GET = async(request) => {
    try {
        await connectToDb();

        const products = await Product.find({});

        if (!products) {
            return new Response("No products found", {status:404});
        }

        return new Response(JSON.stringify(products), {status:200})
    } catch (error) {
        return new Response("Failed to fetch products", {status:500})
    }
}
