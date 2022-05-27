import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<title>Joe Vega Portafolio</title>
					<meta name="description" content="Joe Vega Portafolio website" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
						integrity="sha512-DanfxWBasQtq+RtkNAEDTdX4Q6BPCJQ/kexi/RftcP0BcA4NIJPSi7i31Vl+Yl5OCfgZkdJmCqz+byTOIIRboQ=="
						crossOrigin="anonymous"
						referrerpolicy="no-referrer"
					/>
					<link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
