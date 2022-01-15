import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';


export default function UserForm({
  className = '',
  label = 'Authenticate',
  onSubmit,
}) {
  // const { formState, formError, handleFormChange, setFormError } = useForm({
  //   email: '',
  // });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { email } = formState;

    try {
      if (!email || password.length < 6)
        throw new Error(
          'An email and password (with 6+ characters) are required.'
        );
      setLoading(true);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <fieldset>
        <legend>{label}</legend>
     
        <button type="submit" disabled={loading}>
          {loading ? 'Authenticating...' : label}
        </button>
        {formError && <p>{formError}</p>}
      </fieldset>
    </form>
  );
}