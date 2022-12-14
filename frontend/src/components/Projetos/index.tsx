import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/recidencial-fachada-moderna-esquina-espelhada-jayarquiteta.webp";
import projImg2 from "../../assets/img/recidencial-fachada-moderna-jayarquiteta.webp";
import projImg3 from "../../assets/img/recidencial-fachada-moderna-planta-jayarquiteta.webp";
import projImg4 from "../../assets/img/recidencial-areagourmet-moderna-rustica-jayarquiteta.webp";
import projImg5 from "../../assets/img/recidencial-areagourmet-pequena-planejada-jayarquiteta.webp";
import projImg6 from "../../assets/img/recidencial-areagourmet-externo-pequena-jayarquiteta.webp";
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
      title: "Fachada Imponente",
      description: "Uma fachada de esquina linda e moderna com os elementos preferidos do nosso cliente",
      imgUrl: projImg1,
      alt: "Fachada recidencial esquina jayarquiteta",
    },
    {
      title: "Fachada Elegante",
      description: "Com poucas altera????es estruturais, conseguimos fazer uma fachada moderna e extremamente elegante!",
      imgUrl: projImg2,
      alt: "Fachada moderna grande jayarquiteta",
    },
    {
      title: "Fachada Moderna",
      description: "Modernizamos esta casa unificando seus volumes e demos um toque aconchegante com acabamento amadeirado",
      imgUrl: projImg3,
      alt: "Fachada com planta jayarquiteta",
    },
    {
      title: "??rea Gourmet R??stica",
      description: "Uma ??rea gourmet para receber fam??lias e amigos, pensada especialmente para atender as necessidades e desejos solicitados!",
      imgUrl: projImg4,
      alt: "Area gourmet moderna rustica jayarquiteta",
    },
    {
      title: "??rea Gourmet Deslumbrante",
      description: "Ela n??o pode ser apenas funcional, tem que ser LINDA e ACONCHEGANTE e isso s?? um BOM projeto pode fazer",
      imgUrl: projImg5,
      alt: "Area Gourmet pequena planejada jayarquiteta",
    },
    {
      title: "Um Ref??gio",
      description: "Um espa??o pensado para o lazer, com quadra de v??lei, parque infantil, ??rea gourmet e muito mais!",
      imgUrl: projImg6,
      alt: "Area Gourmet externa jayarquiteta",
    },
  ];

  const projects2 = [
    {
      title: "Su??te Master",
      description: "Pense voc?? voltar pra casa e encontrar um quarto lindo desse todos os dias?",
      imgUrl: interiorImg1,
      alt: "Suite master planejada moveis jayarquiteta",
    },
    {
      title: "Home Office",
      description: "Voc?? gostaria de trabalhar em um ambiente como esse? confort??vel, bem iluminado, com espa??o para guardar e organizar todas as pastas e objetos!",
      imgUrl: interiorImg2,
      alt: "Home Office pequeno planejado jayarquiteta",
    },
    {
      title: "Cozinha Planejada",
      description: "A cozinha ?? um dos ambientes que exigem mais aten????o na hora de projetar uma casa. ?? preciso pensar na funcionalidade do espa??o, encaixar os el??tros que o cliente deseja, se atentar aos pontos el??tricos e hidrossanit??rios, al??m de tudo isso, ela n??o pode ser apenas funcional, mas tamb??m linda.",
      imgUrl: interiorImg3,
      alt: "Cozinha Planejada preta moderna jayarquiteta",
    },
    {
      title: "Su??te Master",
      description: "Uma cama grande e confort??vel, uma poltrona pra leitura, ilumina????o aconchegante, e uma penteadeira perfeita.",
      imgUrl: interiorImg4,
      alt: "Suite master clean jayarquiteta",
    },
    {
      title: "Sala de TV",
      description: "De tirar o f??lego! tem coisa melhor que chegar em casa e ter um lugar como esse te esperando pra relaxar, pegar a pipoca e assistir um filme com a fam??lia?",
      imgUrl: interiorImg5,
      alt: "Sala de TV planejada pequena jayarquiteta",
    },
    {
      title: "??rea Gourmet",
      description: "O projeto de interiores ?? extremamente importante pra o bom andamento de uma obra. ?? nele que escolhemos materiais, definimos onde cada m??vel, eletrodom??stico ir?? pra ent??o localizarmos toda a parte de tomadas e pontos",
      imgUrl: interiorImg6,
      alt: "Area Gourmet grande moderna jayarquiteta",
    },
  ];


  const projects3 = [
    {
      title: "Fachada Atraente",
      description: "A fachada ?? o cart??o postal de qualquer estabelecimento, a primeira impress??o ?? a que fica. Qual impress??o voc?? deseja passar pra seu cliente?",
      imgUrl: comercialImg1,
      alt: "Fachada comercial loja jayarquiteta",
    },
    {
      title: "Fachada Moderna",
      description: "A necessidade do cliente era ter uma fachada com caracter??sticas que impressionassem, trouxesse maior conforto aos seus clientes e parceiros mas contendo um certo ponto de equil??brio",
      imgUrl: comercialImg2,
      alt: "Fachada advogacia jayarquiteta",
    },
    {
      title: "Fachada Forte",
      description: "Uma fachada bonita, moderna e visualmente agrad??vel, atraindo o p??blico que passa pelo local",
      imgUrl: comercialImg3,
      alt: "Fachada pet jayarquiteta",
    },
    {
      title: "Cl??nica Recep????o ",
      description: "Um ambiente muito complexo, onde tivemos muitas solu????es est??ticas e funcionais para dar aos pacientes tudo que eles tem direito e o principal: um espa??o aconchegante",
      imgUrl: comercialImg4,
      alt: "Clinica geral planejada jayarquiteta",
    },
    {
      title: "Consult??rio Pedi??trico",
      description: "Tenho certeza que os minis pacientes v??o aaaaaaamar ir ao m??dico num espa??o l??dico como esse",
      imgUrl: comercialImg5,
      alt: "Consultorio pediatrico planejado moderno jayarquiteta",
    },
    {
      title: "Sala Advocacia",
      description: "Nesse projeto o objetivo era ter um espa??o aconchegante, mas que transmitisse confian??a e credibilidade. Qual mensagem voc?? quer transmitir pra seus clientes?",
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
                    <p>N??s da <strong>JayArquiteta</strong> temos experi??ncia em projetos residenciais, comerciais sejam reformas ou constru????es. Desenvolvemos, desde o primeiro contato, uma rela????o de muito <strong>di??logo e carinho</strong>, principalmente por saber o tamanho da responsabilidade que lidamos ao trabalhar com o <strong>seu sonho!</strong>
                      <br />
                      <br />
                      Acreditamos que nossos projetos devem respeitar e refletir toda a ess??ncia e estilo de vida dos nossos clientes, desde rotina e h??bitos at?? a <strong>personalidade e est??tica</strong>.
                      <br />
                      <br />Imaginamos <strong>nossas casas</strong> como a trilha sonora das nossas vidas, ent??o sempre cuidamos para que todos os nossos <strong>projetos tenham o calor</strong> de um abra??o para que sejam criadas muitas mem??rias afetivas</p>
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
