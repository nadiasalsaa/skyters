import {Component} from 'react';
import './login.css';
import AlertDialogRegister from '../components/AlertDialogRegister';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login">
                <div className="content">
                    <div className="title-app">
                        <h1 className="skyter-title">Skyter</h1>
                        <p className="skyter-desc">Skyter membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda</p>
                    </div>
                    <div className="form-login-box">
                        <form action="" className="form-login">
                            <input type="email" name="email" placeholder="Email" className="input-login input-email" />
                            <input type="password" name="password" id="" placeholder="Kata Sandi" className="input-login input-password" />
                            <input type="submit" value="Login" className="submit-login-btn" />
                        </form>
                        <p style={{fontSize: 12}}>atau</p>
                        <button className="btn-facebook">Login Facebook</button><br />
                        <button className="btn-google">Login Google</button>
                        <hr className="line-form" />
                        <AlertDialogRegister />
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default Login;