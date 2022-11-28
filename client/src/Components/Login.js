import Axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';

Axios.defaults.withCredentials = true;

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    let navigate = useNavigate();

    //function untuk handle proses login
    const login = () => {
        //cek username
        if (username === '') {
            setStatus('username belum diisi!')
        } else if (password === '') {
            setStatus('password belum diisi!!');
        } else {
            Axios.post("http://localhost:3001/login", {
                username: username,
                password: password,
            }).then((response) => {
                if (response.data.message) {
                    setStatus(response.data.message);
                } else {
                    sessionStorage.setItem('token', response.data);
                    navigate('/dashboard');
                }
            });
        }
    }
    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            navigate('/');
        } else {
            navigate('/dashboard');
        }
    }, [navigate]);
    return (
        <>
            <main className="form-container">
                <Form className="form-box w-100 m-auto">
                    <h1 className="h-3 mb-3 fw-normal">Login</h1>
                    <FormGroup className="mb-1">
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" onChange={(e) => setUsername(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <Button className="w-100 mt-3" onClick={login}>Login</Button>
                    <p>Belum Registrasi? <Link to="/register">Registrasi</Link></p>
                </Form>
            </main>


            {/* <div className='container py-5'>
                <h1 className='text-muted'>LOGIN</h1>
                <p className='text-muted'>
                    please login to authenticate
                </p>
                <hr />
                <div className='form-group'>
                    <label className="text-muted">Username</label>
                    <input type='text' className='form-control' onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className='form-group'>
                    <label className="text-muted">Password</label>
                    <input type='password' className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className='form-group mt-3'>
                    <button onClick={login} className='btn btn-primary'>LOGIN</button>
                </div>
                <div className="text-danger my-1">{status}</div>
                <p className='text-muted mt-5'>Don't have account? Please<Link to='/register'> register</Link></p>
            </div> */}
        </>
    );
}

export default Login;