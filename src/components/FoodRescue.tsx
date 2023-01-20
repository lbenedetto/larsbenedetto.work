import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import Box from "@mui/material/Box";
import {Button, ImageList, ImageListItem, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

export default function PickupScheduler() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/2eKTEdG.png"}
        title={"Food Rescue"}
        date={"6th June 2018"}
        category={"Android, Web, Backend"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={4}>
            For my group senior project at EWU, we chose to make an app to help prevent food waste on campus. There is
            often food left over after various events across campus and if you're lucky enough to stumble into the
            building at just the right time, they'll let you have some for free. But wouldn't it be nice if there was
            a way to subscribe to alerts and receive real time information about where on campus a hungry college student
            could nab some free food?
            <br/><br/>
            I quickly built a simple Android app for sending and receiving alerts about free food being available.
            <Box padding={2}>
              <ImageList cols={2}>
                <ImageListItem>
                  <img src="https://imgur.com/LYv7sjk.png" loading="lazy" alt="SSO sign in page"/>
                </ImageListItem>
                <ImageListItem>
                  <img src="https://imgur.com/QmOvDPt.png" loading="lazy" alt="Alerts page"/>
                </ImageListItem>
              </ImageList>
            </Box>
            Then we built out a backend for managing the food announcements, push notifications, and even SMS alerts.
            I'm writing this long after the fact so I don't have many details or screenshots, but I remember that while
            developing the backend, I was worried about sending passwords in clear text to the server and I started
            researching cryptography. I ended up writing my own implementation of the Diffie-Hellman key exchange before
            I realized I could just use https. This is why junior devs should not be left unattended.
          </Typography>
          <Stack sx={{paddingTop: 0, paddingBottom: 4}}
                 direction="row"
                 spacing={2}
                 justifyContent="center">
            <Button href="https://github.com/lbenedetto/FoodRescue"
                    variant="contained">
              View Source Code
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}