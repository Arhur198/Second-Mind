import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  Applist,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";
import { TextFieldStyled } from "ui/components/inputs/TextField/TextField.style";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Entre em contato com a nossa equipe</FooterTitle>
          <Typography
            variant={"body2"}
            sx={{ marginTop: "16px", textAlign: "justify" }}
          >
            Nossa missão é buscar tecnologias que garantam a qualidade e
            produtividade dos produtos desenvolvidos para nossos clientes. A
            Second Mind é uma empresa de tecnologia que visa oferecer soluções
            que direcionem a inovação nos processos administrativos de seus
            clientes. Atuamos com a responsabilidade de levar as melhores
            soluções tecnológicas para nossos clientes.
          </Typography>
        </Box>

        <img
          src={"/img/photos/Qual-a-tecnologia.jpg"}
          alt={"footer image"}
          style={{ width: "400px", height: "200px" }}
        />

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <Applist>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </Applist>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
