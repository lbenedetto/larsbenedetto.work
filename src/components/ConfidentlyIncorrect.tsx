import React from "react";
import Container from "@mui/material/Container";
import ArticleHeader from "./Article";

export default function ConfidentlyIncorrect() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={""}
        title={"Confidently Incorrect"}
        date={"18th January, 2023"}
        category={"Game: Backend, Web, Android"}
      />
    </Container>
  )
}