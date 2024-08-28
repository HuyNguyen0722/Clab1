import { User, Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUser = async (id) => {
    console.log(id);
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

export const fetchProduct = async (id) => {
    try {
        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch product!");
    }
};