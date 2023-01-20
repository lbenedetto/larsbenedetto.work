import ArticleHeader from "./Article";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button, ImageList, ImageListItem, Link, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function PickupScheduler() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/qR9ugIY.png"}
        title={"Pickup Scheduler"}
        date={"25th May 2018"}
        category={"Mobile: Flutter"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={4}>
            Growing frustrated with repetitive weekly chore of loading a bunch of garbage into my roommates car and
            driving it down to the local recycling center, I decided to solve the problem once and for all. I sat down
            and made my problem ten times worse by taking it upon myself to handle not just my recycling but everyone
            else's recycling too.
            <br/><br/>
            Genius business plan in hand, I confirmed with the local city council that I was allowed to do this,
            and launched my first company, Ibis Recycling.
            <br/><br/>
            There were only two problems.
            <br/><br/>
            First of all, I can't drive. I solved that by paying my friend to do all the work
            for me while collecting whatever profits are left over. Isn't capitalism wonderful?
            <br/><br/>
            The second problem was how my friend should know which houses to visit, and in which order. And the solution
            to that problem is significantly more interesting, because it involves programming instead of economics.
            <br/><br/>
            And since I wanted to learn cross platform app development, I decided to make an app with Flutter to solve
            this issue.
            <Box padding={2}>
              <ImageList cols={3}>
                <ImageListItem>
                  <img src="https://imgur.com/1XMUUah.png" loading="lazy" alt="Calender page of app"/>
                </ImageListItem>
                <ImageListItem>
                  <img src="https://imgur.com/YgFCE4G.png" loading="lazy" alt="Customer list page of app"/>
                </ImageListItem>
                <ImageListItem>
                  <img src="https://imgur.com/Qi7Z3QR.png" loading="lazy" alt="Routing page of app"/>
                </ImageListItem>
              </ImageList>
            </Box>
            The schedule page shows which days of the week my driver needs to pick up recycling. The customer list page
            just shows all customers and their addresses. And the route planner page shows groups of customers to visit.
            The route planner screen is where all the interesting stuff happens. It uses a <Link
            href="https://stanford.edu/~cpiech/cs221/handouts/kmeans.html">K-Means cluster analysis algorithm</Link> to
            pick small groups of customers who live close to eachother, plan an optimal route from
            the users current location to all customers in the group and end at the recycling center.

            The app worked great but in the end I had to shut down the company when I moved to Denmark. On the whole,
            the company broke even. But at least a few of my friends got some easy drinking money.
          </Typography>
          <Stack sx={{paddingTop: 0, paddingBottom: 4}}
                 direction="row"
                 spacing={2}
                 justifyContent="center">
            <Button href="https://github.com/lbenedetto/PickupScheduler"
                    variant="contained">
              View Source Code
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}