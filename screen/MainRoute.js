import Head from "next/head";
import HeaderComp from "./HeaderComp";

const MainRoute = ({ children }) => {
  return (
    <div>
      <Head>
        <title>CodeLab Build</title>
        <meta content="This is a very simple Build" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeaderComp />
      {children}
    </div>
  );
};

export default MainRoute;
