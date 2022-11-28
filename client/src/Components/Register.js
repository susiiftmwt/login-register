import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';

Axios.defaults.withCredentials = true;

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [validasi, setValidasi] = useState('');

    let navigate = useNavigate();

    //function untuk handle proses login
    const register = () => {
        //cek username
        if (username === '') {
            setValidasi('username belum diisi!')
        } else if (password === '') {
            setValidasi('password belum diisi!');

        } else if (name === '') {
            setValidasi(' nama belum diisi!')

        } else {
            //proses register ketika data sudah tervalidasi
            Axios.post("http://localhost:3001/register", {
                username: username,
                password: password,
                name: name,
            }).then((response) => {
                console.log(response);
            });
            navigate('/');
        }
    };
    return (
        <>
            <main className="form-container">
                <Form className="form-box w-100 m-auto">
                    <h1 className="h-3 mb-3 fw-normal">Registrasi</h1>

                    <FormGroup className="mb-1">
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" onChange={(e) => setUsername(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-1" >
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <FormLabel>Name</FormLabel>
                        <FormControl type="text" onChange={(e) => setName(e.target.value)} />
                    </FormGroup>
                    <Button className="w-100 mt-3" onClick={register}>Registrasi</Button>
                    <p className="mt-3">Sudah Registrasi? <Link to="/LogIn">Login</Link></p>
                </Form>
            </main>


            {/* <div className='container m-auto py-5'>
                <h1 className='text-muted'>Register</h1>
                <b className='text-muted'>
                    please add your account
                </b>
                <hr />
                <div className='form-group'>
                    <label className="text-muted">Username</label>
                    <input type='text' className='form-control' onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className='form-group'>
                    <label className="text-muted">Password</label>
                    <input type='password' className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className='form-group'>
                    <label className="text-muted">Name</label>
                    <input type='text' className='form-control' onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className='form-group mt-3'>
                    <button onClick={register} className="btn btn-primary">REGISTER</button>
                </div>
                <div className="text-danger">{validasi}</div>
                <p className='text-muted'>Have an account? Please<Link to='/'> login </Link></p>
            </div> */}
        </>
    );
}

export default Register;