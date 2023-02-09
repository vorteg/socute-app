import { FC } from "react";
import Head from "next/head";

interface HeadProps {
  title?: string;
  // ? esto quiere decir que es opcional
}

const Myhead: FC<HeadProps> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Victor Ortega" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}
      </Head>
    </>
  );
};

export default Myhead;
