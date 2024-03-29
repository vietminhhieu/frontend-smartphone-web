import React, { useState, useEffect } from "react";
import "./Home.scss";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import Footer from "../../components/Footer/Footer";
import { Slider } from "./components/Slider";
import StoreInfo from "./components/StoreInfo";
import BusinessImg from "./components/BusinessImg";
import MainProduct from "./components/MainProduct";
import { AxiosClient } from "../../services/API/axiosConnection";
import localApiName from "../../services/API/axiosEndPoint";
import LoadingPageComponent from "../../components/Loading/LoadingPage";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    async function fetchProductApi() {
      const { data } = await AxiosClient.get(localApiName.apiProduct);
      setProducts(data);
      setLoadingPage(false);
    }

    fetchProductApi();
  }, []);

  return (
    <>
      {/* SUB-NAVIGATION */}
      <SubHeader />

      {/* MAIN-NAVIGATION */}
      <MainHeader />

      {/* CAROUSEL */}
      <Slider />

      {/* MAIN-PRODUCT */}
      {loadingPage ? (
        <LoadingPageComponent loading={loadingPage} />
      ) : (
        <MainProduct products={products} />
      )}

      {/* BUSINESS-IMG */}
      <BusinessImg />

      {/* STORE-INFO */}
      <StoreInfo />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
