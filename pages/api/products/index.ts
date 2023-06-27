import {NextApiRequest, NextApiResponse} from "next";
import {fetchAllProducts} from "@/utils/fetch";
import {IProduct} from "@/interfaces/product.interface";

const productsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const products: IProduct[] = await fetchAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: "Error getting products data"});
    }
}

export default productsHandler;
