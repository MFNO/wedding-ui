import eventStyles from './Travel.module.css';

export default function Travel() {
  return (
    <div className={eventStyles.container}>
      <h1 className={eventStyles.topTitle}>Travel</h1>
      <div className={eventStyles.paragraphContainer}>
        <h2 className={eventStyles.subTitle}>Via Brussels</h2>
        <p className={eventStyles.text}>
          The main airport in Belgium is Brussels (<strong>BRU</strong>). If you
          are flying in directly before the wedding, we recommend arriving on
          the 26th. Keep in mind that there is a +6 hour difference in the US
          East Coast timezone.
        </p>
        <p className={eventStyles.text}>
          We recommend setting a flight alert for tickets (we use Google flights
          and the Hopper app) but purchase no later than March. Prices will
          typically only go up from there.
        </p>
        <p className={eventStyles.text}>
          Belgium’s national train line runs from the airport to all major
          cities in Belgium. Tickets can be purchased in person in the airport
          or on the{' '}
          <a
            href="https://www.belgiantrain.be/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            NMBS app or website
          </a>{' '}
          (all easily navigatable in English). There are two train stations in
          Gent, and either may be closer depending on your acomodation location.
        </p>
      </div>
      <div className={eventStyles.boldContainer}>
        <p className={eventStyles.boldText}>
          Brussels Zavantem → Gent St. Pieters or Gent Dampoort
        </p>
      </div>
      <div className={eventStyles.paragraphContainer}>
        <h2 className={eventStyles.subTitle}>Via Paris</h2>
        <p className={eventStyles.text}>
          Depending on your origin city, it is often cheaper to fly into Paris
          (Charles De Gaulle airport). From the <strong>CDG</strong> airport,
          you can board a high speed train to Brussels (the capital), where you
          make one train changeover to Ghent. The total cost for this is about
          70€, and the trip takes 2.5 hours. This combination of trains only
          runs a couple of times a day, so please check your arrival time and
          give yourself plenty of wiggle room. Find more details about this trip
          and book both tickets together on{' '}
          <a
            href="https://www.raileurope.com/en-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            RailEurope.com
          </a>
        </p>
      </div>
      <div className={eventStyles.boldContainer}>
        <p className={eventStyles.boldText}>
          Paris CDG Airport TGV → Brussels Midi → Gent St. Pieters or Gent
          Dampoort
        </p>
      </div>
      <div className={eventStyles.paragraphContainer}>
        <h2 className={eventStyles.subTitle}>Travel in Ghent</h2>

        <p className={eventStyles.text}>
          Ghent, Belgium, is a charming city that blends medieval history with
          modern atmosphere. Known for its picturesque canals, historic
          architecture like Gravensteen Castle and St. Bavo’s Cathedral, and its
          lively cultural scene, Ghent offers a perfect mix of old-world charm
          and vibrant energy.
        </p>
        <p className={eventStyles.text}>
          The Gent tourism website that can be found{' '}
          <a
            href="https://visit.gent.be/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , and has information about popular attractions and transit
          information. Remember to toggle the language in the top right corner
          from “NL” (Dutch) to “EN” (English).
        </p>

        <p className={eventStyles.text}>
          Ghent is a walkable, dense city with a robust tram and bus system. We
          recommend downloading the transit app <strong>“De Lijn”</strong> for
          purchasing tickets and easily mapping our your trips. Be prepared to
          work off the beer, chocolate and waffles with a lot of walking!
        </p>
        <p className={eventStyles.text}>
          Stay tuned for a list of our favorite spots!
        </p>
      </div>
      <div className={eventStyles.paragraphContainer}>
        <h2 className={eventStyles.subTitle}>Accommodation</h2>

        <p className={eventStyles.text}>
          There are many hotels, hostels, Airbnb’s to choose from in Gent. The
          tram only runs to 2AM, so if you plan on staying at the wedding late
          or don’t have a designated driver, we would recommend finding
          accommodation walking distance from the venue, as ridesharing apps can
          be a bit inconsistent.
        </p>
        <p className={eventStyles.text}>
          Two options that are less than a 10 minute walk:
        </p>
        <p className={eventStyles.text}>
          {' '}
          <a
            href="https://www.thehide.be/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Hide
          </a>
        </p>
        <p className={eventStyles.text}>
          {' '}
          <a
            href="https://www.bnb-achilles.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            B & B Achilles
          </a>
        </p>
      </div>
    </div>
  );
}
