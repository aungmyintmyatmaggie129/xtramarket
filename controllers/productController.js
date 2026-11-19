const Product = require('../model/product');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');

const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: 'xtramarket/products', // Optional: specify a folder in Cloudinary
                resource_type: 'image', // Specify the resource type as image
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        streamifier.createReadStream(buffer).pipe(uploadStream);
    });
};

const productController = {
    createProduct: async (req, res) => {
        let uploadImage;
        try {

            const { productName, price, description, rating, brand, SKU, status, tags, category, discount } = req.body;
            if (!req.file) {
                return res.status(400).json({ message: 'Product image is required' });
            }

            uploadImage = await uploadToCloudinary(req.file.buffer);

            // Implementation for creating a new product
            const product = new Product({
                productName, price, description, rating, brand, SKU, status, tags, category, discount, image: {
                    url: uploadImage.secure_url,
                    public_id: uploadImage.public_id
                }
            });
            const savedProduct = await product.save();
            res.status(201).json({
                success: true,
                message: 'Product created successfully',
                product: savedProduct
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });

        }
    },
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json({
                success: true,
                message: 'Products fetched successfully',
                products: products
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error fetching products',
                error: error.message
            });
        }
    },
    getProductById: async (req, res) => {
        try {
            const productId = req.params.id;
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json({
                success: true,
                message: 'Product fetched successfully',
                product: product
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error fetching product',
                error: error.message
            });
        }
    }
}

module.exports = productController;