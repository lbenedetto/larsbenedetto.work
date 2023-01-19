import Typography from "@mui/material/Typography";
import React from "react";
import Container from "@mui/material/Container";
import {Button, Link, Paper, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {TwitterTweetEmbed} from "react-twitter-embed";
import Image from "./Media";
import ArticleHeader from "./Article";

export default function CaptainMarkov() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://i.imgur.com/r79BZ62.png"}
        title={"Captain Markov"}
        date={"1st November 2017"}
        category={"Fun with Data"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={2}>
            When I first came across bots running on <Link href="https://en.wikipedia.org/wiki/Markov_chain">Markov
            Chains</Link> on the internet, I knew I had to make my own. I decided that a Twitter bot that generates and
            tweets Captains Logs as in the Star Trek franchise would be pretty cool. So I spent some time learning how
            to build the various components I would need. A web scraper for gathering the scripts, the code required to
            interface with Twitter, a MarkovChain class and the data structures and UI it would rely on.
            <br/>
            The most interesting part of this project was MarkovChain, and of course the hilarious output. The account
            gained some traction when Wil Weaton, an actor on the show, followed the account and retweeted several of
            its posts.
            <br/>
            First lets look at some examples, and then we’ll dive into how it works.
          </Typography>
          <Box padding={2}>
            <TwitterTweetEmbed tweetId={'720785552253919232'}
                               placeholder="Captain's log, supplemental. Our search for anything of relevance in the universe can stop. Apparently, our information was incorrect."/>
            <TwitterTweetEmbed tweetId={'692981830786666496'}
                               placeholder="Captain's log, stardate 41309.5. We have rendezvoused with ourselves."/>
            <TwitterTweetEmbed tweetId={'692998619641876480'}
                               placeholder="Captain's log, supplemental. Unmanned probes have ceased, and to avoid escalating tensions, I am becoming all life forms."/>
            <TwitterTweetEmbed tweetId={'696089982675456002'}
                               placeholder="Captain's log, stardate 45733.6. Temporary repairs to the repairs."/>
            <TwitterTweetEmbed tweetId={'712964223211442176'}
                               placeholder="PICARD: Doesn't love always begin that way? With the power to initiate a level two security alert."/>
          </Box>
          <Typography lineHeight={2} padding={2}>
            In general, a Markov Chain is a statistical model that relates a word (or character) to the probability of
            any other word (or character) occurring after it. The core data structure of the program used to accomplish
            this is a Hashtable&lt;String, Vector&lt;String&gt;&gt;.
            <br/>
            <br/>
            Every line of the script is broken down and fed into the Hashtable. In order to increase coherence, the bot
            uses a chain length of 3. To achieve this, a line is broken down in the following manner:
            <br/>
            <br/>
            Input line: “Captain’s Log, stardate 8654.5, this is an example”
            <br/>
            Output strings: “Captain’s Log,”, “Log, stardate”, “stardate 8654.5”, “8654.5, this”, “this is”, “is an”,
            “an example”
            <br/>
            <br/>
            That way, at a minimum, any 3 words in order in the output are guaranteed to have occurred at least once in
            the original scripts.
            <br/>
            <br/>
            When these strings are fed into the Hashtable, the result is that any two words can be used as a key to
            retrieve a list of word pairs that have occurred after them. Note that because this is a Vector (basically
            just an Array) and not a Set, duplicates will exist. The number of duplicates of an entry affects the
            probability of selecting that path, thus satisfying the <Link href="https://en.wikipedia.org/wiki/Markov_property">Markov property</Link>.
            <br/>
            <br/>
            If “Captain’s Log,” is used as the starting word pair, it will select randomly from the list of word pairs
            that have occurred after that. For example, the Vector for that “seed” might
            be [“Log, stardate”, “Log, supplemental”].
            <br/>
            It is easy to see how this method of choosing the next word in the phrase based on how likely it is for that
            word to occur after the previous word in the source data set can lead to a coherent and humorous output.
            <br/>
            <br/>
            I also built a GUI for customizing exactly how the scripts were parsed to allow myself to generate dialog
            from specific characters, or even scene change notes. I also experimented with a Treknobabble generator to
            generate phrases that used as few words from the top 10,000 most common words as possible, but the results
            were less than satisfying. Outputs usually just contained peoples names and other “uncommon” words, rather
            than containing unique Star Trek technical words.
          </Typography>
          <Image url="https://i.imgur.com/095Sg1N.png" alt="The desktop UI"/>
          <Stack sx={{paddingTop: 0, paddingBottom: 2}}
                 direction="row"
                 spacing={2}
                 justifyContent="center">
            <Button href="https://twitter.com/captain_markov"
                    variant="contained">
              View Twitter Account
            </Button>

            <Button href="https://github.com/lbenedetto/CaptainMarkov"
                    variant="outlined">
              View Source Code
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}