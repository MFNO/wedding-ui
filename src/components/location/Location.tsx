import locationStyles from './Location.module.css';
export default function Location() {
  return (
    <div className={locationStyles.container}>
      <h1 className={locationStyles.title}>Location</h1>
      <iframe
        width="80%"
        height="500px"
        style={{ border: '0' }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=Sint-Pietersabdij%2C%20Sint-Pietersplein%2C%20Ghent%2C%20Belgium&key=AIzaSyBozpCUnZE6Pe6oJ2GtqM8ufnIYd1MYLJ4"
      ></iframe>
      <div
        style={{
          marginTop: '20px',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <p className={locationStyles.text}>Sint-Pietersabdij</p>
        <p
          style={{
            marginBottom: '40px',
          }}
          className={locationStyles.smallText}
        >
          {' '}
          Saint Peter's Abbey
        </p>
        <p className={locationStyles.text}>Sint-Pietersplein 9, 9000 Gent </p>
        <p className={locationStyles.text}>België</p>
      </div>
    </div>
  );
}
