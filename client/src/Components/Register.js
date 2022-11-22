import { useState} from "react";
import { Link } from 'react-router-dom';
function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [msgusername,setMsgusername] = useState('');
    const [msgpassword,setMsgpassword] = useState('');
    const [msgName,setMsgname] = useState('');
     
    //function untuk handle proses login
    const register =() => {
   //cek username
   if (username === '') {
    setMsgusername('maaf,username harus diisi!');
   } else if (password === '') {
    setMsgpassword('maaf,password harus diisi!');
    setMsgusername('');
   } else if (name === '') {
    setMsgname('maaf nama harus diisi!')
    setMsgpassword('');
   }
    }
    return (  
        <>
         <div className='container py-5'>
            <h1 className='text-muted'>Register</h1>
            <p className='text-muted'>
                please add your account
            </p>
            <hr />
            <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control' onChange={(e) => { setUsername(e.target.value) }} />
                <b className="text-danger">{msgusername}</b>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                <b className="text-danger">{msgpassword}</b>
            </div>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' onChange={(e) => { setName(e.target.value) }} />
                <b className="text-danger">{msgName}</b>
            </div>
            <div className='form-group'>
                <button className='btn btn-primary mt-3' onClick={register}>REGISTER</button>
            </div>
        <p className='text-muted'>Have an account? Please<Link to='/'> login </Link></p>
        </div>
        </>
    );
}

export default Register;