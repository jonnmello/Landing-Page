import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/recidencial-fachada-moderna-esquina-espelhada-jayarquiteta.jpg";
import projImg2 from "../../assets/img/recidencial-fachada-moderna-jayarquiteta.jpg";
import projImg3 from "../../assets/img/recidencial-fachada-moderna-planta-jayarquiteta.jpg";
import projImg4 from "../../assets/img/recidencial-areagourmet-moderna-rustica-jayarquiteta.jpg";
import projImg5 from "../../assets/img/recidencial-areagourmet-pequena-planejada-jayarquiteta.jpg";
import projImg6 from "../../assets/img/recidencial-areagourmet-externo-pequena-jayarquiteta.jpg";
import interiorImg1 from "../../assets/img/interiores-quarto-moderno-suite-planejado-clean-jayarquiteta.jpg";
import interiorImg2 from "../../assets/img/interiores-quarto-bebe-begue-planejado-decorativo-jayarquiteta.jpg";
import interiorImg3 from "../../assets/img/interiores-cozinha-moderna-preta-planejada-jayarquiteta.jpg";
import interiorImg4 from "../../assets/img/interiores-quarto-casal-suite-planejada-moderna-jayarquiteta.jpg";
import interiorImg5 from "../../assets/img/interiores-saladetv-moderna-preta-pequena-jayarquiteta.jpg";
import interiorImg6 from "../../assets/img/interiores-areagourmet-preto-externo-indrustrial-jayarquiteta.jpg";
import comercialImg1 from "../../assets/img/comercial-fachada-loja-moderna-arquitetura.jpg";
import comercialImg2 from "../../assets/img/comercial-fachada-moderna-jayarquiteta.jpg";
import comercialImg3 from "../../assets/img/comercial-clinica-projetos-planejada-moderna-jayarquiteta.jpg";
import comercialImg4 from "../../assets/img/comercial-clinica-moderna-clean-branca-jayarquiteta.jpg";
import comercialImg5 from "../../assets/img/comercial-clinica-pediatria-moderna-tematica-jayarquiteta.jpg";
import comercialImg6 from "../../assets/img/comercial-escritorio-industrial-moderno-jayarquiteta.jpg";
import './styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projetos = () => {

  const projects = [
    {
      title: "Fachada",
      description: "Imponente",
      imgUrl: projImg1,
    },
    {
      title: "Cozinha",
      description: "Intimista",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: interiorImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: interiorImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: interiorImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: interiorImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: interiorImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: interiorImg6,
    },
  ];


  const projects3 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comercialImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comercialImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comercialImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comercialImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comercialImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comercialImg6,
    },
  ];

  return (
    <div className="projetos">
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>NOSSOS PROJETOS</h2>
                    <p>Lorem Ipsum is simply dummy text of the <strong>printing</strong> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Residencial</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Interiores</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Comercial</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                              projects2.map((project, index2) => {
                                return (
                                  <ProjectCard
                                    key={index2}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {
                              projects3.map((project, index2) => {
                                return (
                                  <ProjectCard
                                    key={index2}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>

      </section>
    </div>
  )
}
