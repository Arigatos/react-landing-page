import { useState } from 'react';
import PrimaryButton from 'views/components/PrimaryButton';

const SignUpEmail = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError(true);
    } else {
      setError(false);
    }

    setEmail(event.target.value);
  };

  return (
    <div className="signup-email d-flex align-items-center bg-white border-radius-md">
      <input
        placeholder="Type your email here"
        value={email}
        id="email"
        name="email"
        onChange={handleChange}
      />
      <PrimaryButton
        label="Sing up"
        disabled={!email || error}
        className="mr-1"
      />
    </div>
  );
};

export default SignUpEmail;
