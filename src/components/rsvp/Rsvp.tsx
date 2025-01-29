import { useState } from 'react';
import rsvpStyles from './Rsvp.module.css';
import line from '../../images/line.png';

export default function Rsvp() {
  const [formData, setFormData] = useState({
    attending: true,
    names: [''], // Array of names based on the number of guests
    guestCount: 1, // Number input value
    dietaryInformation: '', // Text input value
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
      dietaryInformation: e.target.value,
    });
  };

  const handleNumberOfGuestsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newNumberOfGuests = Number(e.target.value);
    const newNames = new Array(newNumberOfGuests).fill('');
    setFormData({
      ...formData,
      guestCount: newNumberOfGuests,
      names: newNames,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://www.manuapi.zawaco.be/rsvps', {
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

  const handleAttendingChange = (isAttending: boolean) => {
    setFormData({
      ...formData,
      attending: isAttending,
    });
  };

  return (
    <>
      {' '}
      <div className={rsvpStyles.container}>
        <h1 className={rsvpStyles.title}>RSVP</h1>
        <p className={rsvpStyles.text}>
          Please RSVP no later than March 21, 2025
        </p>
        <p className={rsvpStyles.subText}>
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
        <p className={rsvpStyles.text}>Enter each member of your party below</p>
        <p className={rsvpStyles.subText}>Geef alle genodigend onderstaad in</p>
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
              <label>Number of Guests</label>
              <input
                onChange={handleNumberOfGuestsChange}
                name="numberOfGuests"
                type="number"
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
                value={formData.dietaryInformation}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1vw',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <button
                className={rsvpStyles.button}
                type="submit"
                onClick={() => handleAttendingChange(true)}
                disabled={
                  formData.names.length === 0 ||
                  formData.names.some((name) => name.length === 0)
                }
              >
                Gladly Accept
              </button>
              <button
                className={rsvpStyles.button}
                type="submit"
                onClick={() => handleAttendingChange(false)}
                disabled={
                  formData.names.length === 0 ||
                  formData.names.some((name) => name.length === 0)
                }
              >
                Regretfully Decline
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={rsvpStyles.gift}>
        <div
          style={{
            width: '80%',
          }}
        >
          <p className={rsvpStyles.text}>Gifts </p>
          <p className={rsvpStyles.subText}>
            Many of you are traveling across the globe to celebrate with us in
            Belgium, so your presence means the world for us and is all we ask
            for.
          </p>
          <p className={rsvpStyles.subText}>
            If you'd still like to contribute to our honeymoon fund, please use
            the information below.
          </p>
          <p className={rsvpStyles.subText}>Manu Fourneau</p>

          <p className={rsvpStyles.subText}>BE63 0636 8069 4808</p>
          <p className={rsvpStyles.subText}>
            <a
              style={{
                color: 'white',
              }}
              href="https://venmo.com/u/manufourneau"
              target="_blank"
              rel="noopener noreferrer"
            >
              Venmo
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
