import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";

export default function PaperclipMaximizer() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/PV8Nbwa.png"}
        title={"Paperclip Maximizer"}
        date={"16th April 2018"}
        category={"AI"}
      />
    </Container>
  )
}