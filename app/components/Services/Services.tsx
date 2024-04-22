import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  List,
  ListItem,
} from "@mantine/core";
import classes from "./Services.module.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface CardProps {
  title: string;
  intro: string;
  services: Array<string>;
}

const data = [
  {
    title: "Repairs",
    intro:
      "No matter the electronic device or equipment, our skilled technicians can diagnose and repair it with precision at cost!",
    services: [
      "Consumer electronics repair (smartphones, laptops, tablets, gaming consoles, and more)",
      "Audio/visual equipment repair (speakers, amplifiers, projectors, home theater systems, and more)",
      "Industrial electronics repair (PLCs, motor controls, sensors, circuit boards, and more)",
      "Medical electronics repair (laboratory devices, diagnostic equipment, patient monitoring systems, and more)",
      "Repair services for all types of electronic devices and systems",
    ],
  },
  {
    title: "Installations",
    intro:
      "Elevate your home or business with professional installation services for security, audio/visual, and beyond.",
    services: [
      "CCTV installation",
      "Home and commercial security system installation",
      "Surround sound system installation",
      "Home theater setup and installation",
      "Professional installation services for any audio/visual or security system",
    ],
  },
  {
    title: "Electronics Restoration",
    intro:
      "Breathe new life into your valued electronics with our expert restoration services.",
    services: [
      "Restoration of vintage/antique electronics",
      "Refurbishment of used/pre-owned devices",
      "Reconditioning of industrial/commercial equipment",
      "Revitalization of rare/discontinued products",
    ],
  },
  {
    title: "Shop",
    intro:
      "Explore our selection of restored and refurbished electronic products, ready to breathe new life into your needs.",
    services: [
      "Restored and refurbished consumer electronics",
      "Restored and refurbished audio equipment",
      "Restored and refurbished industrial electronics",
      "Restored and refurbished medical electronics",
      "Browse our ever-growing inventory of restored and refurbished electronic products",
    ],
  },
];

function Card({ services, title, intro }: CardProps) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Title order={3}>{title}</Title>
        <br />
        <Text size="md">{intro}</Text>
        <br />
        <List>
          {services.map((service) => (
            <ListItem key={service}>{service}</ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
}

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

export function CardsCarousel({ opened }: { opened: boolean }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 200 }));
  return (
    <>
      <Title order={1} p={20}>
        Services
      </Title>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        p={20}
        classNames={classes}
      >
        {slides}
      </Carousel>
    </>
  );
}
