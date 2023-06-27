import React from 'react';
import {ProductsListProps} from "@/interfaces/product.interface";
import styled from "styled-components";
import { Product } from "@/components";

const ProductsContainer = styled.section`
  display: grid;
  gap: 2rem 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductsList: React.FC<ProductsListProps> = ({products}) => {
    if (!products.length) {
        return <p>No products yet</p>;
    }
    return (
        <ProductsContainer>

                {products.map((product) => {
                    return <Product key={product.id} {...product} />;
                })}

        </ProductsContainer>
    );
};

export default ProductsList;
