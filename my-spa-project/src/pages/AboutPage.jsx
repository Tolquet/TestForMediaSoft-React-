import React, { useEffect, useState } from "react";
import axios from "axios";



const AboutPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Выполняем запрос к JSON-файлу
    axios
      .get("/data.json")
      .then((response) => {
        setData(response.data); // Устанавливаем данные в состояние
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // Обрабатываем ошибку
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (

    <div>
        <svg  
      width="200px"  
      height="200px"  
      viewBox="0 0 100 100"  
      xmlns="http://www.w3.org/2000/svg"  
  >  
      <circle cx="50" cy="50" r="20" fill="yellow" />  
      <path  
          d="M50 5 Q65 20 50 35 Q35 20 50 5"  
          fill="pink"  
      />  
      <path  
          d="M95 50 Q80 65 65 50 Q80 35 95 50"  
          fill="pink"  
      />  
      <path  
          d="M50 95 Q35 80 50 65 Q65 80 50 95"  
          fill="pink"  
      />  
      <path  
          d="M5 50 Q20 35 35 50 Q20 65 5 50"  
          fill="pink"  
      />  
  </svg>  
      <h1>Users</h1>
      {data && data.users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
