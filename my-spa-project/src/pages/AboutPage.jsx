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
