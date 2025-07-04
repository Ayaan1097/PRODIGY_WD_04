import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailChimpForm"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon2 from "../assets/img/{22A16444-ADB9-42E3-8BBA-5B44A03A8B66}.png";
import logo from "../assets/img/{3C31B6AA-37C9-4BCF-AAB3-731411FCBA53}.png"
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ayaan-khan-538117245"><img src={navIcon1} alt="Linkedin" /></a>
                            <a href="https://github.com/Ayaan1097"><img src={navIcon2} alt="GitHub" /></a>
                            <a href="https://www.instagram.com/ayaan1244_?igsh=ejkzM25reTBwZGVw"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                    </Col>
                    <Col size={12} className="text-center mt-3">
                        <p>Copyright 2025. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}