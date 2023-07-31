import { Box } from "@mui/material";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Locations from "@/components/locations/Locations";
import Services from "@/components/services/Services";
import Process from "@/components/process/Process";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <Box>
      <Hero />
      <About />
      <Locations />
      <Services />
      <Process />
      <Contact />
    </Box>
  );
}
