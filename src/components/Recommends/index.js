import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/movie/movieSlice";

const Recommends = () => {
  const movies = useSelector(selectRecommend);
  console.log(movies, ":🛢️");

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => {
            return (
              <Wrap key={key}>
                {movie.id}
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
};

export default Recommends;
