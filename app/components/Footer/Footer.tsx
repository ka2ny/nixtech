import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import classes from "./Footer.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <div
          className={`${classes.companyName} ${classes.btnShine} ${classes.oswaldFt}`}
        >
          groupe nixtech.
        </div>

        <Group className={classes.links}>
          <div>1666 Rue Thiery #109, LaSalle, Quebec</div>
          <r />
          <div>info[@]nixtech.ca</div>
        </Group>

      
      </div>
    </div>
  );
}
