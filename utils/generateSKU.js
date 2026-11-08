import Counter from "@/models/Counter"

export async function generateSKU(name) {

    const counter = await Counter.findByIdAndUpdate(
        "product_sku",
        { $inc: { count: 1 } },
        {
            returnDocument: 'after',
            upsert: true,
        }
    )
    
    const skuNumber = String(counter.count).padStart(5, "0");
    return `FUR-${name.toUpperCase().slice(0, 3)}-${skuNumber}`
}