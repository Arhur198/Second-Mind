import React from "react";
import {
  PageTitleContainer,
  PageTitleTextTitle,
  PageTitleTextSubTitle,
  PageTitleTextText,
  PageTitleTextSubText,
} from "./PageTitle.style";
import { Container } from "@mui/material";

interface PageTitleProps {
  title?: string;
  subTitle?: string | JSX.Element;
  text?: string;
  subText?: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <Container>
        <PageTitleTextTitle>{props.title}</PageTitleTextTitle>
        <PageTitleTextSubTitle>{props.subTitle}</PageTitleTextSubTitle>
        <PageTitleTextText>{props.text}</PageTitleTextText>
        <PageTitleTextSubText>{props.subText}</PageTitleTextSubText>
      </Container>
    </PageTitleContainer>
  );
};

export default PageTitle;
