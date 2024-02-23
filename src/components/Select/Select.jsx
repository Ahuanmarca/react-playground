import React from "react";
import Form from "react-bootstrap/Form";

function Select({ changeLang, currentLang, data }) {
  const [value, setValue] = React.useState(currentLang);

  function handleChange(e) {
    setValue(e.target.value);
    changeLang(e.target.value);
  }

  return (
    <Form.Select
      className="mt-3"
      style={{ width: "10rem" }}
      value={value}
      onChange={handleChange}
    >
      {data.map((item, index) => {
        return (
          <option key={`${item.code}-${index}`} value={item.code}>
            {item.name}
          </option>
        );
      })}
    </Form.Select>
  );
}

export default Select;
