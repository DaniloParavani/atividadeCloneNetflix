import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

import './login.css';
import { LoginContext } from '../App';
import logoNetflix from '../assets/logoNetflix.png';

const Login = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/teste');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className='login-container'>

            <header className="login-logo">
                <img src={logoNetflix} alt="Logo Netflix" className='logo' />
            </header>

            <div className='formContainer'>
                <form>
                    <h1>Entrar</h1>
                    <input
                        type="text"
                        placeholder="Email ou número de celular"
                        className='inputForm'
                        id='email'
                        name='email'
                    />
                    <input
                    type="password"
                    placeholder="Senha"
                    className='inputForm'
                    name="password"
                    id='password'
                    />
                    <button type='button' id='btnEnter' onClick={handleLogin}>Entrar</button>
                    <label id='lblOr'>OU</label>
                    <button type='button' id='btnAcessCode'>Usar um código de acesso</button>
                    <a href="#" className='link'>Esqueceu a senha?</a>
                </form>

                <label htmlFor="remember" id="lbl-remember">
                    <input type="checkbox" name="remember" id="remember" />
                    Lembre-se de mim
                </label>
                <p>Novo por aqui? <a href="#" className='link'>Assine agora</a>.</p>
                <p id='about'>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
            </div>

            <footer>
                <div>
                <p>Dúvidas? Ligue <a href="#" className='a'>0800 591 2876</a></p>
                <div id='linkFooter'>
                    <div className='links'>
                        <a href="#" className='a'>Perguntas frequentes</a>
                        <a href="#" className='a'>Preferências de cookies</a>
                    </div>
                    <div className='links'>
                        <a href="#" className='a'>Central de Ajuda</a>
                        <a href="#" className='a'>Informações corporativas</a>
                    </div>
                    <div className='links'>
                        <a href="#" className='a'>Termos de Uso</a>
                    </div>
                    <div className='links'>
                        <a href="#" className='a'>Privacidade</a>
                    </div>
                </div>
                <div id='select'>
                    <select name="language" id="language">
                        <option value="Português">Português</option>
                        <option value="English">English</option>
                    </select>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default Login;