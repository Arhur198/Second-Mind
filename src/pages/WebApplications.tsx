import React from "react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

const WebApplications: React.FC = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <img
        src={"/img/photos/photo/aplicacoesWeb.PNG"}
        alt={"Web Aplications"}
        style={{ width: "100%", height: "50%" }}
      />
      <PageTitle
        subText={
          "Construímos aplicações personalizadas para sustentar os processos executados na sua empresa de forma a garantir o crescimento acelerado da sua empresa."
        }
      />
      <PageTitle
        subText={
          "Trabalhamos como os mais diversos tipos de tecnologias para atender o cliente de maneira diferenciada e pontual."
        }
      />
      <PageTitle
        subText={
          "Aplicamos um gerenciamento tático e operacional, baseado na combinação dos métodos tradicionais e ágeis, para alavancar a transformação dos seus processos em soluções web."
        }
      />
      <PageTitle
        subText={
          "Garantimos a qualidade do software através de longas operações assistidas sem custo adicional  para os clientes."
        }
      />
    </div>
  );
};

export default WebApplications;
