import './TextField.css';

function TextField({ label, value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  return (
    <div className='textField'>
      <label className='label'>{label}</label>
      <input className='input' type="text" value={value} onChange={handleChange} required={true} />
    </div>
  );
}

export default TextField;
