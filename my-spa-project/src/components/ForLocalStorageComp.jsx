import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
display:flex;
flex-direction:column;
border:1px solid black; 
padding:10px;
margin-top:10%;
`;


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
      <Div>
        <h2>Выберите что-то</h2>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">-- Выберите --</option>
          <option value="option1">Опция 1</option>
          <option value="option2">Опция 2</option>
          <option value="option3">Опция 3</option>
        </select>
        <p>Выбранная опция: {selectedOption}</p>
      </Div>
    );
  };
  
  export default Selection;