import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import {CalendarMonth, Category} from "@mui/icons-material";
import React from "react";

class ArticleHeaderProps {
  imgUrl: string
  title: string
  date: string
  category: string

  constructor(imgUrl: string, title: string, date: string, category: string) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.date = date;
    this.category = category;
  }
}

export default function ArticleHeader(props: ArticleHeaderProps) {
  return (
    <>
      <CardMedia
        component="img"
        image={props.imgUrl}
      />
      <Typography variant="h4" component="h2" paddingTop={2}>
        {props.title}
      </Typography>
      <Stack sx={{paddingTop: 2, paddingBottom: 2}}
             direction="row"
             spacing={1}
             justifyContent="left">
        <CalendarMonth/>
        <Typography paddingRight={2}>{props.date}</Typography>
        <Category/>
        <Typography>{props.category}</Typography>
      </Stack>
    </>
  )
}