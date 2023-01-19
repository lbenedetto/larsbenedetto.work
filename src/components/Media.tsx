import Box from "@mui/material/Box";
import {CardActionArea, ImageList, ImageListItem} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

class ImageProps {
  url: string
  alt: string

  constructor(url: string, alt: string) {
    this.url = url;
    this.alt = alt;
  }
}

export default function Image(props: ImageProps) {
  return (
    <Box padding={2} margin="auto">
      <ImageList cols={1}>
        <ImageListItem>
          <img
            src={props.url}
            alt={props.alt}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  )
}

export function Video({url}: { url: string }) {
  return (
    <Box padding={2}>
      <Card  raised={false}>
        <CardActionArea>
          <CardMedia
            component='video'
            image={url}
            autoPlay
            loop
          />
        </CardActionArea>
      </Card>
    </Box>
  )
}