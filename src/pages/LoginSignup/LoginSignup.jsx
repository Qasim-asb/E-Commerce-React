import React, { useState } from 'react'
import styles from './LoginSignup.module.css'
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  function handleInputChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      name: '',
      email: '',
      password: ''
    })
  }

  function toggleFormMode() {
    setIsLogin(!isLogin)
    setFormData({
      name: '',
      email: '',
      password: ''
    })
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  return (
    <main className={styles.login_signup}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>{isLogin ? 'Login to Your Account' : 'Create an Account'}</h3>
          <p>{isLogin ? 'Welcome back! Please enter your details' : 'Join us and discover amazing products'}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <div className={styles.input_group}>
              <FaUser className={styles.input_icon} />
              <input
                type="text"
                name="name"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className={styles.input_group}>
            <FaEnvelope className={styles.input_icon} />
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.input_group}>
            <FaLock className={styles.input_icon} />
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className={styles.password_toggle} onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {!isLogin && (
            <div className={styles.terms}>
              <input
                type="checkbox"
                id="terms"
                className={styles.checkbox}
                required
              />
              <label htmlFor="terms" className={styles.terms_text}>
                By continuing, you agree to our{' '}
                <a href="#" className={styles.terms_link}>Terms of Use</a>
                {' '}and{' '}
                <a href="#" className={styles.terms_link}>Privacy Policy</a>.
              </label>
            </div>
          )}

          <button type="submit">{isLogin ? 'Login' : 'Create Account'}</button>
        </form>

        <div className={styles.form_footer}>
          <p>{isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
            <span className={styles.toggle_link} onClick={toggleFormMode}>{isLogin ? 'Sign up' : 'Login'}</span>
          </p>
          {isLogin && <a href="#" className={styles.forgot_link}>Forgot password?</a>}
        </div>
      </div>
    </main>
  )
}

export default LoginSignup
