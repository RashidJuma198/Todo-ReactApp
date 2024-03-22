import { useState } from "react";
export default function Field() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    surname: "",
  });
  const [save, setSave] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setSave([...save, name]);

    setName({ firstName: "", lastName: "", surname: "" });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <input
          onChange={(e) => setName({ ...name, surname: e.target.value })}
          type="text"
          value={name.surname}
        />
        <button type="submit">Submit</button>
      </form>
      {save.map((item) => (
        <h3 key={item}>{item}</h3>
      ))}
    </div>
  );
}
