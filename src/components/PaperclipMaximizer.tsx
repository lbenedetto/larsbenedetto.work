import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";
import Box from "@mui/material/Box";
import {Button, Link, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function PaperclipMaximizer() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/PV8Nbwa.png"}
        title={"Paperclip Maximizer"}
        date={"16th April 2018"}
        category={"AI"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={2}>
            I wanted to dip my toes to machine learning, and at the time, I was having fun playing a simple web game
            called <Link href="https://www.decisionproblem.com/paperclips/">Universal Paperclips</Link> based on the
            famous <Link href="https://wiki.lesswrong.com/wiki/Paperclip_maximizer">Paperclip Maximizer</Link> thought
            experiment in which an AI designed to make paperclips eventually destroys humanity in its pursuit of more
            paperclip making resources. So I decided to make a literal paperclip maximizing AI that would attempt to
            play the game. I admit the irony of the idea was a major factor in my decision to pursue it. Besides, what
            could go wrong?
            <br/><br/>
            I searched around for some Javascript machine learning libraries, and ultimately settled on <Link
            href="https://github.com/zefman/Brainwave">Brainwave.js</Link>, a JS utility that allows for easy creation,
            management, and training of configurable neural nets which improve themselves through the use of a genetic
            algorithm rather than the typical choice of gradient descent.
            <br/><br/>
            At first I set it up so it was only playing one game at a time, but quickly realized that training would
            take much too long. So I refactored my project to run 20 instances of the game at a time in the same browser
            window. I spent the next week leaving it running for a day, and then tweaking inputs parameters to try to
            get the AI’s to learn. I eventually succeeded in getting one of the AI’s to learn how to manage the price it
            was selling its paperclips for so that it could afford to buy more wire instead of running out of resources.
            A bit short of my lofty goals of converting the entire digital universe into paperclips, but I was satisfied
            with my results anyways.
            <br/><br/>
            One of the biggest mistakes I made early on was having far too many inputs. I instead did some basic
            manipulations in the inputs to decrease how many things the AI needed to pay attention to. For example,
            instead of including the current paperclip price, number produced per second, number sold per second, and
            whether or not the increase / decrease buttons were available, I performed a pre-calculation to determine
            the net amount of paperclips. Now the AI only had to figure out that if the value was negative it should
            increase prices, and if it was positive, it should decrease prices.
            <br/><br/>
            I’m excited to try more machine learning projects in the future. Next time I’d like to work on something more precise, rather than <Link href="https://xkcd.com/1838/">randomly stirring a pile of linear algebra</Link> until it can play a game.
          </Typography>
          <Stack sx={{paddingTop: 0, paddingBottom: 2}}
                 direction="row"
                 spacing={2}
                 justifyContent="center">
            <Button href="https://github.com/lbenedetto/PaperclipMaximizer"
                    variant="contained">
              View Source Code
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}