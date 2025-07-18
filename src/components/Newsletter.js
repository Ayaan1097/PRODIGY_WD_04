import { Alert, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";


export const Newsletter = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status == 'success') clearFields()
    }, [status])
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })
    }


    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={!2} md={6} xl={5}><h3>Subscribe to my Newsletter</h3>
                        {status == 'sending' && <Alert>Sending...</Alert>}
                        {status == 'error' && <Alert variant="danger">{message}</Alert>}
                        {status == 'sending' && <Alert variant="success"> {message}</Alert>}

                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}></form>
                        <div className="new-email-bx">
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                            <button type="submit">Submit</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}