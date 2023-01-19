import Typography from "@mui/material/Typography";
import React from "react";
import Container from "@mui/material/Container";
import {Button, Link, Paper, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Image, {Video} from "./Media";
import ArticleHeader from "./Article";

export default function ChalkJotto() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/HoQT9xi.png"}
        title={"Map Of Reddit"}
        date={"15th December 2017"}
        category={"Fun with Data"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={2}>
            Understanding this post requires at least a cursory understanding of what Reddit is. If you don’t know what
            Reddit is, I highly recommend <Link href="https://www.youtube.com/watch?v=tlI022aUWQQ">this video by CGP Grey</Link>.
            <br/><br/>
            When I realized that almost every subreddit on Reddit has links to subreddits about similar topics contained
            in an easily accessible part of the page thanks to <Link href="https://www.reddit.com/dev/api/#GET_sidebar">Reddit’s
            REST API</Link>, I knew I had to find a way to make a map of the connections between all of the subreddits on
            Reddit. Not because it would be useful, but because it would be cool.
            <br/><br/>
            So, I whipped up a web crawler in Java and used <Link href="https://github.com/google/gson">gson</Link> to parse
            the JSON responses. The related subreddits were added to a Queue and are retrieved in FIFO order. A Graph
            data structure of Nodes and Edges is maintained until the crawling is done, at which point it is exported to
            CSV format and imported into a program called <Link href="https://gephi.org/">Gephi</Link>, which can be used to
            build the following visualizations.
          </Typography>
          <Image url="https://i.imgur.com/uEbEpst.jpeg" alt="Densely packed clusters of related subreddits"/>
          <Typography lineHeight={2} padding={2}>
            There are nearly a million subreddits, each one with an average of 10 connections, so I had to trim down the
            data set to a more manageable size. I chose to limit it to only subreddits with more than 1,000 subscribers.
            This leaves some subreddits stranded, with no links to them from the central cluster, and as such they form
            a sort of reddit “Oort cloud”. Nodes are subreddits, edges are links between subreddits, and node size is
            determined by number of subscribers to that subreddit. I ran an algorithm called OpenOrd to form the
            clusters, and used those clusters of subreddits with high mutual linkage to determine node color.
          </Typography>
          <Image url="https://i.imgur.com/HoWZSx4.jpeg" alt="Clusters have been spead out"/>
          <Typography lineHeight={2} padding={2}>
            Then, I ran an expansion algorithm to spread out the densely packed clusters to make it easier to see what is going on.
          </Typography>
          <Image url="https://i.imgur.com/Ujz2fDG.png" alt="Lines between nodes removed"/>
          <Typography lineHeight={2} padding={2}>
            Next, I hide the edges between nodes, again in the interest of clarity.
          </Typography>
          <Image url="https://i.imgur.com/tlEDP99.png" alt="Clusters labeled with their category"/>
          <Typography lineHeight={2} padding={2}>
            I did some poking around in Gephi to determine which category each cluster was comprised of, and labeled
            them in Photoshop. Probably the most interesting trend I found while poking around was that gay porn
            subreddits tended to link to LGBTQ support group subreddits, which in turn linked to self improvement
            subreddits, which explains the proximity of the porn cluster to the self improvement cluster.
          </Typography>
          <Image url="https://i.imgur.com/J7Qe3Y0.jpeg" alt="Large subreddits labelled"/>
          <Typography lineHeight={2} padding={2}>
            In this image I enabled node labels for subreddits with more than 10,000 subscribers. All of the images in
            this post are high resolution (4000×4000) so if you open them in a new tab you’ll be able to zoom in very
            far and read the labels much easier.
            <br/><br/>
            The algorithm that generates these graphs is actually a sort of physics simulation, so watching it simulate
            the graph looks very cool. Below are a few gifs of the process in action.
          </Typography>
          <Video url="https://i.imgur.com/TbLUDaa.mp4"/>
          <Video url="https://giant.gfycat.com/UnlinedCreativeBarasinga.webm"/>
          <Typography lineHeight={2} padding={2}>
            I also had the scraper gather the creation date for the subreddits, and made an animation where the output
            was filtered by year, in order to display the growth of reddit over time.
          </Typography>
          <Video url="https://i.imgur.com/Ud9tLma.mp4"/>
          <Video url="https://giant.gfycat.com/UnfoldedAcceptableChuckwalla.webm"/>
          <Typography lineHeight={2} padding={2}>
            The final addition to this project was a map of the power moderators of Reddit. Because of the extreme
            number of edges in this case, I limited the scope of the scraping and visualization to only moderators of
            the 49 default subreddits. Each moderator got a node, and each edge meant that those moderators shared a
            subreddit. The more subreddits two moderators share, the higher the edge weight. The more subscribers that
            moderator was in charge of, the large their node.
          </Typography>
          <Image url="https://i.imgur.com/13iqwkH.jpeg" alt="Network graph of reddit moderators"/>
          <Typography lineHeight={2} padding={2}>
            The 49 default subs have a total of 2627 moderators, with 2,673,294 connections between them. The top 10
            moderators on Reddit are in charge of between 43 million to 200 million users each. Again, colored clusters
            represent high degrees of linkage. This means that that small group of moderators have all added each other
            to their respective subreddits.
            <br/><br/>
            As a followup to this project, I also downloaded Wikipedia’s SQL database and parsed through it to generate
            a similar data set. However, with over 5 million articles, each easily containing over 50 links, the data
            set was too large to be handled by Gephi. And I was unfortunately not able to come up with a satisfactory
            way of filtering down which articles would be included, and eventually lost interest in the project and
            moved on in favor of more interesting projects.
          </Typography>
          <Stack sx={{paddingTop: 2, paddingBottom: 2}}
                 direction="row"
                 spacing={2}
                 justifyContent="center">

            <Button href="https://github.com/lbenedetto/RedditCrawler"
                    variant="outlined">
              View Source Code
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}