import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/recidencial-fachada-moderna-esquina-espelhada-jayarquiteta.webp";
import projImg2 from "../../assets/img/recidencial-fachada-moderna-jayarquiteta.webp";
import projImg3 from "../../assets/img/recidencial-fachada-moderna-planta-jayarquiteta.webp";
import projImg4 from "../../assets/img/residencial-area-gourmet-feira-de-santana-piscina-infinita-planta-moderna.jpg";
import projImg5 from "../../assets/img/residencial-fachada-feira-de-santana-reforma-moderna.jpg";
import projImg6 from "../../assets/img/residencial-Fachada-feira-de-santana-moderna-clean-neutra-planta.jpg";
import interiorImg1 from "../../assets/img/interiores-quarto-moderno-suite-planejado-clean-jayarquiteta.webp";
import interiorImg2 from "../../assets/img/interiores-homeoffice-escritorio-jayarquiteta.webp";
import interiorImg3 from "../../assets/img/interiores-cozinha-moderna-preta-planejada-jayarquiteta.webp";
import interiorImg4 from "../../assets/img/interiores-quarto-casal-suite-planejada-moderna-jayarquiteta.webp";
import interiorImg5 from "../../assets/img/interiores-saladetv-moderna-preta-pequena-jayarquiteta.webp";
import interiorImg6 from "../../assets/img/interiores-areagourmet-preto-externo-indrustrial-jayarquiteta.webp";
import comercialImg1 from "../../assets/img/comercial-fachada-loja-moderna-arquitetura.webp";
import comercialImg2 from "../../assets/img/comercial-fachada-moderna-jayarquiteta.webp";
import comercialImg3 from "../../assets/img/comercial-clinica-projetos-planejada-moderna-jayarquiteta.webp";
import comercialImg4 from "../../assets/img/comercial-clinica-moderna-clean-branca-jayarquiteta.webp";
import comercialImg5 from "../../assets/img/comercial-clinica-pediatria-moderna-tematica-jayarquiteta.webp";
import comercialImg6 from "../../assets/img/comercial-escritorio-industrial-moderno-jayarquiteta.webp";
import './styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projetos = () => {

  const projects = [

    {
      title: "FACHADA IMPACTANTE",
      description: "Essa fachada é o reflexo de muita dedicação e paixão. Ter um projeto é ter a certeza de que sua visão e estilo serão transformados em uma realidade palpável.",
      imgUrl: projImg6,
      alt: "Fachada moderna feira de santana",
    },
    {
      title: "ÁREA GOURMET",
      description: "Elegância e sofisticação são as palavras que definem esse projeto",
      imgUrl: projImg4,
      alt: "Área gourmet feira de santana reforma piscina infinita moderna",
    },
    {
      title: "FACHADA PERFEITA",
      description: "Cada projeto é único, assim como cada cliente, é por isso que nossos projetos são pensados para atender as necessidades e desejos de cada cliente",
      imgUrl: projImg5,
      alt: "Fachada moderna grande vegetação planta",
    },
    {
      title: "FACHADA IMPONENTE",
      description: "Uma fachada de esquina linda e moderna com os elementos preferidos do nosso cliente",
      imgUrl: projImg1,
      alt: "Fachada recidencial esquina",
    },
    {
      title: "FACHADA ELEGANTE",
      description: "Com poucas alterações estruturais, conseguimos fazer uma fachada moderna e extremamente elegante!",
      imgUrl: projImg2,
      alt: "Fachada moderna grande",
    },
    {
      title: "FACHADA MODERNA",
      description: "Modernizamos esta casa unificando seus volumes e demos um toque aconchegante com acabamento amadeirado",
      imgUrl: projImg3,
      alt: "Fachada com planta",
    },



  ];

  const projects2 = [
    {
      title: "SUÍTE MASTER",
      description: "Pense você voltar pra casa e encontrar um quarto lindo desse todos os dias?",
      imgUrl: interiorImg1,
      alt: "Suite master planejada moveis jayarquiteta",
    },
    {
      title: "HOME OFFICE",
      description: "Você gostaria de trabalhar em um ambiente como esse? confortável, bem iluminado, com espaço para guardar e organizar todas as pastas e objetos!",
      imgUrl: interiorImg2,
      alt: "Home Office pequeno planejado jayarquiteta",
    },
    {
      title: "COZINHA PLANEJADA",
      description: "A cozinha é um dos ambientes que exigem mais atenção na hora de projetar uma casa. é preciso pensar na funcionalidade do espaço, encaixar os elétros que o cliente deseja, se atentar aos pontos elétricos e hidrossanitários, além de tudo isso, ela não pode ser apenas funcional, mas também linda.",
      imgUrl: interiorImg3,
      alt: "Cozinha Planejada preta moderna jayarquiteta",
    },
    {
      title: "SUÍTE MASTER",
      description: "Uma cama grande e confortável, uma poltrona pra leitura, iluminação aconchegante, e uma penteadeira perfeita.",
      imgUrl: interiorImg4,
      alt: "Suite master clean jayarquiteta",
    },
    {
      title: "SALA DE TV",
      description: "De tirar o fôlego! tem coisa melhor que chegar em casa e ter um lugar como esse te esperando pra relaxar, pegar a pipoca e assistir um filme com a família?",
      imgUrl: interiorImg5,
      alt: "Sala de TV planejada pequena jayarquiteta",
    },
    {
      title: "ÁREA GOURMET",
      description: "O projeto de interiores é extremamente importante pra o bom andamento de uma obra. É nele que escolhemos materiais, definimos onde cada móvel, eletrodoméstico irá pra então localizarmos toda a parte de tomadas e pontos",
      imgUrl: interiorImg6,
      alt: "Area Gourmet grande moderna jayarquiteta",
    },
  ];


  const projects3 = [
    {
      title: "FACHADA ATRAENTE",
      description: "A fachada é o cartão postal de qualquer estabelecimento, a primeira impressão é a que fica. Qual impressão você deseja passar pra seu cliente?",
      imgUrl: comercialImg1,
      alt: "Fachada comercial loja jayarquiteta",
    },
    {
      title: "FACHADA MODERNA",
      description: "A necessidade do cliente era ter uma fachada com características que impressionassem, trouxesse maior conforto aos seus clientes e parceiros mas contendo um certo ponto de equilíbrio",
      imgUrl: comercialImg2,
      alt: "Fachada advogacia jayarquiteta",
    },
    {
      title: "FACHADA FORTE",
      description: "Uma fachada bonita, moderna e visualmente agradável, atraindo o público que passa pelo local",
      imgUrl: comercialImg3,
      alt: "Fachada pet jayarquiteta",
    },
    {
      title: "CLÍNICA RECEPÇÃO",
      description: "Um ambiente muito complexo, onde tivemos muitas soluções estéticas e funcionais para dar aos pacientes tudo que eles tem direito e o principal: um espaço aconchegante",
      imgUrl: comercialImg4,
      alt: "Clinica geral planejada jayarquiteta",
    },
    {
      title: "CONSULTÓRIO PEDIÁTRICO",
      description: "Tenho certeza que os minis pacientes vão aaaaaaamar ir ao médico num espaço lúdico como esse",
      imgUrl: comercialImg5,
      alt: "Consultorio pediatrico planejado moderno jayarquiteta",
    },
    {
      title: "SALA ADVOCACIA",
      description: "Nesse projeto o objetivo era ter um espaço aconchegante, mas que transmitisse confiança e credibilidade. Qual mensagem você quer transmitir pra seus clientes?",
      imgUrl: comercialImg6,
      alt: "Sala advocacia moderna planejada jayarquiteta",
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
                    <p>Nós do escritório <strong>Jayanne Mendes </strong> acreditamos em um desenvolvimento de projeto contando a cada etapa com a <strong>participação dos nossos clientes</strong>. Ouvimos todos os <strong>desejos e necessidades</strong> para o espaço, para que possamos criar um projeto que reflita a <strong>essência e estilo de vida</strong> de cada um.

                    </p>
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
