"use client";
import * as React from "react";
import Image from "next/image";
import { Box, Button, Divider, Tab, Tabs, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

interface TabPanelProps {
  index: number;
  value: number;
  img: string;
  title: string;
  desc: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { img, title, desc, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "2em", md: "3.5em" },
            my: { xs: "2em", md: "3.5em" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              height: { xs: "250px", md: "500px" },
            }}
          >
            <Image
              src={img}
              alt={title}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.8em", md: "3em" },
                fontWeight: "600",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1em", md: "1.2em" },
                my: { xs: "1em", md: "1.5em" },
                width: { xs: "100%", md: "30em" },
              }}
            >
              {desc}
            </Typography>
            <Divider sx={{ color: "primary.light" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1em",
                mt: "2em",
              }}
            >
              <Button
                sx={{
                  bgcolor: "secondary.main",
                  borderRadius: "100%",
                  p: { xs: "1em", md: "1.2em" },
                  ":hover": { bgcolor: "secondary.main" },
                }}
              >
                <AddOutlinedIcon
                  sx={{
                    fontSize: { xs: "2em", md: "2.2em" },
                    color: "white",
                  }}
                />
              </Button>
              <Typography
                sx={{
                  width: "5em",
                  fontSize: { xs: "1em", md: "1.1em" },
                  lineHeight: "1.3em",
                }}
              >
                Contact us today
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "primary.light",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{
            "& .MuiTab-root": {
              color: "black !important",
            },
            "& .MuiTabs-indicator": { bgcolor: "secondary.main" },
            "& .MuiTabs-flexContainer": {
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            },
          }}
        >
          <Tab disableRipple label="Packing and loading" {...a11yProps(0)} />
          <Tab disableRipple label="Freight forwarding" {...a11yProps(1)} />
          <Tab disableRipple label="Customs clearance" {...a11yProps(2)} />
          <Tab disableRipple label="Transportation" {...a11yProps(3)} />
          <Tab disableRipple label="Unloading and delivery" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        img="https://i.postimg.cc/bw4GN6ww/Process-1.png"
        title="Packing and loading"
        desc="The initial phase of cargo shipping involves packaging and loading the cargo securely to safeguard it from potential transportation damage. Subsequently, the cargo is carefully loaded onto a cargo container, truck, or train."
        value={value}
        index={0}
      />
      <CustomTabPanel
        img="https://i.postimg.cc/JzDcJXGH/Process-2.png"
        title="Freight forwarding"
        desc="International cargo shipments require freight forwarding. Freight forwarders specialize in cross-border transportation, selecting the optimal mode and arranging delivery to the destination."
        value={value}
        index={1}
      />
      <CustomTabPanel
        img="https://i.postimg.cc/Bv2T7G5q/Process-3.png"
        title="Customs clearance"
        desc="When cargo enters a foreign country, it undergoes customs clearance, which ensures compliance with import regulations, including duty/tax payment and submission of relevant documentation."
        value={value}
        index={2}
      />
      <CustomTabPanel
        img="https://i.postimg.cc/c41FK6Rf/Process-4.png"
        title="Transportation"
        desc="After customs clearance, the cargo is transported to its destination, with the mode of transportation determined by distance and cargo type. For long distances, shipping is preferred, while trucks or trains are used for shorter distances."
        value={value}
        index={3}
      />
      <CustomTabPanel
        img="https://i.postimg.cc/BQvCSk3g/Process-5.png"
        title="Unloading and delivery"
        desc="Once the cargo arrives at its destination, it is unloaded and delivered to the consignee. The consignee is the person or company that is responsible for taking delivery of the cargo."
        value={value}
        index={4}
      />
    </Box>
  );
}