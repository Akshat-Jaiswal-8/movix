import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
// import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";
import "./carousel.scss";
import dayjs from "dayjs";
import CircleRating from "../circleRating/CircleRating.jsx";

function Carousel({ data, loading }) {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);

  const navigate = useNavigate();

  const navigation = (direction) => {
    // if (direction === "left" ? : )
  };

  const skItem = () => {
    return (
      <div className={"skeletonItem"}>
        <div className={"posterBlock skeleton"}></div>
        <div className={"textBlock"}>
          <div className={"title skeleton"}></div>
          <div className={"date skeleton"}></div>
        </div>
      </div>
    );
  };
  return (
    <div className={"carousel"}>
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className={"carouselLeftNav arrow"}
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className={"carouselRightNav arrow"}
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className={"carouselItems"}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div className={"carouselItem"} key={item.id}>
                  <div className={"posterBlock"}>
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </div>
                  <div className="textBlock">
                    <span className={"title"}>{item.title || item.name}</span>
                    <span className={"date"}>
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={"loadingSkeleton"}>Loading ...</div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default Carousel;
