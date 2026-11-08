import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    
    slug: {
        type: String,
        unique: true,
    },

    sku: {
        type: String,
        unique: true,
    },

    category: {
        type: String,
        required: true,
        default: null,
    },

    defaultPrice: {
        type: Number,
        required: true,
        trim: true,
    },

    discount: {
        type: Number,
        default: null,
    },

    description: {
        type: String,
        trim: true,
        required: false,
    },

}, { timestamps: true })

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)