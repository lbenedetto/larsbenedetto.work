import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";
import Box from "@mui/material/Box";
import {Button, Link, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "./Media";

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
          <Typography lineHeight={2} padding={4}>
            This was originally a final project for my web development class, but I took it much farther than was required.
            Let’s go over the functionality, and then I’ll dive into the implementation.
            <br/><br/>
            The map shows the live location of all buses currently on the road. You can use the sidebar to filter out
            bus routes you don’t care about. Clicking on a bus toggles the route it is following being drawn on the map.
            Clicking on a bus stop gives you directions to it from your current location, as well as showing a list of
            buses that are scheduled to stop there soon, and how delayed they are.
            <Image url="https://imgur.com/X4ss7Do.png" alt="Map shows when the bus is scheduled to arrive at the selected stop"/>
            Originally we were supposed to build some rudimentary functionality by divining how Spokane Transit
            Authority’s (STA’s) API worked for their unreleased route planning site by monitoring network requests. But
            their API sucks. Or at least it did at the time. So I did a little digging and discovered that public
            transit providers around the world use something called The General Transit Feed Specification (GTFS) which
            is made by Google. There is also GTFS-R which is the real-time variant. STA had set up their own transit
            feed loosely following this specification and exposed the data in it through their REST API. I could also
            access the feed directly via some *.pb files on STA’s site. However, when you opened it, it looked basically
            like random binary data.
            <br/><br/>
            Thankfully, Google has <Link href="https://github.com/google/gtfs-realtime-bindings">GTFS Realtime
            Bindings</Link> on GitHub. Now instead of figuring out how to work STA’s clunky API, I could pull some of
            Google’s code, and extend it into a REST API of my own to use on the project. Google provided some PHP code
            that downloaded the latest pb file from the GTFS-R feed and parsed it out in a slightly usable, poorly
            documented PHP object. I spent a few hours poring through the several thousand line PHP file boiling it down
            into something I could actually comprehend (<Link
            href="https://github.com/google/gtfs-realtime-bindings">Full version</Link>, <Link
            href="https://github.com/lbenedetto/BusyBusAPIClient/blob/master/api/docs2.php">My version</Link>). I then turned the entire PHP object
            into an associative array that could be easily encoded as JSON. I also implemented some caching so I
            wouldn’t be putting to much strain on STA’s servers. As the front end progressed, I would break off the
            pieces I needed into an endpoint.
            <br/>
            After that all I needed was a bit of help from the Google Maps API documentation I had a functional (and
            useful!) client and server.
            <br/>
            Unfortunately, my site no longer works because the pb files it relied on are no longer publicly accessible.
            <Stack sx={{paddingTop: 2, paddingBottom: 4}}
                   direction="row"
                   spacing={2}
                   justifyContent="center">
              <Button href="https://larsbenedetto.work/livemap/"
                      variant="contained">
                View Web Page
              </Button>

              <Button href="https://github.com/lbenedetto/BusyBusAPIClient"
                      variant="outlined">
                View Source Code
              </Button>
            </Stack>
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}