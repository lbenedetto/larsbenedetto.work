import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";
import Box from "@mui/material/Box";
import {Button, Link, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function DoctorMarkov() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/o9I0tNh.png"}
        title={"Doctor Markov"}
        date={"16th June 2019"}
        category={"Web, Fun with Data"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={4}>
            I recently revisited one of my oldest real projects, <Link href="https://twitter.com/captain_markov">Captain
            Markov</Link>. It was a Twitter bot that used a Markov Chain to generate fake captains logs from Star Trek.
            I learned a lot doing, but I’ve learned much more since then. I decided to rewrite it into Kotlin and do
            some general clean up along the way.
            <br/><br/>
            Kotlin and the considerable experience I’ve gained these last few years allowed me to shrink the size and
            complexity of the project greatly. A whole system of classes I had been using to scrape scripts was
            compressed down to a single short function. And had much cleaner and more reliable output. I also simplified
            the core MarkovChain class and fixed some long-standing issues with it as well.
            <br/><br/>
            But I wasn’t satisfied to just rewrite an old project and not doing anything new with it, so decided I
            wanted to make it generate something else as well.
            <br/><br/>
            I had been reading a lot of <Link href="http://www.scp-wiki.net/">SCP Foundation</Link> articles at the
            time, and noticed that each article is very structurally similar to every other article. Additionally, the
            vocabulary and writing style is remarkably consistent. I believe it lends it’s self better to building a
            Markov model than Star Trek did.
            <br/><br/>
            So I found the SCP Foundation wiki’s robots.txt, downloaded their sitemap, and scraped all the articles.
            Made some changes to the bot to have it generate two types of paragraphs: “Containment Procedures” and a
            “Description”. It had some amusing outputs, so I generated 15,000 fake SCP articles, and uploaded them to my
            website.
            <br/><br/>
            Next, I downloaded the page of a random article, stripped it down, and added some javascript to fetch a
            randomly generated article from my server and display it to the user.
            <br/><br/>
            Articles number 1-3000 were generated with a chain length of 4, and articles above that were generated with
            a chain length of 3. A longer chain length generally means that the outputs will be more coherent because
            longer stretches of text are from the original source material.
            <br/><br/>
            I also wrote one of the articles myself, but you will only see it if you cause my PHP code to throw an
            exception.
          </Typography>
          <Stack sx={{paddingTop: 0, paddingBottom: 2}}
                 direction="row"
                 spacing={2}
                 justifyContent="center">
            <Button href="https://larsbenedetto.work/ThisScpDoesNotExist/"
                    variant="contained">
              View Generated Articles
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}