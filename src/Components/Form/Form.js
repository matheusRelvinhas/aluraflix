import React, { useState } from 'react';
import TextField from '../TextField/TextField';

function Form() {
  const [formValues, setFormValues] = useState({
    nome: '',
    descricao: '',
    imagem: '',
    video: '',
  });

  const handleChange = (text, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [text]: value,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir a atualização da página
    console.log(formValues); // Código do submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nome"
        value={formValues.nome}
        onChange={(value) => handleChange('nome', value)}
      />
      <TextField
        label="Descrição"
        value={formValues.descricao}
        onChange={(value) => handleChange('descricao', value)}
      />
      <TextField
        label="Imagem"
        value={formValues.imagem}
        onChange={(value) => handleChange('imagem', value)}
      />
      <TextField
        label="Vídeo"
        value={formValues.video}
        onChange={(value) => handleChange('video', value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
  
export default Form;
