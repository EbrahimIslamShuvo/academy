import React from 'react';

const SignIn = () => {
    return (
        <div>
            <div className="flex justify-between items-center w-full gap-10">
                <div className="">
                    <div className="flex flex-col items-center">
                        <h1>Welcome Back</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className="">
                    <form action="">
                        <div className="">
                            <label htmlFor="">Username</label>
                            <input className="input validator" type="email" required placeholder="mail@site.com" />
                            <div className="validator-hint">Enter valid email address</div>
                        </div>
                        <div className="">
                            <label htmlFor="">Password</label>
                            <input type="password" className="input validator" required placeholder="Password" minlength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        </div>
                        <div className="">
                            <a href="">Forget Password</a>
                        </div>
                        <div className="">
                            <button>SIGN IN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;