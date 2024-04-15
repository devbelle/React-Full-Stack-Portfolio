import { useState } from 'react';
//import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helper';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [formState, setFormState] = useState({name: '', email: '', message: ''});
  const [formSent, setFormSent] = useState(false);
  // TODO: Create a password variable and a function "setPassword" using useState
//   const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {name, email, message} = formState;

  const handleSubmit = (e) => {
    // Getting the value and name of the input which triggered the change
    e.preventDefault();
    // const { target } = e;
    // const inputType = target.name;
    // const inputValue = target.value;
    console.log(formState)
    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'


    if(formState.name && formState.email && formState.message) {
    window.location.href = `mailto:dbelle722@gmail@gmail.com?subject=${formState.name}&body=${formState.email}`
    setFormSent(true)
    }
  };

  const handleForm = (e) => {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`A ${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

//     // If successful, we want to clear out the input after registration.
//     setUserName('');
//     // TODO: Set the password back to an empty string after the user clicks submit
//     setPassword('');
//     setEmail('');
//     alert(`Hello ${userName}`);
//   };

  return (
    <div>
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" type="text" name="name"  id="author" defaultValue={name} onBlur={handleForm} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email Address</label>
          <input className="input" type="email" id="email" name="email" defaultValue={email} onBlur={handleForm} />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Message</label>
          <textarea className="textarea" name="message" id="text" rows="5" defaultValue={message} onBlur={handleForm} />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
      </form>
    </div>
  );

}

export default Contact;