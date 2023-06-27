import React from "react";
import styled from "styled-components";
import {ProductsList} from "@/components";
import {data} from "@/data/data";


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

const Index: React.FC = () => {
    return (
        <Wrapper className='page'>
            <div className='section-center products'>
                <ProductsList products={data}/>
            </div>
        </Wrapper>
    );
}

export default Index;
