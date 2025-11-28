import { useState } from "react";
import { Brand } from "../../components/Brand";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import "./styles.css";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
    <Navbar />
    <div className="login-wrapper">
      <section className="auth-container">
        <div className="auth-logo">
          <Brand className="logo" />
          <p className="auth-tagline">
            Mentoria digital para o futuro do trabalho
          </p>
        </div>

        <div className="auth-card">
          <h2 className="auth-title">Acesse sua conta</h2>

          <form id="loginForm" className="auth-form">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-with-icon">
                <i className="fas fa-envelope" />
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <div className="input-with-icon">
                <i className="fas fa-lock" />
                <input
                  type={ showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  required
                />
                <button type="button" className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                >
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} />
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" id="remember" />
                <span className="checkmark" />
                Lembrar-me
              </label>
              <a href="#forgot-password" className="forgot-password">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="btn btn-primary auth-btn">
              Entrar
            </button>
          </form>

          <p className="auth-footer">
            Não tem uma conta?{" "}
            <a href="/register" className="auth-link">
              Cadastre-se
            </a>
          </p>
        </div>
      </section>

    </div>
    <Footer />
    </>
  );
};

export default Login;
