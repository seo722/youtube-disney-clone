import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectRecommend } from "../../features/movie/movieSlice";

const Recommends = ({ select }) => {
  const movies = useSelector(select);
  console.log(movies, ":🛢️");

  return (
    <Container>
      <h4>
        {movies?.slice(0, 1).map((movie) => (
          <span>{movie.type}</span>
        ))}
      </h4>
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
