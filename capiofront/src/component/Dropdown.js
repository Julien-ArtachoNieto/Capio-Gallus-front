// import './Dropdown.css'
const Dropdown = ({ label, value, options, onChange }) => {
    return (
      
        <label className="titres-filtrage">
          {label}
          <select className="resultats-filtrage" value={value} onChange={onChange}>
            {options.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      
    );
  };
  export default Dropdown