import '../css/Menu.css';
import CreateMenu from '../components/menu';
import styles from '../css/modules/addTicket.module.css'
import MyButton from '../components/buttons';

function AddTicket() {
    return (
      <div className="App">
        <div class>
              <CreateMenu />
        </div>
           <div className={styles.content}>
                <div className={`${styles.card} ${styles.tickets}`}>
                    <div className={`${styles.inputs}`}>
                      Ticket id:<br/>
                      {/*do value dopisuje sie to co sie wyswietla tip na przyszłosc*/}
                      <input type='text' className={styles.form_input} readOnly></input><br/>
                      <br/>
                      <b>Client information:</b><br/>
                      Client:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      Company:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      <br/>

                      <b>Ticket information:</b><br/>
                      Description:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      Template:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      Title:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      <br/>

                      <b>Advanced information:</b><br/>
                      Service:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      Urgentity:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      Assigne:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      Status:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      Resolution:<br/>
                      <input type='text' className={styles.form_input}></input><br/>
                      <div className={styles.form_buttons}>
                        <MyButton
                            text="Save ticket"
                            width={"170px"}
                            margin={5}
                            />
                      </div>
                    </div>
                    <div className={styles.rightTicket}>
                    Notes:
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
                      Add work info:<br/>
                      Note:<br/>
                      <div className={styles.notes}>     
                        <textarea className={styles.inputNotes}></textarea> 
                        <div className={styles.buttonsSection}>
                        <MyButton
                          text="Add note"
                          width={"100px"}
                          margin={20}
                          />
                        </div>
                      </div>
                    </div>

                </div>
           </div>
      </div>
  );
}

export default AddTicket;
