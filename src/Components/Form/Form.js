import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import TextField from '../TextField/TextField';
import './Form.css';

function Form() {
 
  const { dataCategory, addData, dataFilm } = useContext(MyContext);
 
  const [formValues, setFormValues] = useState({
    title: '',
    text: '',
    image: '',
    video: '',
    category:'',
  });

  const handleChange = (text, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [text]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir a atualização da página
    addData(formValues)
    console.log(dataFilm); // Código do submit
    setFormValues({ // Reseta os valores do formulário para vazio após a submissão
      title: '',
      text: '',
      image: '',
      video: '',
      category:''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nome"
        value={formValues.title}
        onChange={(value) => handleChange('title', value)}
      />
      <TextField
        label="Descrição"
        value={formValues.text}
        onChange={(value) => handleChange('text', value)}
      />
      <TextField
        label="Imagem"
        value={formValues.image}
        onChange={(value) => handleChange('image', value)}
      />
      <TextField
        label="Vídeo"
        value={formValues.video}
        onChange={(value) => handleChange('video', value)}
      />
      <div className="lista-suspensa">
        <label>Categoria</label>
        <select onChange={(value) => handleChange('category', value.target.value)} required={true} value={formValues.category}>
          <option value=''></option>
          {dataCategory.category.map(category => <option key={category}>{category}</option>)}
        </select>
      </div>
      <Link to='/'>
        <button type="submit">Salvar</button>
      </Link>
    </form>
  );
}

export default Form;
