import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Container from "@mui/material/Container";
import {Button, ImageList, ImageListItem, Paper, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {CalendarMonth, Category} from "@mui/icons-material";

export default function ChalkJotto() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <CardMedia
        component="img"
        image="https://i.imgur.com/awnlRhq.png"
      />
      <Typography variant="h4" component="h2" paddingTop={2}>
        Chalk Jotto
      </Typography>
      <Stack sx={{paddingTop: 2, paddingBottom: 2}}
             direction="row"
             spacing={1}
             justifyContent="left">
        <CalendarMonth/>
        <Typography paddingRight={2}>16th June 2019</Typography>
        <Category/>
        <Typography>Android App</Typography>
      </Stack>
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={2}>
            Chalk Jotto is my first Android game. I got the idea about a year ago, threw together a playable game over the
            weekend, and polished it up over the course of the next week after work. But then I started losing interest. I
            had so many ideas for features, and I tried adding them all at once. I got distracted and kind of forgot about
            the project, what with moving around the world to Copenhagen to go to University, and then dropping out of my
            Master’s program to work at an awesome startup instead.

            But finally, I decided that I just needed to get it done. I stripped out every half baked feature I had been
            working on adding. Every time I had worked on the project, I only added more TODO items than I resolved. I was
            striving for perfection, and I was overdoing it.

            Achievements and Leaderboards were done, but I didn’t want to have to deal with GDPR stuff, so I removed it. For
            the same reason, I also didn’t include ads or crashlytics. The app gathers absolutely no data.

            I just wanted to ship a fun word game, not start a business, so I removed everything that wasn’t fun. In only a
            few hours I had something ready to publish.
          </Typography>
          <Box padding={2}>
            <ImageList cols={3}>
              <ImageListItem>
                <img src="https://i.imgur.com/5Bq12C1.png" loading="lazy" alt="New game page"/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://imgur.com/MBzNjfR.png" loading="lazy" alt="Tutorial page"/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://imgur.com/3yEQpGx.png" loading="lazy" alt="A game in progress"/>
              </ImageListItem>
            </ImageList>
          </Box>
          <Typography lineHeight={2} padding={2}>
            I can’t believe I let a project sit 99% finished for so long. Next time I start a project I’m going to focus
            on finishing a minimum viable product, putting just a bit of polish on top, and then releasing it. I can
            then add on features if I feel like it later. And indeed, releasing this app today has given me the
            motivation to add in some of those other feature ideas I had been working.
          </Typography>
          <Box padding={2} margin="auto">
            <ImageList cols={1}>
              <ImageListItem>
                <img
                  src="https://imgur.com/nqcBSP8.png"
                  alt="Achievement icons"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Box>
          <Typography lineHeight={2} padding={2}>
            I may re-add Achievements at some point since I had gone to the trouble of drawing icons for every achievement.
          </Typography>
          <Stack sx={{paddingTop: 2, paddingBottom: 2}}
                 direction="row"
                 spacing={2}
                 justifyContent="center">
            <Button href="https://play.google.com/store/apps/details?id=com.benedetto.chalkjotto"
                    variant="contained">
              Download App
            </Button>

            <Button href="https://github.com/lbenedetto/chalkjotto"
                    variant="outlined">
              View Source Code
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}