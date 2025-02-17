import rsvp from '../images/rsvp.png';
import styles from './Rsvp.module.css';
export default function std() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          maxWidth: '90vw',
          maxHeight: '90svh',
          objectFit: 'contain',
        }}
        src={rsvp}
      />
      <button className={styles.addCalendarBtn}>
        <i className="fas fa-calendar-alt"></i>
        <a
          href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20250628T110000Z%0ADTEND:20250629T020000Z%0ASUMMARY:Sara & Manu Wedding%0ADESCRIPTION:Sara & Manu Wedding%0ALOCATION:Ghent, Belgium%0AEND:VEVENT%0AEND:VCALENDAR"
          download="event.ics"
        >
          Add to Calendar
        </a>
      </button>
    </div>
  );
}
