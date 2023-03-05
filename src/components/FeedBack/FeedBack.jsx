import "./feedback.css";
import { Pagination, Navigation } from "swiper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useEffect } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box } from "@mui/system";
import Person2Icon from "@mui/icons-material/Person2";
const styles = {
  styles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    position: "absolute",
    top: "30px",
  },
  date: {
    width: "200px",
    height: "30px",
    position: "absolute",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    fontSize: "12px",
    margin: "10px",
  },
  author: {
    width: "100px",
    position: "absolute",
    bottom: "50px",
    right: 80,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    fontSize: "12px",
    marginTop: "20px",
    fontSize: "18px",
  },
};

const FeedBack = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (!user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div id="feed">
      <div className="header">ОТЗЫВЫ ЗАКАЗЧИКОВ</div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        id="feeds"
      >
        {workouts &&
          workouts.map(function (feed) {
            return (
              <SwiperSlide style={styles.styles} key={feed._id}>
                <RateReviewIcon
                  style={styles.icon}
                  fontSize="large"
                  color="primary"
                />
                <div className="feed">{feed.title}</div>
                <Box style={styles.author} color="primary">
                  <Person2Icon color="primary" fontSize="large" />
                  <p>{feed.load}</p>
                </Box>
                <Box style={styles.date}>
                  <AccessTimeIcon fontSize="medium" color="secondary" />
                  <p>
                    {formatDistanceToNow(new Date(feed.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default FeedBack;
