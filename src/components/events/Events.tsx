import eventStyles from './Events.module.css';

export default function Events() {
  return (
    <div className={eventStyles.container}>
      <h1 className={eventStyles.title}>Events</h1>
      <table className={eventStyles.eventTable}>
        <tbody>
          <tr>
            <td>
              <p className={eventStyles.subTitle}>Cocktail Hour</p>
              <p className={eventStyles.subSubTitle}>
                Drinks and appetizers in the courtyard
              </p>
            </td>
            <td>
              <p className={eventStyles.subTitle}>6:00</p>
            </td>
            <td>
              <p className={eventStyles.subTitle}>Receptie</p>
              <p className={eventStyles.subSubTitle}>
                Drankjes en versnapering op de binnenkoer
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className={eventStyles.subTitle}>Dinner</p>
              <p className={eventStyles.subSubTitle}>
                Sit down dinner inside the Abbey
              </p>
            </td>
            <td>
              <p className={eventStyles.subTitle}>7:30</p>
            </td>
            <td>
              <p className={eventStyles.subTitle}>Diner</p>
              <p className={eventStyles.subSubTitle}>
                Avond diner met bediening
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className={eventStyles.subTitle}>Crypt Party</p>
              <p className={eventStyles.subSubTitle}>
                Open to all! Drinks, dancing, dessert, and a late night snack! A
                DJ will be spinning late into the night.
              </p>
            </td>
            <td>
              <p className={eventStyles.subTitle}>9:30</p>
            </td>
            <td>
              <p className={eventStyles.subTitle}>Dansfeest</p>
              <p className={eventStyles.subSubTitle}>
                Iedereen welkom! Drankjes, dansen, dessert en een late night
                snack. Een DJ zal tot in de late uurtjes draaien.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
