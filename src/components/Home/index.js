import ImgSlider from "../ImgSlider";
import NewDisney from "../NewDisney";
import Recommends from "../Recommends";
import Viewers from "../Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import {
  selectNewDisney,
  selectOriginal,
  selectRecommend,
  selectTrending,
  setMovies,
} from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";

import { Container } from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "Recommend for you":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "New Disney":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "Original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "Trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends select={selectRecommend} />
      <Recommends select={selectNewDisney} />
      <Recommends select={selectOriginal} />
      <Recommends select={selectTrending} />
    </Container>
  );
};

export default Home;
