import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Benfill's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="Home-Page -z-10">
        <Banner />
        <MyExpertise />
        <Recommendations />
        <ClientReviews />
        <Footer />
      </div>
    </>
  );
};

export default home;
