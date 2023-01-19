import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";

export default function VinScanner() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/w6nCgmr.png"}
        title={"VIN Scanner"}
        date={"21st November 2017"}
        category={"Utility: Android"}
      />
    </Container>
  )
}