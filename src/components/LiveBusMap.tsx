import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";

export default function LiveBusMap() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/J9bCLvq.png"}
        title={"Live Bus Map"}
        date={"26th December 2017"}
        category={"Web"}
      />
    </Container>
  )
}