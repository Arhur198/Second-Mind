import React from "react";
import { HeaderAppBAr, HeaderLogo } from "./Header.style";
import { Toolbar, Container, Button } from "@mui/material";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "next/link";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex" }}>
      <HeaderAppBAr position={"fixed"}>
        <Toolbar component={Container}>
          <HeaderLogo src={"/img/logos/logo-icon.png"} alt={"second-mind"} />
          <Button style={{ marginLeft: "25%" }}>
            <p>
              <a href={"/"}>Início</a>
            </p>
          </Button>
          <Button style={{ marginLeft: "5%" }}>
            <p>
              <a href={"/Resources"}>Recursos</a>
            </p>
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={anchorEl === null ? handleClick : handleClose}
            style={{ marginLeft: "5%" }}
          >
            Serviços
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <p>
                <a href={"/ServicesBigData"}>Big Data</a>
              </p>
            </MenuItem>
            <MenuItem>
              <p>
                <a href={"/WebApplications"}>Aplicações Web</a>
              </p>
            </MenuItem>
            <MenuItem>
              <p>
                <a href={"/Aplications"}>Aplicativos</a>
              </p>
            </MenuItem>
            <MenuItem>
              <p>
                <a href={"/Apis"}>Apis</a>
              </p>
            </MenuItem>
            <MenuItem>
              <p>
                <a href={"/Reports"}>Reports</a>
              </p>
            </MenuItem>
            <MenuItem>
              <p>
                <a href={"/SystemIntegrations"}>Integração de Sistemas</a>
              </p>
            </MenuItem>
          </Menu>
          <Button style={{ marginLeft: "5%" }}>
            <p>
              <a href={"#Cliente"}>Clientes</a>
            </p>
          </Button>
          <Button style={{ marginLeft: "5%" }}>
            <p>
              <a href={"#Começar"}>Começar</a>
            </p>
          </Button>
        </Toolbar>
      </HeaderAppBAr>
    </div>
  );
};

export default Header;
