import React from "react";
import {
  Background,
  Container,
  ImageTitle,
  Controls,
  ContentMeta,
  Player,
} from "./styles";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="/images/login-background.jpg" alt="" />
      </Background>

      <ImageTitle>
        <img src="/images/logo.svg" alt="" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
        </Controls>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
