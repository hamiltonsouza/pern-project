import { sql } from "../config/db.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;
        
        console.log("Fetched products: ", products)
        res.status(200).json({ success:true, data: products });
    } catch (error) {
        console.log("Error getting products.", error);
        res.status(500).json({success: false, message: "Internal Server Error."})
    };
};

export const createProduct = async (req, res) => {
    const {name,price,image} = req.body;
    if (!name || !price || !image) {
        return res.status(400).json({success:false, message:"All fields are required."})
    }

    try {
        const newProduct = await sql`
            INSERT INTO products (name,price,image)
            VALUES (${name},${price},${image})
            RETURNING *
        `

        console.log("New product added: ", newProduct);

        res.status(201).json({ success: true, data: newProduct[0] });

    } catch (error) {
        console.log("Error creating product.", error);
        res.status(500).json({ success: false, message: "Internal Server Error." })
    }
};

export const getProduct = async (req, res) => {
    const {id} = req.params

    try {
        const product = await sql`
            SELECT * FROM products WHERE ID=${id}    
        `

        res.status(200).json({ success: true, data: product[0]});

    } catch (error) {
        console.log("Error getting product.", error);
        res.status(500).json({ success:false, message: "Internal Server Error."})
    }
};

export const updateProduct = async (req, res) => {};
export const deleteProduct = async (req, res) => {};
