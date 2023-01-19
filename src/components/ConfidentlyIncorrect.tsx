import React from "react";
import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function ConfidentlyIncorrect() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={""}
        title={"Confidently Incorrect"}
        date={"18th January, 2023"}
        category={"Game: Backend, Web, Android"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={2}>
            Coming soon
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}