import React from "react";
import Layout from "../components/Layout";
 import ContentMedia from "../components/blocks/ContentMedia";
 import Hero from "../components/blocks/Hero";
 import CategoriesProperties from "../components/blocks/CategoriesProperties";
 import PlanNegocio from "../components/blocks/PlanNegocio";
 import Tabs from "../components/blocks/Tabs";
 import CtaRegistration from "../components/blocks/CtaRegistration";
 import Packs from "../components/blocks/Packs";
 import CtaProducts from "../components/blocks/CtaProducts";
export default function Home() {
  return  (
    <>
    <Layout>    
      <Hero/> 
      <ContentMedia/>
      <CategoriesProperties/>
      <PlanNegocio/>
      <Tabs/>
      <CtaRegistration/>
     <Packs/>
    <CtaProducts/>
    </Layout>
    </>
   )  
}
