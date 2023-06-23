import React from "react";
import { Layout } from "@/components";
import { AppProps } from "next/app";
import 'normalize.css';

const App :React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
