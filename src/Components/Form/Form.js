import React, { useState, useContext } from 'react';
import MyContext from '../../Context/MyContext';
import TextField from '../TextField/TextField';

function Form() {
 
  const { dataCategory } = useContext(MyContext);
 
  const [formValues, setFormValues] = useState({
    nome: '',
    descricao: '',
    imagem: '',
    video: '',
    categoria:'',
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
      <div className="lista-suspensa">
        <label>Categoria</label>
        <select onChange={(value) => handleChange('categoria', value.target.value)} required={true} value={formValues.categoria}>
          <option value=''></option>
          {dataCategory.category.map(category => <option key={category}>{category}</option>)}
        </select>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Form;
