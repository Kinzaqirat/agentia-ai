import HeroSection from "@/components/hero";


import Feature from "@/components/feature";

import Agents from "@/components/agents";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Technology from "@/components/technology";

export default function Home() {
  return (
<div className="bg-black">
  <HeroSection/>

<Technology/>



 <Feature/>
  <Agents/>
  <Pricing/> 
 <Contact/>
 
</div>
  );
}
