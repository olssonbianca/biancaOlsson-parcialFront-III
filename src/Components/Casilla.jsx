import "./styles.css"

const Casilla = ({ forHtml, text, type, name, onChange }) => {
    return (
      <label htmlFor={forHtml}>
        {text}
        <input
          className = "input"
          type={type}
          name={name}
          id={name}
          onChange={onChange}
        />
      </label>
    );
  };

  export default Casilla;
