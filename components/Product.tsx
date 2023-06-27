import React from 'react';
import styled from "styled-components";
import {IProduct} from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from 'react-icons/fa'

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  .info {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info h5,
  .info p {
    margin-bottom: 0;
    font-weight: 400;
  }

  .info p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;

const Product = ({ image, name, price, id }: IProduct) => {
    return (
        <Wrapper>
            <div className='container'>
                <Image
                    src={image}
                    alt={name}
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
                <Link
                    href={`/products/${id}`}
                    className='link'
                >
                    <FaSearch />
                </Link>
            </div>
            <div className='info'>
                <h5>{name}</h5>
                <p>{price}$</p>
            </div>
        </Wrapper>
    )
}

export default Product;
