import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";

export default function DoctorMarkov() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/o9I0tNh.png"}
        title={"Doctor Markov"}
        date={"16th June 2019"}
        category={"Web, Fun with Data"}
      />
    </Container>
  )
}