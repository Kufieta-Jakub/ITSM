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
                      Id:<br/>
                      <input type='text'></input><br/>
                      <br/>
                      <b>Client information:</b><br/>
                      Client:<br/>
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
                    <div className={styles.rightTicket}>
                      <div className={styles.tableWrapper}>
                        <table>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Author</th>
                              <th>Date</th>
                              <th>Content</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Anna Kowalska</td>
                              <td>2025-11-10 10:15</td>
                              <td>Klient zgłosił problem z logowaniem.</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Piotr Nowak</td>
                              <td>2025-11-10 11:40</td>
                              <td>Sprawa przekazana do działu IT.</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Agnieszka Lewandowska</td>
                              <td>2025-11-10 13:05</td>
                              <td>Problem rozwiązany – konto odblokowane.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                </div>
           </div>
      </div>
  );
}

export default AddTicket;
