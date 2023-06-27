export interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface ISingleProduct extends IProduct {
    description: string;
    category: string;
    countInStock: number;
}

export interface ProductsListProps {
    products: IProduct[];
}
