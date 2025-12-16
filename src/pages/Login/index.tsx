import React, { useState } from "react";
import { Brand } from "../../components/Brand";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { useAuth } from "../../context/Auth/useAuth";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login({email, password})
      navigate("/profile")
    } catch (err){
      setError("E-mail ou senha inválidos");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
    <Navbar />
    <div className="login-wrapper">
      <section className="auth-container">
        <div className="auth-logo">
          <Brand variant="hero" />
          <p className="auth-tagline">
            Mentoria digital para o futuro do trabalho
          </p>
        </div>

        <div className="auth-card">
          <h2 className="auth-title">Acesse sua conta</h2>

          <form id="loginForm" className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-with-icon">
                <i className="fas fa-envelope" />
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button type="button" className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                >
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} />
                </button>
              </div>
            </div>

            {error && <p className="error-text">{error}</p>}

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

            <button 
            type="submit" 
            className="btn btn-primary auth-btn"
            disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
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
