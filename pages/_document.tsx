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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="description"
            content="WFA ID merupakan web open-source untuk mencari company yang sudah menerapkan WFA (Work From Anywhere) di Indonesia"
          />
          <meta property="og:site_name" content="wfa.vercel.app" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="WFA-ID | Temukan job WFA impianmu disini"
          />
          <meta
            property="og:description"
            content="WFA ID merupakan web open-source untuk mencari company yang sudah menerapkan WFA (Work From Anywhere) di Indonesia"
          />
          <meta property="og:url" content="https://wfa.vercel.app" />
          <meta
            property="og:image"
            content="https://wfa.vercel.app/meta-img.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="WFA-ID | Temukan job WFA impianmu disini"
          />
          <meta
            name="twitter:description"
            content="WFA ID merupakan web open-source untuk mencari company yang sudah menerapkan WFA (Work From Anywhere) di Indonesia"
          />
          <meta name="twitter:url" content="https://wfa.vercel.app" />
          <meta
            name="twitter:image"
            content="https://wfa.vercel.app/meta-img.jpg"
          />
          <meta name="twitter:site" content="@antonybudianto" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
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
