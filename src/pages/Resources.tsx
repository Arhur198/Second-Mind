import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Resources: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "130px",
        flexWrap: "wrap",
        paddingLeft: "15%",
      }}
    >
      <div style={{ margin: "3px" }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/img/photos/photo/consultoria.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Consultoria
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ajudamos a nossos clientes a atingir seus objetivos e aumentar
                sua produtividade de forma eficaz e eficiente através de
                soluções que garantam uma maior segurança na tomada de decisão.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
      <div style={{ margin: "5px" }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/img/photos/photo/suporte.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Suporte
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Suporte corporativo com atendimento técnico remoto, central
                help-desk, visitas in-loco emergenciais e planos de suporte
                específicos para cada demanda.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
      <div style={{ margin: "5px" }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/img/photos/photo/codigo.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Código Flexivel
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Trabalhamos com grande variedade de linguagens de forma
                organizada e refatorável garantindo um código mais limpo e
                reutilizável através de boas práticas de desenvolvimento.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
      <div style={{ margin: "5px" }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/img/photos/photo/escola.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                New and Old School
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nossos projetos podem ser criados tanto utilizando a metodologia
                tradicional, atendendo um escopo específico ou utilizando
                metodologias ágeis
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
