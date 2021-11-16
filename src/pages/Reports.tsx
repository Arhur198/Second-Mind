import React from "react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

const Reports: React.FC = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <img
        src={"/img/photos/photo/reports.PNG"}
        style={{ width: "100%", height: "50%" }}
      />
      <PageTitle
        subText={
          "Desenvolvemos servidor de relatórios com níveis de acesso bem definidos e relatórios customizados de acordo com sua necessidade e demanda."
        }
      />
      <PageTitle
        subText={
          "Trabalhamos como variados tipos de tecnologia como o Report Server, Power BI e Tableau."
        }
      />
      <PageTitle
        subText={
          "Esses servidores permitem nivelar o acesso aos mais diferentes relatórios limitando os usuários de acordo com os papéis que eles ocupam na empresa permitindo um maior controle de acessos a dados"
        }
      />
      <PageTitle
        subText={
          "Os relatórios agregam métricas de itens de trabalho e resultados de testes. A maioria dos relatórios fornece filtros que podem ser usados para especificar conteúdos a incluir no relatório. Os filtros incluem período de tempo, iteração e caminhos de área, tipos de item de trabalho e estados do item de trabalho. As perguntas que eles respondem relacionam-se a todos os tipos de itens de trabalho."
        }
      />
    </div>
  );
};

export default Reports;
