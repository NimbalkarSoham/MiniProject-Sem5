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
// only for verification
export const PATCH = async(request, { params }) => {
    //const{ verified } = await request.json();
     try {
        await connectToDb();
        console.log("helo");
        const product = await Product.findById(params.id);
        console.log(product);
        if(!product) return new Response("Product not found", {status: 404});

        product.isFeatured = true;

        await product.save();

        return new Response(JSON.stringify(product), {status: 200})
     } catch (error) {
        return new Response("Could not update prompt", {status:500})
     }
} 