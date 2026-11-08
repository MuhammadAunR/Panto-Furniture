import { connectDB } from "@/libs/mongodb";
import Product from "@/models/Product";
import { generateSKU } from "@/utils/generateSKU";
import { generateSlug } from "@/utils/generateSlug";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB()
        const data = await Product.find({})

        return NextResponse.json(
            { message: 'Get request successful', data },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to get data', error: error.message },
            { status: 400 }
        )
    }
}

export async function POST(req) {
    try {
        await connectDB()
        const body = await req.json()

        const SKU = await generateSKU(body.name)
        console.log(body)

        const product = await Product.create({
            name: body.name,
            slug: generateSlug(body.name),
            sku: SKU,
            category: body.category,
            defaultPrice: body.defaultPrice,
            discount: body.discount,
            description: body.description
        })
        return NextResponse.json(
            { message: 'Product created', product },
            { status: 201 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to create product', error: error.message },
            { status: 400 }
        )
    }
}

export async function DELETE(req) {
    try {
        await connectDB()
        const { _id } = await req.json()
        const product = await Product.findByIdAndDelete(_id)

        if (!product) {
            return NextResponse.json(
                { message: 'Product not found', _id },
                { status: 404 }
            )
        }
        return NextResponse.json(
            { message: 'Product deleted successful' },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to delete product', error: error.message },
            { status: 400 }
        )
    }
}


export async function PUT(req) {
    try {
        await connectDB()

        const { _id, ...updates } = await req.json()

        const updatedProduct = await Product.findByIdAndUpdate(
            _id,
            { $set: updates },
            { 'returnDocument': "after", runValidators: true }
        )

        if (!updatedProduct) {
            return NextResponse.json(
                { message: 'Product not found', _id: body._id },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { message: 'Product updated', updatedProduct },
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to updated', error: error.message },
            { status: 400 }
        )
    }
}