import { Nav, Tab, Col, Row, Container } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import webdev from '../assets/img/web-dev.png'
import aia from '../assets/img/cover_data-ai.avif'
import ml from '../assets/img/Machine_Learning.jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
    const projects = [
        {
            title: "Web Development",
            description: "Design & Development",
            imgUrl: webdev,
        },
        {
            title: "AI & Analytics",
            description: "Intelligent Analysis",
            imgUrl: aia,
        },
        {
            title: "Machine Learning",
            description: "Data Learning",
            imgUrl: ml,
        }
    ]
    return (
        <><section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate_bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p> Here are some of my projects that focus on real world problem solving.</p>
                                </div>
                            )}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project} />

                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"> Lorem ipsum!</Tab.Pane>
                                <Tab.Pane eventKey="third"> Lorem ipsum </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
        </>
    )
}