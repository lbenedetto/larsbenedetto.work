import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ProjectGridHeader/>
      <ProjectGrid/>
    </>
  )
}

function ProjectGridHeader() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        paddingTop: 8
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          My Projects
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Games, Utilities, Data Visualization, or just playing around with code
        </Typography>
      </Container>
    </Box>
  );
}

function ProjectGrid() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <Grid container spacing={4}>
        <Project
          title="Confidently Incorrect"
          blurb="A multiplayer quiz game where you give the answer in the form of a 95% confidence interval"
          postUrl="/blog/ConfidentlyIncorrect"
          imgUrl="https://i.imgur.com/z3KqkMN.png"
        />
        <Project
          title="Chalk Jotto"
          blurb="A logic-oriented word game based on the classic pen and paper game Jotto"
          postUrl="/blog/ChalkJotto"
          imgUrl="https://i.imgur.com/awnlRhq.png"
        />
        <Project
          title="Doctor Markov"
          blurb="Using a Markov Chain to generate SCP Foundation articles"
          postUrl="/blog/DoctorMarkov"
          imgUrl="https://i.imgur.com/ze8AoKi.png"
        />
        <Project
          title="Food Rescue"
          blurb="Saving food from going to waste on a college campus"
          postUrl="/blog/FoodRescue"
          imgUrl="https://imgur.com/2eKTEdG.png"
        />
        <Project
          title="Pickup Scheduler"
          blurb="Planning the optimal route to visit all customers using K-Means clustering"
          postUrl="/blog/PickupScheduler"
          imgUrl="https://imgur.com/DuTT6Sw.png"
        />
        <Project
          title="Paperclip Maximizer"
          blurb="Training an RNN to play a game about maximizing paperclips"
          postUrl="/blog/PaperclipMaximizer"
          imgUrl="https://i.imgur.com/OhPcMu3.png"
        />
        <Project
          title="Live Bus Map"
          blurb="A web app for viewing the live locations of all buses in Spokane"
          postUrl="/blog/LiveBusMap"
          imgUrl="https://i.imgur.com/QorHiBQ.png"
        />
        <Project
          title="Vin Scanner"
          blurb="An app to scan VINs and take pictures of cars in their inventory"
          postUrl="/blog/VinScanner"
          imgUrl="https://i.imgur.com/hNsVDDY.png"
        />
        <Project
          title="Map of Reddit"
          blurb="Crawling all of reddit and visualizing the data in interesting ways"
          postUrl="/blog/MapOfReddit"
          imgUrl="https://i.imgur.com/y8Rw3Uf.png"
        />
        <Project
          title="Captain Markov"
          blurb="Using a Markov Chain to generate Star Trek Captain's Logs"
          postUrl="/blog/CaptainMarkov"
          imgUrl="https://i.imgur.com/bocloA6.png"
        />
      </Grid>
    </Container>
  );
}

function Project({title, blurb, postUrl, imgUrl} : {
  title: string,
  blurb: string,
  postUrl: string,
  imgUrl: string
}) {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={postUrl} style={{ textDecoration: 'none' }}>
        <Card
          className="scaleOnHover"
          sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
        >
          <CardMedia
            component="img"
            image={imgUrl}
          />
          <CardContent sx={{flexGrow: 1}}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>
              {blurb}
            </Typography>
          </CardContent>
        </Card>
      </Link>

    </Grid>
  );
}