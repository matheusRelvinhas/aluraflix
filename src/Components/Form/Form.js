import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import TextField from '../TextField/TextField';
import './Form.css';

function Form() {
 
  const { dataCategory, addData, dataFilm, dataCss } = useContext(MyContext);
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
    navigate('/aluraflix'); // volta para página inical
  };

  return (
    <form onSubmit={handleSubmit} className='form' style={{
      background: dataCss.primaryColor,
      color: dataCss.secundaryColor
    }} >
      <div className='form-title'>
        <h2>Adicionar Vídeo</h2>
      </div>
      <TextField
        label='Nome'
        value={formValues.title}
        onChange={(value) => handleChange('title', value)}
        placeholder='título do vídeo'
      />
      <TextField
        label="Descrição"
        value={formValues.text}
        onChange={(value) => handleChange('text', value)}
        placeholder='sinopse do vídeo'
      />
      <TextField
        label="Imagem"
        value={formValues.image}
        onChange={(value) => handleChange('image', value)}
        placeholder='url da imagem do vídeo'
      />
      <TextField
        label="Vídeo"
        value={formValues.video}
        onChange={(value) => handleChange('video', value)}
        placeholder='url do vídeo'
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
