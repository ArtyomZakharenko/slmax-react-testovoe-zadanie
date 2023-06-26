import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import {FaBars} from "react-icons/fa";
import styled from "styled-components";

const NavContainer = styled.nav`
  box-shadow: var(--light-shadow);

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }

  .nav-toggle:hover {
    color: var(--clr-primary-1);
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .links a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }

  .links a:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1170px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .nav-header {
      padding: 0;
    }

    .nav-toggle {
      display: none;
    }

    .links-container {
      height: auto !important;
    }

    .links {
      display: flex;
    }

    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }

    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
`;

const Navbar = () => {
        const [showLinks, setShowLinks] = useState(false);
        const linksContainerRef = useRef(null as any);
        const linksRef = useRef(null as any);
        const toggleLinks = () => {
            setShowLinks(!showLinks);
        };

        useEffect(() => {
            if (linksContainerRef.current && linksRef.current) {
            const linksHeight = linksRef.current.getBoundingClientRect().height;
            if (showLinks) {
                linksContainerRef.current.style.height = `${linksHeight}px`;
            } else {
                linksContainerRef.current.style.height = "0px";
            }
        }
        }, [showLinks]);

        return (
            <NavContainer>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link href={'/'}>
                            <Image src={logo} alt='logo'/>
                        </Link>
                        <button className='nav-toggle' onClick={toggleLinks}>
                            <FaBars/>
                        </button>
                    </div>
                    <div className='links-container' ref={linksContainerRef}>
                        <ul className='links' ref={linksRef}>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/products'>Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </NavContainer>
        );
    }
;

export default Navbar;
