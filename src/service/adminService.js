import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import CustomError from "../utils/customError.js";

//user Block

  export const userBlockService = async (id) => {
    const userDetails = await User.findById(id);
    if (!userDetails) {
      throw new CustomError("user not found", 400);
    }
    userDetails.isBlock = !userDetails.isBlock;
    await userDetails.save();
    return userDetails;
  };

  //get all user

export const getAllUserServices = async (limit, skip) => {
  const usersList = await User
    .find({ isAdmin: { $ne: true } })
    .skip(skip)
    .limit(limit);
  const totalUsers = await User.countDocuments({ isAdmin: { $ne: true } });
  return { usersList, totalUsers };
};

//specific user
export const singleUserServices = async (id) => {
  const users = await User.findById(id);
  if (!users)
     throw CustomError("user not found", 400);
  else
    return users;
};

//order list
export const getAllOrderServices = async (id) => {
  const orderdata = await Order.find();
  return orderdata
};

//get total revenue
export const getGrossProfitServices = async () => {
  const result = await Order.aggregate([{$group:{_id:null,totalRevenue:{$sum:"$total"}}}])
  return result;
};