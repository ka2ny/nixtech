import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  rem,
} from "@mantine/core";

import classes from "./Features.module.css";

export const MOCKDATA = [
  {
    icon: "IconGauge",
    title: "Comprehensive Repair Services",
    description:
      "Entrust your beloved electronics to our skilled hands. We repair a vast array of devices, including smartphones, laptops, audio equipment, medical electronics, industrial control boards, and more.",
  },
  {
    icon: "IconUser",
    title: "Expert Diagnostic Capabilities",
    description:
      "Our technicians possess the knowledge and tools to accurately diagnose even the most complex electronic issues, ensuring precise and effective repairs.",
  },
  {
    icon: "IconCookie",
    title: "Meticulous Restoration Processes",
    description:
      "Breathe new life into your vintage or discontinued electronics with our meticulous restoration services. We take pride in preserving electronic history while revitalizing functionality.",
  },
  {
    icon: "IconLock",
    title: "Professional Installation Solutions",
    description:
      "Elevate your home or business with our professional installation services for CCTV, security systems, home theaters, surround sound systems, and more.",
  },
  {
    icon: "IconMessage2",
    title: "High-Quality Replacement Parts",
    description:
      "We use only the highest-quality replacement parts and components, ensuring long-lasting repairs backed by comprehensive warranties.",
  },
  {
    icon: "IconMessage2",
    title: "Fair Pricing & Turnaround Times",
    description:
      "Experience exceptional value with our competitive pricing and efficient turnaround times, allowing you to get your devices back in top condition without breaking the bank.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      {/* <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} /> 
      </ThemeIcon> */}
      <Text mt="sm" mb={7} style={{ textAlign: "center" }}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6} style={{ textAlign: "justify" }}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>
        trusted repairs: simplifying your electronics solutions
      </Title>

      <Container size={600} p={0} ta="justify">
        <Text size="sm" className={classes.description}>
          count on us for hassle-free repairs that prioritize your device's
          longevity and performance. with our trusted service, enjoy peace of
          mind knowing your electronics are in reliable hands.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
        ta="justify"
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
