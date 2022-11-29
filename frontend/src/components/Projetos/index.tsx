import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/recidencial-fachada-moderna-esquina-espelhada-jayarquiteta.jpg";
import projImg2 from "../../assets/img/recidencial-fachada-moderna-jayarquiteta.jpg";
import projImg3 from "../../assets/img/recidencial-fachada-moderna-planta-jayarquiteta.jpg";
import projImg4 from "../../assets/img/recidencial-areagourmet-moderna-rustica-jayarquiteta.jpg";
import projImg5 from "../../assets/img/recidencial-areagourmet-pequena-planejada-jayarquiteta.jpg";
import projImg6 from "../../assets/img/recidencial-areagourmet-externo-pequena-jayarquiteta.jpg";
import interiorImg1 from "../../assets/img/interiores-quarto-moderno-suite-planejado-clean-jayarquiteta.jpg";
import interiorImg2 from "../../assets/img/interiores-homeoffice-escritorio-jayarquiteta.jpg";
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
      title: "Fachada Imponente",
      description: "Uma fachada de esquina linda e moderna com os elementos preferidos do nosso cliente",
      imgUrl: projImg1,
    },
    {
      title: "Fachada Elegante",
      description: "Com poucas alterações estruturais, conseguimos fazer uma fachada moderna e extremamente elegante!",
      imgUrl: projImg2,
    },
    {
      title: "Fachada Moderna",
      description: "Modernizamos esta casa unificando seus volumes e demos um toque aconchegante com acabamento amadeirado",
      imgUrl: projImg3,
    },
    {
      title: "Área Gourmet Rústica",
      description: "Uma área gourmet aconchegante para receber famílias e amigos, pensada especialmente para atender as necessidades e desejos solicitados!",
      imgUrl: projImg4,
    },
    {
      title: "Área Gourmet Deslumbrante",
      description: "Ela não pode ser apenas funcional, tem que ser LINDA e ACONCHEGANTE e isso só um BOM projeto pode fazer",
      imgUrl: projImg5,
    },
    {
      title: "Um Refúgio",
      description: "Um espaço pensado para o lazer, com quadra de vôlei, parque infantil, área gourmet e muito mais!",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Suíte Master",
      description: "Pense você voltar pra casa e encontrar um quarto lindo desse todos os dias?",
      imgUrl: interiorImg1,
    },
    {
      title: "Home Office",
      description: "Você gostaria de trabalhar em um ambiente como esse? confortável, bem iluminado, com espaço para guardar e organizar todas as pastas e objetos!",
      imgUrl: interiorImg2,
    },
    {
      title: "Cozinha Planejada",
      description: "A cozinha é um dos ambientes que exigem mais atenção na hora de projetar uma casa. é preciso pensar na funcionalidade do espaço, encaixar os elétros que o cliente deseja, se atentar aos pontos elétricos e hidrossanitários, além de tudo isso, ela não pode ser apenas funcional, mas também linda.",
      imgUrl: interiorImg3,
    },
    {
      title: "Suíte Master",
      description: "Uma cama grande e confortável, uma poltrona pra leitura, iluminação aconchegante, e uma penteadeira perfeita.",
      imgUrl: interiorImg4,
    },
    {
      title: "Sala de TV",
      description: "De tirar o fôlego! tem coisa melhor que chegar em casa e ter um lugar como esse te esperando pra relaxar, pegar a pipoca e assistir um filme com a família?",
      imgUrl: interiorImg5,
    },
    {
      title: "Área Gourmet",
      description: "O projeto de interiores é extremamente importante pra o bom andamento de uma obra. é nele que escolhemos materiais, definimos onde cada móvel, eletrodoméstico irá pra então localizarmos toda a parte de tomadas e pontos",
      imgUrl: interiorImg6,
    },
  ];


  const projects3 = [
    {
      title: "Fachada Atraente",
      description: "A fachada é o cartão postal de qualquer estabelecimento, a primeira impressão é a que fica. Qual impressão você deseja passar pra seu cliente?",
      imgUrl: comercialImg1,
    },
    {
      title: "Fachada Moderna",
      description: "A necessidade do cliente era ter uma fachada com características que impressionassem, trouxesse maior conforto aos seus clientes e parceiros mas contendo um certo ponto de equilíbrio",
      imgUrl: comercialImg2,
    },
    {
      title: "Fachada Forte",
      description: "Uma fachada bonita, moderna e visualmente agradável, atraindo o público que passa pelo local",
      imgUrl: comercialImg3,
    },
    {
      title: "Clínica Recepção ",
      description: "Um ambiente muito complexo, onde tivemos muitas soluções estéticas e funcionais para dar aos pacientes tudo que eles tem direito e o principal: um espaço aconchegant",
      imgUrl: comercialImg4,
    },
    {
      title: "Consultório Pediátrico",
      description: "Tenho certeza que os minis pacientes vão aaaaaaamar ir ao médico num espaço lúdico como esse",
      imgUrl: comercialImg5,
    },
    {
      title: "Sala Advocacia",
      description: "Nesse projeto o objetivo era ter um espaço aconchegante, mas que transmitisse confiança e credibilidade. Qual mensagem você quer transmitir pra seus clientes?",
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
                    <p>Nós da <strong>JayArquiteta</strong> temos experiência em projetos residenciais, comerciais sejam reformas ou construções. Desenvolvemos, desde o primeiro contato, uma relação de muito <strong>diálogo e carinho</strong>, principalmente por saber o tamanho da responsabilidade que lidamos ao trabalhar com o <strong>seu sonho!</strong>
                      <br />
                      <br />
                      Acreditamos que nossos projetos devem respeitar e refletir toda a essência e estilo de vida dos nossos clientes, desde rotina e hábitos até a <strong>personalidade e estética</strong>.
                      <br />
                      <br />Imaginamos <strong>nossas casas</strong> como a trilha sonora das nossas vidas, então sempre cuidamos para que todos os nossos <strong>projetos tenham o calor</strong> de um abraço para que sejam criadas muitas memórias afetivas</p>
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
