import BigBanner from "../components/BigBanner";
import Brands from "../components/Brands";
import CurratedPicks from "../components/CurratedPicks";
import CustomerExp from "../components/CustomerExp";
import DiscountBar from "../components/DiscountBar";
import FeaturedProducts from "../components/FeaturedProducts";
import MainCaoursel from "../components/MainCaoursel";
import Example from "../components/Modal";
import NavBar from "../components/NavBar";
import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>E-Commerce</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200&family=Poppins:wght@200&display=swap" rel="stylesheet"></link>
      </Head>
      <DiscountBar/>
      <NavBar/>
      <MainCaoursel/>
      <Brands/>
      <CustomerExp/>
      <CurratedPicks/>
      <FeaturedProducts/>
      <BigBanner/>
    </div>
  )
}
