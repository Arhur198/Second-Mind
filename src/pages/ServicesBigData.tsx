import React from "react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

const ServicesBigData: React.FC = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <img
        src={"/img/photos/photo/bigData.PNG"}
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
    </div>
  );
};

export default ServicesBigData;
