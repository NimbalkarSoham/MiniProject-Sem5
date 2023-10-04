import Product from "@models/product";
import { connectToDb } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDb()

        const product = await Product.findById(params.id)
        if (!product) return new Response("Product Not Found", { status: 404 });

        return new Response(JSON.stringify(product), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}