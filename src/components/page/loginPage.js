

import "./index.css"
import qqImage from "../../public/QQ.png"
import wechatImage from "../../public/wechat-fill.png"

function Index() {
    const registerBtnHandler = () => {
        const login = document.querySelector('.login')
        const register = document.querySelector('.register')
        const fogotPwd = document.querySelector('.fogot-pwd')
        const registerBtn = document.querySelector('.register-btn')
        const loginBtn = document.querySelector('.login-btn')
        login.style.opacity = '0'
        fogotPwd.style.opacity = '0'
        register.style.opacity = '1'
        login.style.zIndex = '-1'
        fogotPwd.style.zIndex = '-1'
        register.style.zIndex = '10'
        register.style.animation = 'into 1s ease'
        login.style.animation = 'none'
        fogotPwd.style.animation = 'none'
        registerBtn.style.borderBottom = '4px solid rgb(249, 177, 122)'
        registerBtn.style.color = '#fff'
        loginBtn.style.borderBottom = 'none'
        loginBtn.style.color = 'rgb(100, 108, 154)'
    };

    const loginBtnHandler = () => {
        const login = document.querySelector('.login')
        const register = document.querySelector('.register')
        const fogotPwd = document.querySelector('.fogot-pwd')
        const registerBtn = document.querySelector('.register-btn')
        const loginBtn = document.querySelector('.login-btn')
        login.style.opacity = '1'
        register.style.opacity = '0'
        fogotPwd.style.opacity = '0'
        login.style.zIndex = '10'
        fogotPwd.style.zIndex = '-1'
        register.style.zIndex = '-1'
        login.style.animation = 'into 1s ease'
        register.style.animation = 'none'
        fogotPwd.style.animation = 'none'
        registerBtn.style.borderBottom = ''
        registerBtn.style.color = 'rgb(100, 108, 154)'
        loginBtn.style.borderBottom = '4px solid rgb(249, 177, 122)'
        loginBtn.style.color = '#fff'
    }

    const fogotPwdBtnHandler = () => {
        const login = document.querySelector('.login')
        const register = document.querySelector('.register')
        const fogotPwd = document.querySelector('.fogot-pwd')
        fogotPwd.style.opacity = '1'
        login.style.opacity = '0'
        register.style.opacity = '0'
        login.style.zIndex = '-1'
        fogotPwd.style.zIndex = '10'
        register.style.zIndex = '-1'
        fogotPwd.style.animation = 'into 1s ease'
        register.style.animation = 'none'
        login.style.animation = 'none'
    }

    const veriCodeTips = document.querySelector('.veri-code-tips');
    let reckonTimeFlag = 5; //倒计时
    let reckonTime; //定时器
    const countDown = () => {
        veriCodeTips.innerHTML = `RESEND(${reckonTimeFlag})`
        reckonTimeFlag--;
        if (reckonTimeFlag < 0) {
            clearInterval(reckonTime);
            reckonTimeFlag = 5;
            veriCodeTips.innerHTML = `Click To Get`;
            veriCodeTips.style.color = "rgb(113 123 185)";
            veriCodeTips.onclick = veriCodeTipsClick;
        }
    }
    //点击事件触发的方法
    const veriCodeTipsClick = () => {
        veriCodeTips.onclick = null;
        veriCodeTips.style.color = "rgb(153, 151, 151)";
        reckonTime = setInterval(countDown, 1000);
        countDown();
    }
    console.log("hello")
    return (
        <div className="box">
            <div className="logo"></div>
            <div className="forms">
                <div className="tips">
                    <span className="login-btn" onClick={loginBtnHandler}>登录</span>
                    <span className="register-btn" onClick={registerBtnHandler}>注册</span>
                </div>
                <div className="login">
                    <div className="form-title">
                        <h1>登录</h1>
                        <h3>欢迎使用Oauth2.0统一身份认证系统</h3>
                    </div>
                    <form action="/login" method="POST">
                        <div className="form">
                            <div className="username input-item">
                                <input type="text" className="ipts" name="username" required />

                            </div>
                            <div className="password input-item">
                                <input type="password" className="ipts" name="password" required />

                            </div>
                            <div className="other-select">
                                <div className="rem-pwd">
                                    <input type="checkbox" id="check" />
                                    <label htmlFor="check" className="rem-pwd-tips">记住密码</label>
                                </div>
                                <span className="fogot-pwd-btn" onClick={fogotPwdBtnHandler}>忘记密码</span>
                            </div>
                            <button className="btn">登录</button>
                            <div className="other-login">
                                <span>其他方式</span>
                                <div className="login-img">
                                    <img src={qqImage} alt="" />
                                        <img src={wechatImage} alt="" />

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="register">
                    <div className="form-title">
                        <h1>注册</h1>
                        <h4>注册后务必线下激活，否则无法访问授权内容。</h4>
                    </div>
                    <div className="form">
                        <div className="username input-item">
                            <input type="text" className="ipts" />
                        </div>
                        <div className="password input-item">
                            <input type="password" className="ipts" />
                        </div>
                        <div className="conform-password input-item" >
                            <input type="password" className="ipts" />
                        </div>
                        <button className="btn">Register</button>
                    </div>
                </div>
                <div className="fogot-pwd">
                    <div className="form-title">
                        <h1>忘记密码</h1>
                        <h4>欢迎使用长安大学统一身份认证系统</h4>
                    </div>
                    <div className="form">
                        <div className="username input-item">
                            <input type="text" className="ipts" />
                        </div>
                        <div className="password input-item">
                            <input type="password" className="ipts" />
                        </div>
                        <div className="code input-item">
                            <input type="text" className="ipts" />
                                <span className="veri-code-tips" onClick={veriCodeTipsClick}>点击刷新</span>
                        </div>
                        <button className="btn">确认</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index