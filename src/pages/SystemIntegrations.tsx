import React from "react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

const SystemIntegrations: React.FC = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <img
        src={"/img/photos/photo/integracao.PNG"}
        style={{ width: "100%", height: "50%" }}
      />
      <PageTitle
        subText={
          "Quando nos referimos a “integração de sistemas” estamos referenciando a uma atividade de desenvolvimento de software em que componentes de software separados são combinados em aplicação."
        }
      />
      <PageTitle
        subText={
          "As empresas muitas vezes não conseguem fazer com que sua própria estrutura gerencial acompanhe o crescimento financeiro de projetos, fazendo  com que fique cada vez mais difícil gerenciar seus recursos o que acaba desconectando áreas, devido a falta de acesso à informação ou à sua perda durante os diversos processos existentes."
        }
      />
      <PageTitle
        subText={
          "Para gerar acesso a informações relevantes  é necessário combinar dados armazenados em vários sistemas que precisam integrar-se para que informações sejam geradas."
        }
      />
      <PageTitle
        subText={
          "A integração de sistemas na empresa  possibilitará que a gestão macro da empresa seja realizada com menor burocracia e maior eficiência."
        }
      />
      <PageTitle
        subText={
          "Criamos softwares capazes de integrar seus sistemas garantindo a segurança das informações que serão transmitidas."
        }
      />
    </div>
  );
};

export default SystemIntegrations;
