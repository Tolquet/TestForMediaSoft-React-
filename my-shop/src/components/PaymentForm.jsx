import { useState, useEffect } from "react";

export default function PaymentForm() {
    const [card, setCard] = useState({
        cardNumber: "",
        expiry: "",
        cvv: ""
    });

    useEffect(() => {
        const savedCard = JSON.parse(localStorage.getItem("card"));
        if (savedCard) {
            setCard(savedCard);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedCard = { ...card, [name]: value };
        setCard(updatedCard);
        localStorage.setItem("card", JSON.stringify(updatedCard));
    };

    return (
        <div className="Form">
            <h2 className="text-xl font-bold mb-4">💳 Оплата</h2>
            <input
                type="text"
                name="cardNumber"
                placeholder="Номер карты"
                value={card.cardNumber}
                onChange={handleChange}
                className="form-input"
                maxLength="16"
            />
            <input
                type="text"
                name="expiry"
                placeholder="Срок действия (MM/YY)"
                value={card.expiry}
                onChange={handleChange}
                className="form-input"
                maxLength="5"
            />
            <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={card.cvv}
                onChange={handleChange}
                className="form-input"
                maxLength="3"
            />
           
        </div>
    );
}
