import "./App.css";
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("New data was added");
      } else {
        console.error("data error");
      }
    } catch (error) {
      console.error("ошибка", error);
    }
  };
  // ---------------
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          placeholder="type lastName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="firstName">First Name:</label>

        <input
          type="text"
          placeholder="type name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
