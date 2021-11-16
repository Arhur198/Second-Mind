import React from "react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

const Apis: React.FC = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <img
        src={"/img/photos/photo/apis.PNG"}
        style={{ width: "100%", height: "50%" }}
      />
      <PageTitle
        subText={
          "“Application Programming Interface“ ou API é uma forma de integração de sistemas baseada na segurança dos dados e na facilidade de intercâmbio de informações entre diferentes linguagens de programação."
        }
      />
      <PageTitle
        subText={
          "As APIs podem se comunicar entre si sem intervenção de usuários e com diferentes ambientes. Elas utilizam uma interface que define seus comportamentos específicos e liga diversas funções dos sistemas de maneira que possam ser utilizadas em variadas aplicações."
        }
      />
      <PageTitle
        subText={
          "Qualquer empresa pode ser beneficiada com este tipo solução, pois as APIs possibilitam a integração entre aplicações, elas colaboram para que a empresa dona da plataforma que está sendo acessada pelo usuário tenha acesso a informações importantes sobre quem navega no ambiente e descomplica as integrações de forma geral."
        }
      />
    </div>
  );
};

export default Apis;
