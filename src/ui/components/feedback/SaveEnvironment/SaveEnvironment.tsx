import React from "react";
import { SaveEnvironmentContainer } from "./SaveEnvironment.style";
import { Container } from "@mui/material";
import { on } from "events";

const SaveEnvironment = () => {
  return (
    <SaveEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SaveEnvironmentContainer>
  );
};

export default SaveEnvironment;
