import React from "react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

const Aplications: React.FC = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <img
        src={"/img/photos/photo/aplicativos.PNG"}
        style={{ width: "100%", height: "50%" }}
      />
      <PageTitle
        subText={
          "O mundo hoje encontra-se todo conectado e estar disponível na hora e no formato correto é primordial para todos os setores da indústria."
        }
      />
      <PageTitle
        subText={
          "Dispositivos móveis ganham cada vez mais importância no nosso dia-a-dia, fazendo-nos viver diferentes esperiências, além de compartilhar nossos pensamentos."
        }
      />
      <PageTitle
        subText={
          "O desenvolvimento de aplicativos possibilita a integração de diferentes serviços e processos com a finalidade de aproximar mais as pessoas dentro e fora do ambiente de trabalho."
        }
      />
      <PageTitle
        subText={
          "Aplicativos sob medida reduzem o custo e aumentam a produtividade e garantindo o retorno do investimento."
        }
      />
    </div>
  );
};

export default Aplications;
