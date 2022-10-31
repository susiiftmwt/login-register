import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '.././images/logo.webp';
const Login = () => {
    return (
        <Container className='rounded p-3 shadow-lg'>
            <Row>
                <Col className='text-center'>
                    <img src={Logo} Alt='Logo' width='80%' />
                </Col>
                <Col className='p-5'>
                    <h1>LOGIN FORM</h1>
                    <div class='form-group mt-3'>
                        <label>Username</label>
                        <input type='text' class='form-control' />
                    </div>
                    <div class='form-group mt-3'>
                        <label>Password</label>
                        <input type='text' class='form-control' />
                    </div>
                    <div class='form-group mt-5'>
                        <Button class='btn btn-primary'>LOGIN</Button>
                    </div>
                    <label className='mt-3 text-muted'>Don't have an account, please <Link to='/register'>register</Link></label>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;