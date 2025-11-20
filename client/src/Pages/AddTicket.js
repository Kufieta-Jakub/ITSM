import '../css/Menu.css';
import CreateMenu from '../components/menu';
import styles from '../css/modules/addTicket.module.css'
import MyButton from '../components/buttons';
import { useState,useEffect } from 'react';

function AddTicket() {
    const [id, setId] = useState([]);
    const [value, setValue] = useState([]);
    const [company, setCompany] = useState("");
    const [getSpecificClient,setSpecificClient] = useState([]);
    const [clients, setClients] = useState([]);
    const [moreThanfive, setMoreThanfive] = useState(1);
    const [data, setData] = useState({
      
      name:"",
      surname:"",
      description: "",
      template: "",
      title: "",
      service: "",
      impact: "4 - not important",
      assigne: "",
      status: "",
      resolution: ""
    });

    // pobranie ostatniego id ticketa
    useEffect(() => {
      fetch("http://localhost:3100/api/getLastTicketId")
        .then(res => res.json())
        .then(data => {
          setId(data.lastId+1); 
        })
        .catch(err => {
          console.error("Błąd pobierania danych:", err);
        });
    }, []);

    //obsłużenie pokazywania sie klientów
    const handleChanges = (e) => {
      setValue(e.target.value);
    };

    useEffect(() => {
      if (value.length >= 3) {
        fetch(`http://localhost:3100/api/getClientWith/${value}`)
          .then(res => res.json())
          .then(data => {
            const list = data.clients || [];
            setClients(list);

            if (list.length > 3) {
              setMoreThanfive(3);
            } 
            else if(list.length==1)
            {
              setMoreThanfive(2);
            }
            else {
              setMoreThanfive(list.length);
            }
          })
          .catch(err => {
            console.error("Błąd pobierania danych:", err);
          });
      }
      else
        setClients([]);
    }, [value]);
    
    //wybór klienta
    const handleSelect = (e) => {
      const selectedId = e.target.value;
      const selectedClient = clients.find(c => c.Id == selectedId);

      if (!selectedClient) return;

        setValue(`${selectedClient.Name} ${selectedClient.Surname}`);
        setData({
          ...data,
          name: selectedClient.Name,
          surname: selectedClient.Surname
        });
        setCompany(selectedClient.Company || "");
        setSpecificClient(selectedId);
        setClients([]);
    };
    
    const saveTicket = async () => {
      const res = await fetch("http://localhost:3100/api/addTicket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
    };


    return (
      <div className="App">
        <div>
              <CreateMenu />
        </div>
           <div className={styles.content}>
                <div className={`${styles.card} ${styles.tickets}`}>
                    <div className={`${styles.inputs}`}>
                      Ticket id:<br/>
                      {/*do value dopisuje sie to co sie wyswietla tip na przyszłosc*/}
                      <input type='text' className={styles.form_input_ID} readOnly value={id}></input><br/>
                      <br/>
                      {/* client section */}
                      <div className={styles.selectWrapper}>
                        <b>Client information:</b><br/>
                        Client:<br/>
                        <input type='text' className={styles.form_input} value={value} onChange={handleChanges} placeholder='Wpisz 3 litery'></input><br/>
                        {clients.length>0 &&(
                        <select size={moreThanfive} className={styles.dropdown} onChange={handleSelect}>
                          {clients.map(client =>(
                            <option key={client.Id} value={client.Id}>{client.Name} {client.Surname}</option>
                          ))}
                        </select>
                        )}
                      </div>
                      Company:<br/>
                      <input type='text' className={styles.form_input} value={company} readOnly></input><br/>
                      <br/>

                      <b>Ticket information:</b><br/>
                      Description:<br/>
                      <input
                        type='text'
                        className={styles.form_input}
                        value={data.description}
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                      /><br/>

                      Template:<br/>
                      <input
                        type='text'
                        className={styles.form_input}
                        value={data.template}
                        onChange={(e) => setData({ ...data, template: e.target.value })}
                      /><br/>

                      Title:<br/>
                      <input
                        type='text'
                        className={styles.form_input}
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                      /><br/>

                      <b>Advanced information:</b><br/>
                      Service:<br/>
                      <input
                        type='text'
                        className={styles.form_input}
                        value={data.service}
                        onChange={(e) => setData({ ...data, service: e.target.value })}
                      /><br/>

                      Impact:<br/>
                      <select
                        type='text'
                        className={styles.form_input}
                        value={data.impact}
                        onChange={(e) => setData({ ...data, impact: e.target.value })}
                      >
                      <option>4 - not important</option>
                      <option>3 - slighty important</option>
                      <option>2 - important</option>
                      <option>1 - important as hell</option>
                      </select><br/>
                      Assigne:<br/>
                      <input
                        type='text'
                        className={styles.form_input}
                        value={data.assigne}
                        onChange={(e) => setData({ ...data, assigne: e.target.value })}
                      /><br/>

                      Status:<br/>
                      <input
                        type='text'
                        className={styles.form_input}
                        value={data.status}
                        onChange={(e) => setData({ ...data, status: e.target.value })}
                      /><br/>

                      Resolution:<br/>
                      <input
                        type='text'
                        className={styles.form_input}
                        value={data.resolution}
                        onChange={(e) => setData({ ...data, resolution: e.target.value })}
                      /><br/>

                      <div className={styles.form_buttons}>
                        <MyButton
                          text="Save ticket"
                          width={"170px"}
                          margin={5}
                          onClick={saveTicket}
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
