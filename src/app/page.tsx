import { Box } from "@mui/material";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Locations from "@/components/locations/Locations";

export default function Home() {
  // https://imgur.com/c3mP2nJ its not working
  return (
    <Box>
      <Hero />
      <About />
      <Locations />
    </Box>
  );
}
