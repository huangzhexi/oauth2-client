import "./auth.css"
function Auth() {
    const accept = () => {

    }
    const reject = () => {

    }
    return (
        <div className="container">
            <link
                rel="stylesheet"
                href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
            />
            <script src="//code.jquery.com/jquery-2.2.4.min.js"></script>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
            <div className="jumbotron">
                <form action="/oauth/authorize" method="POST">
                    <h1>授权请求</h1>
                    <p>你即将授权该应用以你的名义登录</p>
                    <p>
                        <button onClick={accept} type="submit" className="submitButton btn btn-primary btn-lg ">
                            同意
                        </button>
                        
                        <button onClick={reject} className="rejectButton btn btn-lg " type="reset" >
                            拒绝
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Auth;