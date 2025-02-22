import { useState, useEffect } from "react";

export default function CustomerForm() {
    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: ""
    });

    // Загружаем данные из localStorage при монтировании
    useEffect(() => {
        const savedCustomer = JSON.parse(localStorage.getItem("customer"));
        if (savedCustomer) {
            setCustomer(savedCustomer);
        }
    }, []);

    // Обновляем state и сохраняем в localStorage
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedCustomer = { ...customer, [name]: value };
        setCustomer(updatedCustomer);
        localStorage.setItem("customer", JSON.stringify(updatedCustomer));
    };

    return (
        <div className="Form">
            <h2 className="form-h2">📝 Данные покупателя</h2>
            <input
                type="text"
                name="name"
                placeholder="Имя"
                value={customer.name}
                onChange={handleChange}
                className="form-input"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={customer.email}
                onChange={handleChange}
                className="form-input"
            />
            <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={customer.phone}
                onChange={handleChange}
                className="form-input"
            />
         
        </div>
    );
}
