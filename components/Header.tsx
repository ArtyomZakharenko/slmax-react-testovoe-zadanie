import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import headerBcg from "../public/assets/header-bcg.jpg";

const HeaderContainer = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;

	.img-container {
		display: none;
	}

	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--clr-grey-5);
		font-size: 1rem;
	}

	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h1 {
			margin-bottom: 2rem;
		}

		p {
			font-size: 1.25rem;
		}

		.header-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}

		.img-container {
			display: block;
			position: relative;
		}

		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: var(--radius);
			display: block;
			object-fit: cover;
		}
	}
`;

const Header: React.FC = () => {
	return (
		<HeaderContainer className='section-center'>
			<article className='content'>
				<h1>
					Lorem ipsum <br />
					dolor sit amet
				</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
					sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
					aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
					alias?
				</p>
				<Link href="/products" className='btn header-btn'>
					go to products
				</Link>
			</article>
			<article className='img-container'>
				<Image
					src={headerBcg}
					alt='nice image'
					className='main-img'
					quality={30}
					priority={true}
				/>
			</article>
		</HeaderContainer>
	);
}

export default Header;
