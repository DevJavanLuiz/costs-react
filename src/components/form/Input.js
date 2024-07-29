import styles from "./Input.module.css";

export default function Input({
  type,
  placeholder,
  text,
  handleOnChange,
  value,
  name,
}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={handleOnChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
