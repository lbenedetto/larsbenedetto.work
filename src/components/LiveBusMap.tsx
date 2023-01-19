import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function LiveBusMap() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/J9bCLvq.png"}
        title={"Live Bus Map"}
        date={"26th December 2017"}
        category={"Web"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={2}>
            Article in process of being migrated from old site
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}