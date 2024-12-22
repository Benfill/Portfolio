import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import Head from "next/head";

const Portfolio = () => {
  const { isLoading, error, data } = useQuery("portfolio", () =>
    axios
      .get("api/portfolio")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );
  return (
    <>
      <Head>
        <title>Benfill's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <BannerLayout>
        <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
          {isLoading
            ? [1, 2, 3, 4].map(() => (
                <ImageAndParagraphSkeleton className={"w-full object-cover"} />
              ))
            : data?.map((data, key) => <PortfolioCard key={key} data={data} />)}
        </div>
        <Footer />
      </BannerLayout>
    </>
  );
};

export default Portfolio;
