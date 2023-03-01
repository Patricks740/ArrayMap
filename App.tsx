import * as React from 'react';
import './style.css';

export default function App() {
  const persons = [
    {
      firstName: 'John',
      lastName: 'Doe',
      street: 'Main Street',
      city: 'New York',
    },
    {
      firstName: 'Ann',
      lastName: 'Smith',
      street: 'Second Street',
      city: 'Vancouver',
    },
  ];

  const onlyNames = persons.map(({ firstName, lastName }) => ({
    firstName: firstName,
    lastName: lastName,
  }));

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{JSON.stringify(persons)}</p>
      <p>{JSON.stringify(onlyNames)}</p>
    </div>
  );
}
