import React, { useState } from 'react';
import PasswordResetModal from './PasswordResetModal'; // Import your modal component
import './Login.css';
import { auth } from '../../API/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false); // State for modal visibility

    const toggleCard = () => {
        setIsLogin(!isLogin);
    }

    const handleContinue = async () => {
        if (isLogin) {
            // Sign in
            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log('Login successful');
            } catch (error) {
                console.error('Login error:', error.message);
            }
        } else {
            // Sign up
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log('Sign up successful');
            } catch (error) {
                console.error('Sign up error:', error.message);
            }
        }
    }

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Google login successful. Email:', user.email);
        } catch (error) {
            console.error('Google login error:', error.message);
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>{isLogin ? 'Welcome Back!!' : 'Create Account'}</h2>
                </div>

                <div className="login-form">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="input-field" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Your password" 
                        className="input-field" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button className="continue-btn" onClick={handleContinue}>
                        Continue
                    </button>
                    <p>OR</p>
                    <div className="alternative-login">
                        <button className="alt-btn google-btn" onClick={handleGoogleSignIn}> 
                            <FcGoogle size={'15'} style={{position:'relative',right:'10px'}}/> Continue with Google
                        </button>
                    </div>
                    <div className="signup-section">
                        <p>
                            {isLogin ? "Don't have an account?" : "Already have an account?"} 
                            <a href="#" onClick={toggleCard}>
                                {isLogin ? ' Sign up' : ' Log in'}
                            </a>
                        </p>
                        {isLogin && (
                            <p>
                                <a href="#" onClick={() => setShowModal(true)}>Forgot Password?</a> {/* Open modal */}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Render the modal if showModal is true */}
            {showModal && <PasswordResetModal onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Login;
