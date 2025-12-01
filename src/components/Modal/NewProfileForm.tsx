import { useState } from "react";

type NivelExperiencia = "J" | "P" | "S";

type NewProfileFormValues = {
  area_interesse: string;
  nivel_experiencia: NivelExperiencia;
  objetivo_pessoal: string;
};

type NewProfileFormProps = {
  initialValues?: NewProfileFormValues;
  onSubmit: (values: NewProfileFormValues) => Promise<void> | void;
  onCancel: () => void;
  isBuilding?: boolean;
};

export const NewProfileForm: React.FC<NewProfileFormProps> = ({
  onSubmit,
  onCancel,
  isBuilding = false,
}) => {
  const [form, setForm] = useState<NewProfileFormValues>({
    area_interesse: "",
    nivel_experiencia: "J",
    objetivo_pessoal: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: keyof NewProfileFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await onSubmit(form);
    } catch (err) {
      setError("Não foi possível criar o perfil. Tente novamente.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || isBuilding

  return (
    <form className="new-profile-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="area_interesse">Área de interesse</label>
        <input
          id="area_interesse"
          type="text"
          value={form.area_interesse}
          onChange={(e) => handleChange("area_interesse", e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="nivel_experiencia">Nível de experiência</label>
        <select
          id="nivel_experiencia"
          value={form.nivel_experiencia}
          onChange={(e) =>
            handleChange("nivel_experiencia", e.target.value as NivelExperiencia)
          }
        >
          <option value="J">Júnior</option>
          <option value="P">Pleno</option>
          <option value="S">Sênior</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="objetivo_pessoal">Objetivo pessoal</label>
        <textarea
          id="objetivo_pessoal"
          className="input"
          value={form.objetivo_pessoal}
          onChange={(e) => handleChange("objetivo_pessoal", e.target.value)}
          rows={4}
        />
      </div>

      {error && <p className="error-text">{error}</p>}

      {isBuilding && (
        <div className="roadmap-loading">
          <div className="spinner" />
          <p>Estamos construíndo seu roadmap personalizado...</p>
        </div>
      )}

      <div className="form-actions">
        <button 
        type="button" 
        className="btn btn-ghost" 
        onClick={onCancel}
        disabled={isDisabled}
        >
          Cancelar
        </button>
        <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={isDisabled}>
          {loading ? "Criando..." : "Criar Perfil"}
        </button>
      </div>
    </form>
  );
};
