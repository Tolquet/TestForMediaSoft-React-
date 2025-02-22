

const Register = () => {
    return (
        <div>
            <h2>Регистрация</h2>
            <div className="">
                <label htmlFor="">Name</label>
                <input placeholder='Имя' type="text" name="" id="" />
            </div>
            <div className="">
                <label htmlFor="">Email</label>
                <input placeholder='Email' type="email" name="" id="" />
            </div>
            <div className="">
                <label htmlFor="">Password</label>
                <input placeholder='Пароль' type="password" name="" id="" />
            </div>
            <div>
                <button>Зарегистрироваться </button>
            </div>
            <div>
                <span>Уже есть Аккаунт?</span>
                <button>Войти</button>  
            </div>
        </div>
    );
}

export default Register;
