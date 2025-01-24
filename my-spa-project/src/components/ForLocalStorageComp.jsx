import React, { useState, useEffect } from "react";

const Selection = () => {
    const [selectedOption, setSelectedOption] = useState(""); // Для хранения выбора
  
    // Загрузка данных из localStorage при монтировании компонента
    useEffect(() => {
      const savedOption = localStorage.getItem("selectedOption");
      if (savedOption) {
        setSelectedOption(savedOption);
      }
    }, []);
  
    // Сохраняем выбор пользователя в localStorage
    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelectedOption(value);
      localStorage.setItem("selectedOption", value);
    };
  
    return (
      <div>
        <h1>Выберите что-то</h1>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">-- Выберите --</option>
          <option value="option1">Опция 1</option>
          <option value="option2">Опция 2</option>
          <option value="option3">Опция 3</option>
        </select>
        <p>Выбранная опция: {selectedOption}</p>
      </div>
    );
  };
  
  export default Selection;