const Product = require('../model/Product');


exports.getAllProducts = async(req, res) =>{
    try{
        const products = await Product.find();
        res.jason(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleProduct = async(req, res) =>{
    try{
        const product = await Product.findOne({proId: req.params.id});
        if(!product)
            return res.status(404).json({msg : "Product not found"});
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.addNewProduct = async(req, res) =>{
    try{
        const product = await Product.findOne({proId: req.body.proId})
        if(!product){
            const addedProduct = await Product.create(req.body)
            res.json(addedProduct)
        }
        else{
            res.json({msg: 'Product already exists'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.updateProduct = async(req,res) =>{
    try{
        const product = req.body
        const fetchedProduct = await Product.findOne({proId: product.proId})
        if(fetchedProduct){
            await Product.updateOne(product)
                res.json(fetchedProduct)
        }
        else{
            res.json({msg: 'Product does not exist'})
        }       
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.deleteProduct= async(req,res)=>{
    try{
        const product = await Product.findOne({proId: req.params.id})
        if(product){
            await Product.deleteOne({proId: req.params.id})
            res.json(product)
        }
        else{
            res.json({msg: 'Product does not exist'})
        }
    }
    catch{
        res.status(500).json({msg:err.message})
    }
}