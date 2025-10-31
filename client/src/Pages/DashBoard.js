import styles from '../css/modules/dashBoard.module.css';
import '../css/Menu.css';
import CallGraph from '../components/call_graph';
import GoogleCalendar from '../components/google_calendar';
import TicketGraph from '../components/ticket_graph';
import CreateMenu from '../components/menu';


function DashBoard() {
    return (
      <div className="App">
        <div class>
              <CreateMenu />
        </div>
          <div className={styles.content}>
            <div className={`${styles.card} ${styles.graph}`}>
              <CallGraph />
            </div>
            <div className={`${styles.card} ${styles.calendar}`}>
              <GoogleCalendar />
            </div>
            <div className={`${styles.card} ${styles.tickets}`}>
              <TicketGraph />  
            </div>
            <div className={`${styles.card} ${styles.sthElse}`}>Something else</div>
          </div>
      </div>
  );
}

export default DashBoard;
