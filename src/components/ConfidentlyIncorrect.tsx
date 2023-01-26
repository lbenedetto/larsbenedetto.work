import React from "react";
import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import Typography from "@mui/material/Typography";
import {Button, Paper, Stack} from "@mui/material";
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
          <Typography lineHeight={2} padding={4}>
            A multiplayer quiz game where you give the answer in the form of a 95% confidence interval. This project is
            a work in progress and I'll write about it when it's finished. I'm currently working on rewriting the
            frontend with Svelte since I am not happy with how it currently looks/feels.
          </Typography>
          <Stack sx={{paddingTop: 2, paddingBottom: 4}}
                 direction="row"
                 spacing={2}
                 justifyContent="center">
            <Button href="https://larsbenedetto.work/confidentlyincorrect/"
                    variant="contained">
              Play Game
            </Button>

            <Button href="https://github.com/lbenedetto/confidentlyincorrect"
                    variant="outlined">
              View Source Code
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}