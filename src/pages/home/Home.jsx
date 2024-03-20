import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import Footer from '../../components/footer/Footer';
import PricingCard from '../../components/pricingcard/PricingCard';
//import WorkCard from '../../components/workcard/WorkCard';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      {/* <WorkCard /> */}
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Home;