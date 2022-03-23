import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";

const NewDisney = () => {
  return (
    <Container>
      <h4>New to Disney plus</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="/images/" alt="I'm here" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

export default NewDisney;
