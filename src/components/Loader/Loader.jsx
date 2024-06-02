import { useEffect, useState } from "react";
import loaderMob from "../../images/loader-mob.png";
import loaderMob2x from "../../images/loader-mob@2x.png";
import loaderTab from "../../images/loader-tab.png";
import loaderTab2x from "../../images/loader-tab@2x.png";
import loaderDesk from "../../images/loader-desk.png";
import loaderDesk2x from "../../images/loader-desk@2x.png";
import { Container, Overlay, Text } from "./Loader.styled";

function ProgressWithLabel(props) {
  return (
    <Overlay>
      <Text>{`${Math.round(props.value)}%`}</Text>
    </Overlay>
  );
}

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 5
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <picture>
        <source
          srcSet={`${loaderMob}, ${loaderMob2x} 2x`}
          media="(max-width: 767px)"
          width={375}
        />
        <source
          srcSet={`${loaderTab}, ${loaderTab2x} 2x`}
          media="(min-width: 768px) and (max-width: 1279px)"
          width={768}
        />
        <source
          srcSet={`${loaderDesk}, ${loaderDesk2x} 2x`}
          media="(min-width: 1280px)"
          width={1280}
        />
        <img src={loaderDesk} alt="loader" />
        <ProgressWithLabel value={progress} />
      </picture>
    </Container>
  );
};

export default Loader;
