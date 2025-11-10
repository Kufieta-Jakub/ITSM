import '../css/Menu.css';
import CreateMenu from '../components/menu';
import styles from '../css/modules/addTicket.module.css'

function AddTicket() {
    return (
      <div className="App">
        <div class>
              <CreateMenu />
        </div>
           <div className={styles.content}>
                <div className={`${styles.card} ${styles.tickets}`}>
                    <div className={`${styles.inputs}`}>
                      <b>Client information:</b><br/>
                      Name:<br/>
                      <input type='text'></input><br/>
                      Surname:<br/>
                      <input type='text'></input><br/>
                      Company:<br/>
                      <input type='text'></input><br/>
                      <br/>

                      <b>Ticket information:</b><br/>
                      Description:<br/>
                      <input type='text'></input><br/>
                      Template:<br/>
                      <input type='text'></input><br/>
                      Title:<br/>
                      <input type='text'></input><br/>
                      <br/>

                      <b>Advanced information:</b><br/>
                      Service:<br/>
                      <input type='text'></input><br/>
                      Urgentity:<br/>
                      <input type='text'></input><br/>
                      Assigne:<br/>
                      <input type='text'></input><br/>
                      Status:<br/>
                      <input type='text'></input><br/>
                      Resolution:<br/>
                      <input type='text'></input><br/>

                      <button>Add Ticket</button>
                      <button>Clear Ticket</button>
                    </div>
                </div>
           </div>
      </div>
  );
}

export default AddTicket;
