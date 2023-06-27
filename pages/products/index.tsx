import React from "react";
import styled from "styled-components";
import {ProductsList} from "@/components";
import {IProduct} from "@/interfaces/product.interface";


const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 1fr;
    }
  }
`;

const Index = ({products}: {products: IProduct[]}) => {
    return (
        <Wrapper className='page'>
            <div className='section-center products'>
                <ProductsList products={products}/>
            </div>
        </Wrapper>
    );
}

export const getStaticProps = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/products');
        const products: IProduct[] = await res.json();
        return {
            props: {
                products,
            },
            revalidate: 60,
        };
    } catch
        (error) {
        return {
            props: {
                products: [],
            },
            revalidate: 60,
        };
    }
};

export default Index;
