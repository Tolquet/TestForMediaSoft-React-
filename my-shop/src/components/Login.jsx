
const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <form >
                <div className="">
                    <label htmlFor="">Email</label>
                    <input placeholder='Email' type="email" name="" id="" />
                </div>
                <div className="">

                    <label htmlFor="">Password</label>
                    <input placeholder='Пароль' type="password" name="" id="" />
                </div>
                <div className="">
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        <span>Запомни меня</span>
                    </label>
                        <a href="">Забыли Пароль?</a>
                </div>
                <div>
                    <button>Войти</button>
                </div>
            </form>
            <div>
                <span>Нету Аккаунта?</span>
                <button>Зарегистрироваться</button>
            </div>
        </div>
    );
}

export default Login;
