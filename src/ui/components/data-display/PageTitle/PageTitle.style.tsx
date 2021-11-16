import { styled } from "@mui/material/styles";

//Utilizção de Styled component para estilização dos componentes

//Possui respomsividade em relação ao tamanho da escrita em telas menores

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(5)} 0;
  text-align: center;
`;

export const PageTitleTextTitle = styled("p")`
  margin: ${({ theme }) => theme.spacing(1.5)} 0;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.primary.light};

  //Adaptação do tamanho da escrita em relação à pontos de quebra em diferentes telas
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;

export const PageTitleTextSubTitle = styled("h2")`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  color: ${({ theme }) => theme.palette.primary.dark};
  font-weight: 600;

  //Adaptação do tamanho da escrita em relação à pontos de quebra em diferentes telas
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
  }
`;

export const PageTitleTextText = styled("p")`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  color: ${({ theme }) => theme.palette.primary.light};
  font-weight: 500;

  //Adaptação do tamanho da escrita em relação à pontos de quebra em diferentes telas
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageTitleTextSubText = styled("p")`
  font-size: 1 ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.palette.primary.light};
  font-weight: 400;

  //Adaptação do tamanho da escrita em relação à pontos de quebra em diferentes telas
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
