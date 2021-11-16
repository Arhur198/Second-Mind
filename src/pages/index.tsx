import type { NextPage } from "next";
import SaveEnvironment from "ui/components/feedback/SaveEnvironment/SaveEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextFieldMask from "ui/components/inputs/TextField/TextFieldMask/TextFieldMask";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div style={{ marginTop: "35px" }}>
      <SaveEnvironment />
      <PageTitle
        title={"SECOND MIND"}
        subTitle={
          "Nossa missão é buscar tecnologias que garantam a qualidade e produtividade dos produtos desenvolvidos para nossos clientes."
        }
        text={
          "A Second Mind é uma empresa de tecnologia que visa oferecer soluções que direcionem a inovação nos processos administrativos de seus clientes."
        }
        subText={
          "Atuamos com a responsabilidade de levar as melhores soluções tecnológicas para nossos clientes."
        }
      />

      <Container>
        <img
          style={{
            width: "1024px",
            height: "450px",
            marginLeft: "50px",
          }}
          src={"/img/photos/Qual-a-tecnologia.jpg"}
          alt={"tecnologies"}
        />
      </Container>

      <div id={"Cliente"}>
        <PageTitle
          subTitle={
            "Tratamos nosso clientes de maneira impar, confira abaixo algumas empresas que confiam em nosso trabalho."
          }
        />
        <Container>
          <img
            style={{
              width: "100%",
              height: "35%",
              justifyContent: "center",
              alignItems: "center",
            }}
            src={"/img/photos/photo/Capturar.png"}
            alt={"Clientes"}
          />
        </Container>
      </div>

      <PageTitle
        subTitle={"Entre em contato com a nossa equipe"}
        subText={"Contate-nos para ter um software na medida para sua empresa."}
      />
      <PageTitle subText={"Telefone: +55 31 98396-6061"} />
      <PageTitle subText={"E-mail: contato@secondmind.com.br"} />
      <PageTitle subText={"Endereço: Rua Cataguases, 323 A"} />
      <PageTitle subText={"CEP: 36406-109"} />
      <PageTitle subText={"Conselheiro Lafaiete – MG"} />

      <Container style={{ padding: "20px" }}>
        <PageTitle subText={"Tire suas Dúvidas e começe agora mesmo!"} />
        <div
          id="Começar"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <TextFieldMask
            variant={"outlined"}
            label={"Digite seu nome"}
            mask={""}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
            MozPaddingEnd: "10px",
          }}
        >
          <TextFieldMask
            mask={"+99 (99)99999-9999"}
            label={"Digite seu celular"}
            variant={"outlined"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <TextFieldMask
            label={"Digite seu e-mail"}
            variant={"outlined"}
            mask={""}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <TextFieldMask
            label={"Digite sua mensagem"}
            variant={"outlined"}
            mask={""}
          />
        </div>
        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{
            width: "220px",
            marginTop: "10px",
            marginLeft: "40%",
          }}
        >
          Enviar
        </Button>
      </Container>
    </div>
  );
};

export default Home;
