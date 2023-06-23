import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout : React.FC<{children: ReactNode}>  = ({ children }: {children: ReactNode}) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<Footer/>
		</>
	);
};

export default Layout;
