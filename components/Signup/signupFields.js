const signupFields = [
  {
    labelText: "Firstname",
    labelFor: "firstname",
    id: "first-name",
    name: "first-name",
    type: "text",
    autoComplete: "first-name",
    isRequired: true,
    placeholder: "First Name",
  },
  {
    labelText: "Lastname",
    labelFor: "Lastname",
    id: "last-name",
    name: "last-name",
    type: "text",
    autoComplete: "last-name",
    isRequired: true,
    placeholder: "Last Name",
  },

  {
    labelText: "Email Address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email Address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },

];

export {signupFields}
