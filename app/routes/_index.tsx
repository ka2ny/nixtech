import type { MetaFunction } from "@remix-run/node";
import { Welcome } from "~/components/Welcome/Welcome";
import { ColorSchemeToggle } from "~/components/ColorSchemeToggle/ColorSchemeToggle";
import { Faq } from "~/components/Faq/Faq";
import { CardsCarousel } from "~/components/Services/Services";
import { FeaturesGrid } from "~/components/Features/Features";
import { FooterCentered } from "~/components/Footer/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "groupe nixtech inc. | trusted electronics repair service in montreal" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export default function Index() {
  return (
    <>
      <Welcome />
      <CardsCarousel opened={true} />
      <FeaturesGrid />
      <Faq />
      <FooterCentered />
    </>
  );
}
