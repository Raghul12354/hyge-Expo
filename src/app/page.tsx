import { Box } from "@mui/material";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";

export default function Home() {
  // https://imgur.com/c3mP2nJ its not working
  return (
    <Box>
      <Hero />
      <About />
    </Box>
  );
}
