import styles from "./Select.module.css";

export default function Select({ text, handleOnChange, options, value, name }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option disabled selected>
          Selecione uma Opção
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
