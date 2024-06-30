
import 'axios';

export default function Page(){

    const signin = () => {
        alert("ok");
    };

    return (
        <>
            <h1>Signin</h1>
            <div>
                <form>
                    <div>
                        <label>ユーザー名</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>メールアドレス</label>
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <label>パスワード</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <label>もう一度</label>
                        <input type="password_once" name="password" />
                    </div>
                    <div>
                        <button onClick={signin}>新規登録</button>
                    </div>
                </form>
            </div>
        </>
    )
}