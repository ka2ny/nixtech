import { Container, Title, Accordion } from "@mantine/core";
import classes from "./Faq.module.css";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

const data = [
  {
    value: "electronic-devices",
    question: "What types of electronic devices do you repair?",
    answer:
      "We repair a wide range of electronic devices, including consumer electronics (smartphones, laptops, tablets, gaming consoles), audio equipment, pro A/V gear, medical electronics, industrial electronics, control boards, RC electronics, and home appliance controllers, among others.",
  },
  {
    value: "repair-warranty",
    question: "Do you offer any warranties on your repairs?",
    answer:
      "Yes, we offer a warranty on all our repair services. The warranty period varies depending on the type of device and the repairs performed, but it typically ranges from 30 days to 1 year. Our technicians use high-quality replacement parts to ensure long-lasting repairs.",
  },
  {
    value: "repair-timeline",
    question: "How long does the repair process typically take?",
    answer:
      "The repair time can vary depending on the complexity of the issue and the availability of spare parts. For minor repairs, we often complete the work within a few days. More complex repairs may take up to a week or longer. We always provide an estimated timeline upon assessment.",
  },
  {
    value: "repair-estimate",
    question: "How do I get a repair estimate?",
    answer:
      "You can request a free repair estimate by bringing your device to our service center or filling out the online form on our website. Our technicians will thoroughly assess the device and provide you with an estimate for the required repairs.",
  },
  {
    value: "shipping-repairs",
    question: "Can I ship my device to your service center for repairs?",
    answer:
      "Absolutely! We offer a convenient shipping option for customers located anywhere in Canada. Simply request a shipping label from us, and we'll provide you with a prepaid shipping label to send your device to our service center safely. Once the repairs are completed, we'll ship the device back to you.",
  },
  {
    value: "unsupported-products",
    question:
      "Can you repair and restore discontinued or unsupported products?",
    answer:
      "Yes, absolutely. We specialize in repairing and restoring discontinued products and devices that are no longer supported by the manufacturer. Whether it's an industrial machine, medical equipment, or any other electronic product, our skilled technicians have the expertise to diagnose and fix the issue using high-quality replacement parts or alternative components.",
  },
  {
    value: "water-damage-repair",
    question: "Can you repair water-damaged devices?",
    answer:
      "In many cases, yes. Our technicians have experience in dealing with water-damaged devices and can often restore their functionality. However, the success of the repair depends on the extent of the water damage and the promptness of the repair attempt.",
  },
  {
    value: "pick-up-delivery",
    question: "Do you offer pick-up and delivery services?",
    answer:
      "Yes, we offer convenient pick-up and delivery services for an additional fee. This service is available within a certain radius from our service center. Please contact us for more information and availability in your area.",
  },
  {
    value: "electronics-recycling",
    question:
      "Do you offer any recycling programs for old or obsolete electronics?",
    answer:
      "Yes, we have a comprehensive electronics recycling program. Customers can bring their old, obsolete, or non-working electronic devices to our service center, and we will responsibly recycle them. As an added benefit, customers who participate in our recycling program will receive a discount code valid for one year on any future repair services.",
  },
  {
    value: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including cash, credit/debit cards, and electronic transfers.",
  },
];

export function Faq() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        {data.map((x) => (
          <Accordion.Item className={classes.item} value={x.value} key={x.value}>
            <Accordion.Control>{x.question}</Accordion.Control>
            <Accordion.Panel>{x.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
