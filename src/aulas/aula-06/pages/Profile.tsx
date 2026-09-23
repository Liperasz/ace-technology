import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../components/FormField'

function Profile() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const nameValid = name.trim().length >= 3
  const passwordValid = password.length >= 3
  const confirmPasswordValid = confirmPassword.length >= 3 && confirmPassword === password

  // Mensagens iguais às do profile.js original
  const nameMessage = nameValid ? 'Valid name.' : 'Name too short!'
  const passwordMessage = passwordValid ? 'Valid password.' : 'Password too short!'
  const confirmPasswordMessage =
    confirmPassword.length < 3
      ? 'Confirmation too short!'
      : confirmPassword !== password
      ? 'Passwords do not match!'
      : 'Passwords match.'

  // No original, digitar na senha já revalida a confirmação
  // por isso o campo de confirmação também fica "tocado" quando a senha muda
  const nameTouched = submitted || name.length > 0
  const passwordTouched = submitted || password.length > 0
  const confirmPasswordTouched = submitted || password.length > 0 || confirmPassword.length > 0

  function handleSignup() {
    setSubmitted(true)
    if (nameValid && passwordValid && confirmPasswordValid) {
      navigate('/')
    } else {
      alert('Please fill in the sign up form correctly before continuing.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 md:px-8 py-16 md:py-24">
      <h1 className="font-montserrat font-semibold tracking-[0.5rem]">SIGN UP</h1>
      <p className="font-inter font-light text-center max-w-md">
        Create your account to access the full catalog and the bespoke area.
      </p>

      <form className="flex flex-col gap-6 w-full max-w-md font-inter font-normal">
        <FormField
          label="NAME"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          message={nameMessage}
          valid={nameValid}
          touched={nameTouched}
        />
        <FormField
          label="PASSWORD"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          message={passwordMessage}
          valid={passwordValid}
          touched={passwordTouched}
        />
        <FormField
          label="CONFIRM PASSWORD"
          type="password"
          placeholder="Repeat your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          message={confirmPasswordMessage}
          valid={confirmPasswordValid}
          touched={confirmPasswordTouched}
        />

        <button
          type="button"
          onClick={handleSignup}
          className="inline-block bg-transparent text-navy border border-navy px-4 py-5 font-inter font-semibold text-sm tracking-[0.25rem] rounded-2xl cursor-pointer transition-all duration-300 hover:bg-navy hover:text-cloud"
        >
          SIGN UP
        </button>
      </form>
    </div>
  )
}

export default Profile
