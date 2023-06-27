import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {IProduct, ISingleProduct} from "@/interfaces/product.interface";


const Wrapper = styled.section`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .price {
    color: var(--clr-primary-5);
  }

  .desc {
    line-height: 2;
    max-width: 45em;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`;
const ProductPage = ({product} : {product: ISingleProduct}) => {

    return (
        <Wrapper className='section section-center page'>
            <Link href='/products' className='btn'>
                back to products
            </Link>
            <div className='product-center'>
                <section className='content'>
                    <h2>{product.name}</h2>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={0}
                        height={0}
                        sizes={"100%"}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        quality={100}
                        priority={true}
                    />
                    <h5 className='price'>{product.price}$</h5>
                    <p className='desc'>{product.description}</p>

                    <p className='info'>
                        <span>Available : </span>
                        {product.countInStock > 0 ? "In stock" : "Out of stock"}
                    </p>
                    <p className='info'>
                        <span>SKU : </span>
                        {product.id}
                    </p>
                    <p className='info'>
                        <span>Category : </span>
                        {product.category}
                    </p>
                    <hr />
                </section>
            </div>
        </Wrapper>

    );
};

export const getStaticProps = async ({params} : {params: Params}) => {
    try {
        const {id} = params;
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        const product = await res.json();

        if (!product) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                product,
            },
            revalidate: 60,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

export const getStaticPaths = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/products`);
        const products: IProduct[] = await res.json();
        const paths = products.map((product) => {
            const {id} = product;
            return {
                params: {
                    id: id.toString(),
                },
            };
        });

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        return {
            paths: [],
            fallback: false,
        };
    }
}

export default ProductPage;
