import axios from 'axios';
import './styles.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const API_URL = `${import.meta.env.VITE_API_URL}/usuarios/`;

export const DemoForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setMessage(null)
  setIsSubmitting(true)

  const form = e.currentTarget;
  const data = new FormData(form);

  const name = data.get("name") as string | null;
  const email = data.get("email") as string | null;
  const password = data.get("password") as string | null;
  const role = data.get("role") as string | null;

  if (!name || !email || !password || !role) {
    setIsSubmitting(false);
    return;
  }

  const payload = {
    nome: name,
    email,
    senha: password
  };

  try {
    await axios.post(API_URL, payload, {
        headers: { "Content-Type": "application/json" },
      });
    setMessage("Usuário cadastrado com sucesso!");
    form.reset();

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  } catch(error){
    console.error("Erro ao cadastrar", error);
    setMessage("Erro ao cadastrar. Tente novamente.");
  } finally {
    setIsSubmitting(false);
  }
  };
  return (
    <section className="demo-form" id="demo">
        <div className="container">
          <div className="form-container">
            <h2>Pronto para transformar sua carreira?</h2>
            <p>Cria sua conta de forma gratuita e descubra como podemos ajudar.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input name="name" type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <input name="email" type="email" placeholder="Seu melhor e-mail" required />
              </div>
              <div className="form-group">
                <input name="password" type="password" placeholder="Sua senha" required />
              </div>
              <div className="form-group">
                <select name="role" required defaultValue="">
                  <option value="" disabled>Eu sou...</option>
                  <option value="student">Estudante</option>
                  <option value="professional">Profissional</option>
                  <option value="company">Empresa</option>
                  <option value="university">Universidade</option>
                </select>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                {isSubmitting ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>

            {message && (
              <div className="popup-overlay">
                <div className="popup">
                  <p>{message}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
  );
}
