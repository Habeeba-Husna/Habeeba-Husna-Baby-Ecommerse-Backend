import { getAllProductsService, getProductByIdService ,addProductionServices,updateProductService,deleteProductService} from "../service/productService.js";
import { STATUS } from "../utils/constants.js";
import CustomError from "../utils/customError.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

//add product
export const addProduct = asyncHandler(async (req, res) => {
  // const { name, ...rest } = req.body;
  let url
  if (req.file && req.file.path) {         //It checks if the image file uploaded
      url = req.file.path;   // to save the product data/image url.
  } else {
      return res.status(400).json({
          success: STATUS.ERROR,
          message: 'Image upload failed. Please include a valid image file.',
      });
  }

  const { name, description, category, price, quantity, isDelete } = req.body;
 // Get image path if file exists
 
  // const data = await addProductionServices({ name,url, ...rest });         //to save the product data -services
  
  const data = await addProductionServices({name,description,category,price,quantity,isDelete,url,});
  res.status(201).json({
    success: STATUS.SUCCESS,
    message: "Product added successfully.",
    data,
  });
});

//update Product
export const updateProduct=asyncHandler(async(req,res)=>{
  const {_id,url,...updateItems}=req.body
  // console.log(_id)
  if(!_id){
      throw new CustomError('Product ID is required", 400')
  }

  const existingProduct = await Product.findById(_id);
  if (!existingProduct) {
    throw new CustomError("Product not found", 404);
  }

  // Handle URL case
  if (url && !/^https?:\/\/[^\s]+$/.test(url)) {
    return res.status(400).json({ errors: ["The provided 'url' is not a valid URI."] });
  }

  // If no URL is provided, use the existing one
  if (!url) {
    updateItems.url = existingProduct.url; // Retain the existing URL
  }


  const updateProduct=await updateProductService(_id,updateItems)
  res.status(200).json({status:STATUS.SUCCESS,message:'Product updated successfully',updateProduct})
})

//delete Product
export const deleteProduct=asyncHandler(async(req,res)=>{
  // console.log("Request Params:", req.params);
  const { id } = req.params;

  if (!id) {
    throw new CustomError("Product ID is missing in request", 400);
  }

  const deletedProduct =await deleteProductService(id)
  res.json({status:STATUS.SUCCESS,message:'Deleted Product Succesfully',deletedProduct })
})

// Get all products
export const getAllProducts = asyncHandler(async (req, res) => {
  const { category, page = 1, limit = 10, search } = req.query;   //properties are extracted from req.query and assigned to variable


  const { products, pagination } = await getAllProductsService({                //to fetch the products, along with pagination details
    category,
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    search,
  });

  if (products.length === 0) {
    res.status(200).json({
      status: STATUS.SUCCESS,
      message: "No products found",
    });
  } else {
    res.status(200).json({
      status: STATUS.SUCCESS,
      products,
      pagination,
    });
  }
});

// Get single product
export const singleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const productOne = await getProductByIdService(id);

  if (!productOne) {
    throw new CustomError("Product not found", 404);
  }
  res.status(200).json({
    status: STATUS.SUCCESS,
    productOne,
  });
});






