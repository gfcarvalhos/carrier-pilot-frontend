import './styles.css'

export const DemoForm = () => {
  return (
    <section className="demo-form" id="demo">
        <div className="container">
          <div className="form-container">
            <h2>Pronto para transformar sua carreira?</h2>
            <p>Solicite uma demonstração gratuita e descubra como podemos ajudar.</p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Seu melhor e-mail" required />
              </div>
              <div className="form-group">
                <select required defaultValue="">
                  <option value="" disabled>Eu sou...</option>
                  <option value="student">Estudante</option>
                  <option value="professional">Profissional</option>
                  <option value="company">Empresa</option>
                  <option value="university">Universidade</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Solicitar demonstração</button>
            </form>
          </div>
        </div>
      </section>
  );
}
