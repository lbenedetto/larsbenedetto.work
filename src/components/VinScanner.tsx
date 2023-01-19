import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function VinScanner() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/w6nCgmr.png"}
        title={"VIN Scanner"}
        date={"21st November 2017"}
        category={"Utility: Android"}
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