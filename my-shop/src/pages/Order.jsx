import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerForm from "../components/CustomerForm";
import PaymentForm from "../components/PaymentForm";
import AddressPicker from "../components/AddressForm";

export default function Order() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    return (
        <div className="order">
            <h2 className="order-title">📝 Оформление заказа</h2>
            <div className="order-steps">
                <span className={step === 1 ? "active" : ""}>1. Покупатель</span>
                <span className={step === 2 ? "active" : ""}>2. Оплата</span>
                <span className={step === 3 ? "active" : ""}>3. Адрес</span>
            </div>

            {step === 1 && <CustomerForm />}
            {step === 2 && <PaymentForm />}
            {step === 3 && <AddressPicker onNext={() => alert("Заказ оформлен!")} />}

            <button onClick={nextStep} className="next-button">
                {step < 3 ? "Далее" : '' }
            </button>

            {step === 3 && (
                <button onClick={() => navigate("/")} className="finish-button">
                    ✅ Завершить заказ
                </button>
            )}
        </div>
    );
}
