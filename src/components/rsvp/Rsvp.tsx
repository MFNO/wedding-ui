import { useState } from 'react';
import rsvpStyles from './Rsvp.module.css';
import line from '../../images/line.png';

export default function Rsvp() {
  const [formData, setFormData] = useState({
    partyType: '', // Radio button value
    names: [''], // Array of names based on the number of guests
    numberOfGuests: 1, // Number input value
    dietaryRestrictions: '', // Text input value
  });

  console.log(formData);

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newNames = [...formData.names];
    newNames[index] = e.target.value;
    setFormData({
      ...formData,
      names: newNames,
    });
  };

  const handleDietaryRestrictionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      dietaryRestrictions: e.target.value,
    });
  };

  const handleNumberOfGuestsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newNumberOfGuests = Number(e.target.value);
    const newNames = new Array(newNumberOfGuests).fill('');
    setFormData({
      ...formData,
      numberOfGuests: newNumberOfGuests,
      names: newNames,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.example.com/submit-party', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      alert('Form submitted successfully!');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={rsvpStyles.container}>
      <h1 className={rsvpStyles.title}>RSVP</h1>
      <p
        className={rsvpStyles.text}
        style={{
          fontSize: '3vw',
          lineHeight: '3vw',
          marginBottom: '1vw',
        }}
      >
        Please RSVP no later than March 21, 2025
      </p>
      <p
        className={rsvpStyles.text}
        style={{
          fontSize: '2vw',
          lineHeight: '2vw',
        }}
      >
        Graag uiterlijk tegen 21 maart 2025 reageren
      </p>
      <img
        style={{
          width: '40%',
          marginTop: '2vw',
          marginBottom: '2vw',
        }}
        src={line}
      />
      <p
        className={rsvpStyles.text}
        style={{
          fontSize: '3vw',
          lineHeight: '3vw',
          marginBottom: '1vw',
        }}
      >
        Enter each member of your party below
      </p>
      <p
        className={rsvpStyles.text}
        style={{
          fontSize: '2vw',
          lineHeight: '2vw',
        }}
      >
        Geef alle genodigend onderstaad in
      </p>
      <div className={rsvpStyles.form}>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1vw',
              marginTop: '1vw',
            }}
          >
            <label>Number of guests</label>
            <input
              onChange={handleNumberOfGuestsChange}
              name="numberOfGuests"
              type="number"
              min="1"
              value={formData.numberOfGuests}
            />
            {formData.names.map((name, index) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1vw',
                }}
                key={index}
              >
                <label>Full Name for Guest {index + 1}</label>
                <input
                  onChange={(e) => handleChangeName(e, index)}
                  name={`name-${index}`}
                  type="text"
                  value={name}
                />
              </div>
            ))}
            <label>Dietary Restrictions or Additional Requests</label>
            <input
              onChange={handleDietaryRestrictionsChange}
              name="dietaryRestrictions"
              type="text"
              value={formData.dietaryRestrictions}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1vw',
              marginBottom: '200vw',
            }}
          >
            <button
              className={rsvpStyles.button}
              type="submit"
              disabled={
                formData.names.some((name) => name.length === 0) ||
                !formData.dietaryRestrictions
              }
            >
              Gladly Accept
            </button>
            <button
              className={rsvpStyles.button}
              type="submit"
              disabled={
                formData.names.some((name) => name.length === 0) ||
                !formData.dietaryRestrictions
              }
            >
              Regretfully Decline
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
