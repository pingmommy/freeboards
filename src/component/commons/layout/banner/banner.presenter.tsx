import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { MouseEventHandler } from "react";

interface ISampleArrowProps {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function LayoutBannerUI(): JSX.Element {
  const CustomPrevArrow = (props: ISampleArrowProps): JSX.Element => (
    <div
      className="custom-prev-arrow"
      onClick={props.onClick}
      style={{
        position: "absolute",
        top: "200px",
        left: "200px",
        zIndex: 1,
        color: "white",
      }}
    >
      {`<<`}
    </div>
  );

  const CustomNextArrow = (props: ISampleArrowProps): JSX.Element => (
    <div
      className="custom-next-arrow"
      onClick={props.onClick}
      style={{
        position: "absolute",
        top: "200px",
        right: "200px",
        zIndex: 1,
        color: "white",
      }}
    >
      {`>>`}
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow onClick={undefined} />,
    nextArrow: <CustomNextArrow onClick={undefined} />,
  };
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        <div>
          <img src="/images/freeboardBanner.png" alt="" />
        </div>
        <div>
          <img src="/images/freeboardBanner02.png" alt="" />
        </div>
        <div>
          <img src="/images/freeboardBanner03.png" alt="" />
        </div>
        <div>
          <img src="/images/freeboardBanner04.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}
