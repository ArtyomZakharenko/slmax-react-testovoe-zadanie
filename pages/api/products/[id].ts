import {NextApiRequest, NextApiResponse} from "next";
import {ISingleProduct} from "@/interfaces/product.interface";
import {fetchSingleProduct} from "@/utils/fetch";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

const singleProductHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {id} = req.query;
        const product: ISingleProduct = await fetchSingleProduct(Number(id));
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: "Error getting product data"});
    }
}

export default singleProductHandler;
