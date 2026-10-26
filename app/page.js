import Image from "next/image";
import Hero from "@/app/section/homeSection/heroSection/Hero"
import About from "@/app/section/homeSection/aboutSection/About"
import Expertise from "./section/homeSection/expertiseSection/Expertise";
import Certificates from "./section/homeSection/cartoficateSection/Certificate";
import { ContactBanner } from "./section/homeSection/contectBannerSection/ContectBanner";
import Project  from "./section/homeSection/projectSection/Project";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Expertise/>
    <Project/>
    <Certificates/>
    <ContactBanner/>
    
    
    {/* <h1>home page</h1> */}
    </>
  );
}
