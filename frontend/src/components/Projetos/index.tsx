import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import './styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import dbProjects from "../../shared/dbProjects";


export const Projetos = () => {
  const data = dbProjects;

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
                    <p>Nós da <strong>Jayanne Mendes </strong> acreditamos em um desenvolvimento de projeto contando a cada etapa com a <strong>participação dos nossos clientes</strong>. Ouvimos todos os <strong>desejos e necessidades</strong> para o espaço, para que possamos criar um projeto que reflita a essência e estilo de vida de cada um.
                      <br />
                      <br />
                      Tratamos cada cliente e cada projeto como <strong>únicos</strong>, e por isso fazemos <strong>projetos personalizados</strong> para cada cliente. Entendemos que tudo no projeto gira em torno da vivência do ser humano no espaço e é por isso que tem nossa assinatura em diversos <strong>projetos residências e comerciais</strong>, tanto construção como reforma.
                      <br />
                      <br />O projeto é o mapa que te levará a linha de chegada que é o seu <strong>sonho</strong>, e nós seremos o seu guia. Vamos juntos?</p>
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
                              data.projects.map((project, index) => {
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
                              data.projects2.map((project, index2) => {
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
                              data.projects3.map((project, index2) => {
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
