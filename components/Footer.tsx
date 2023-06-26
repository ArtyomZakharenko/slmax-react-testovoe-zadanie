import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black);
  height: 5rem;

  span {
    color: var(--clr-primary-5);
  }

  h5 {
    margin: 0.1rem;
    color: var(--clr-white);
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <h5>
                &copy; {new Date().getFullYear()}
                <span> Test task </span>
            </h5>
            <h5>Lorem ipsum dolor.</h5>
        </FooterContainer>
    )
};

export default Footer;
