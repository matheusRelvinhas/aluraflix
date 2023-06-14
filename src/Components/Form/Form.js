import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import TextField from '../TextField/TextField';
import './Form.css';

function Form() {
 
  const { dataCategory, addData, dataFilm } = useContext(MyContext);
  const navigate = useNavigate();

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
    navigate('/'); // volta para página inical
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
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
      <div className="dropdown-list">
        <label>Categoria</label>
        <select onChange={(value) => handleChange('category', value.target.value)} required={true} value={formValues.category}>
          <option value=''></option>
          {dataCategory.category.map(category => <option key={category}>{category}</option>)}
        </select>
      </div>
      <button className="button-submit" type='submit'>Salvar Vídeo</button>
    </form>
  );
}

export default Form;
