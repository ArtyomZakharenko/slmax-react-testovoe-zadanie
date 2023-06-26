import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Layout : React.FC<{children: ReactNode}>  = ({ children }: {children: ReactNode}) => {
	return (
		<>
			<Navbar/>
			<main>
				{children}
			</main>
			<Footer/>
		</>
	);
};

export default Layout;
