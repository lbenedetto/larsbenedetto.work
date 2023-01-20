import Container from "@mui/material/Container";
import ArticleHeader from "./Article";
import React from "react";
import Box from "@mui/material/Box";
import {ImageList, ImageListItem, Link, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function VinScanner() {
  return (
    <Container sx={{paddingY: 8}} maxWidth="md">
      <ArticleHeader
        imgUrl={"https://imgur.com/w6nCgmr.png"}
        title={"VIN Scanner"}
        date={"21st November 2017"}
        category={"Utility: Android"}
      />
      <Box paddingTop={2}>
        <Paper elevation={1}>
          <Typography lineHeight={2} padding={4}>
            When I started working at VIP Traders my job was to organize paperwork into folders. I would eventually
            transition into writing software to automate large portions of mine and others jobs, and the first step in
            that transition was an Android app.
            <br/><br/>
            I noticed that my coworkers were having to walk around our parking lot writing down the VIN numbers of the
            cars on a piece of paper, and then typing them into a spreadsheet. If that isn’t a prime candidate for
            automation, then I don’t know what is. So I wrote a demo project at home, and presented it to the CEO. They
            agreed that it would be an improvement, and I was reassigned from filing to software development. As per
            their requested specs, the app scans a VIN barcode, and allows the user to submit all the scanned VINs to a
            new Google Sheets spreadsheet. Pretty nifty.
            <Box padding={2}>
              <ImageList cols={2}>
                <ImageListItem>
                  <img src="https://imgur.com/L3DcTbh.png" loading="lazy"
                       alt="Camera screen of app scanning a VIN bar code"/>
                </ImageListItem>
                <ImageListItem>
                  <img src="https://imgur.com/hTNQcuT.png" loading="lazy"
                       alt="VIN is scan, user is prompted for some info"/>
                </ImageListItem>
              </ImageList>
            </Box>
            Point the camera at a bar code, and the code is scanned and the user is prompted for some basic data. All
            the info ends up in a google spreadsheet and is viewable in the app
            <br/><br/>
            While I was working on the app, I noticed another coworker importing photos from a camera, and renaming the
            files after the VIN, which he was typing in manually for each vehicle. So I extended the app to run on the
            companies Samsung Galaxy Cam 2’s and added a feature for capturing and storing photos.
            Once a VIN has been scanned in, a button becomes available that leads to a page that prompts the user to
            take the photos they are supposed to take. The photos are saved to the camera and are named with a naming
            convention based off of the VIN.
            <Box padding={2}>
              <ImageList cols={2}>
                <ImageListItem>
                  <img src="https://imgur.com/O65BGYd.png" loading="lazy"
                       alt="All the info ends up in a spreadsheet and is viewable in the app"/>
                </ImageListItem>
                <ImageListItem>
                  <img src="https://imgur.com/IzMdkTf.png" loading="lazy"
                       alt="Screen prompting user to take pictures of car from various angles"/>
                </ImageListItem>
              </ImageList>
            </Box>
            This was a very fun project for me to develop as it was my first real project outside of school and it
            really pushed the boundaries of my abilities. I learned a ton about Android app development, and “invented”
            what I would later learn are called asynchronous callbacks. At the time, I called them “Post Execution
            Runnables”.
            <SyntaxHighlighter language="java" style={darcula}>
              {`CreateSpreadsheetTask task = new CreateSpreadsheetTask(sheetName, context);
task.setPostExecuteRunnable(new Runnable() {
  @Override
  public void run() {
    // do stuff
  }
});
task.execute();`}
            </SyntaxHighlighter>
            I thought this solution was very cool and was not at all surprised to find that its a not a new idea in the
            slightest.
            <br/><br/>
            Special thanks to <Link href="https://github.com/bees4honey/mobile_vin_scanner">bees4honey</Link> for
            providing the open source VIN scanning C library needed to scan in VIN barcodes.
            <br/>
            Unfortunately, I cannot share a link to the GitHub repository for the project, as it contains sensitive
            information for the company.
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}