import classes from "./Welcome.module.css";
import { useState, useEffect } from "react";
import { em, rem, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
export function Welcome() {
  const [spinText, setSpinText] = useState(
    "we repair  all types of electronics"
  );
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    const phrases = [
      "we repair  all types of electronics",
      "restoring vintage electronics with care and precision",
      "expert diagnostic & restoration services",
      "from consumer gadgets to industrial systems",
      "quality workmanship guaranteed",
      "fast turnaround times",
      "competitive pricing",
    ];

    let currentIndex = 1;
    const spinInterval = setInterval(() => {
      setSpinText(phrases[currentIndex]);
      currentIndex = (currentIndex + 1) % phrases.length;
    }, 3000);

    return () => clearInterval(spinInterval);
  }, []);
  return (
    <>
      <div className={classes.videoContainer}>
        <video className={classes.video} autoPlay muted loop playsInline>
          <source
            src="https://cdn.shopify.com/videos/c/o/v/366c6242b9434eaf9140c22de51a71e5.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        <div className={classes.videoOverlay}>
          <div
            className={`${classes.companyName} ${classes.btnShine} ${classes.oswaldFt}`}
          >
            groupe nixtech.
          </div>

          <div className={classes.contactInfo}>
            <div>1666 Rue Thiery #109, LaSalle, Quebec</div>
            <div>info[@]nixtech.ca</div>
            <div></div>
          </div>

          <div className={classes.content}>
            <h1 className={classes.headline}>
              trusted electronic repair experts in montreal
            </h1>
            <div style={{ minHeight: "7vh", maxWidth: "95vw" }}>
              <span
                id="spin"
                className="merriweather-regular"
                style={{
                  fontSize: mobile ? rem(18) : rem(24),
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {spinText}
              </span>
            </div>

            <p className={classes.intro}>
              from the latest consumer gadgets to mission-critical industrial
              systems, your electronics are in safe hands with{" "}
              <span className={classes.btnShine} style={{ fontSize: rem(24) }}>
                nixtech.
              </span>
            </p>
            <p>
              we are dedicated to providing comprehensive electronic repair,
              restoration, and installation services tailored to meet the
              diverse needs of our customers. we offer a wide range of solutions
              for consumer electronics, audio/visual equipment, industrial
              systems, medical devices, and beyond.
            </p>

            <div className={classes.ctaBtns}>
              <a
                href="#"
                className={`${classes.ctaBtn} ${classes.glowOnHover}`}
              >
                get a free repair estimate
              </a>
              <a
                href="#"
                className={`${classes.ctaBtn} ${classes.glowOnHover}`}
                style={{ marginLeft: rem(8) }}
              >
                call for expert service
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
