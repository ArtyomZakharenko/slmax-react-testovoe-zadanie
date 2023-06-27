import {detailedData, productsData} from "@/data/products";

export const fetchAllProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return productsData;
}

export const fetchSingleProduct = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const product = detailedData.find((item) => item.id === id);
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
}
