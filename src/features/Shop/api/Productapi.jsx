import { api1 } from "../../../config/config";

export const productapi = async (limit, skip,search) => {
    let url = search? `/products/search?q=${search}` :`/products?limit=${limit}&skip=${skip}`
    try {
        const res = await api1.get(url);
        return res;
    } catch (error) {
        console.log("product-api =", error);
        throw error;
    }
};

export const categorylist = async()=>{
    try {
        let res = await api1.get("/products/category-list");
        return res.data
    } catch (error) {
        console.log("category-lst = ",error);
        throw error;
    }
}

export const categorysearch = async(catergorys)=>{
   
    
    try {
        let res = await api1.get(`/products/category/${catergorys}`);
        return res
    } catch (error) {
        console.log("category-search error = ",error);
        throw error;
    }
}

//export const search = async(search)=>{
//    try {
//        let res = await api1.get(`/products/search?q=${search}`);
//        return res
//    } catch (error) {
//        console.log("category-search error = ",error);
//        throw error;
//    }
//}