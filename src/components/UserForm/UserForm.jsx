import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';


export default function UserForm({
  className = '',
  label = 'Authenticate',
  onSubmit,
}) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formState;

    try {
     
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
        <legend>{label}</legend>
        <section>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleFormChange}
          />
        </section>
        <section>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
          />
        </section>
        <button type="submit" disabled={loading}>
          {loading ? 'Authenticating...' : label}
        </button>
        {formError && <p>{formError}</p>}
    
    </form>
  );
}
