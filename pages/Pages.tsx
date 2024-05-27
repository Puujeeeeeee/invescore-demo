import Navbar from "@/components/layout/Header";
import HomePage from "@/components/home/page";
import InvescorePage from "@/components/invescoreStock/page";
import StandartPage from "@/components/standart/page";
import OpportunityPage from "@/components/opportunity/page";
import LoanSavings from "@/components/loanSavings/page";
import CeoPage from "@/components/ceo/page";
import HumanResourcesPage from "@/components/humanResources/page";
import PrizePage from "@/components/prize/page";
import Footer from "@/components/layout/Footer";

const AllPages = () => {
  return (
    <>
     
      <Navbar />
      <HomePage />
      <InvescorePage />
      <StandartPage />
      <OpportunityPage />
      <LoanSavings />
      <CeoPage />
      <HumanResourcesPage />
      <PrizePage />
      <Footer />
    </>
  );
};
export default AllPages;
