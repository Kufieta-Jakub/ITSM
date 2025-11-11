import MyButton from '../components/buttons';
import styles from '../css/modules/tickets.module.css'
import { useState,useEffect } from 'react';
import CreateMenu from '../components/menu'

function CreateTicketList() {
  const [tickets, setTickets] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3100/api/tickets") 
      .then(res => res.json())
      .then(data => {
        setTickets(data.tickets || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Błąd pobierania danych:", err);
        setLoading(false);
      });
  }, []);

  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  if (loading) return <p>Ładowanie ticketów...</p>;


  return (
    <div className={styles.ticketList}>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Customer Name</th>
              <th>Customer Lastname</th>
              <th>Status</th>
              <th>Assigne</th>
              <th>Create time</th>
            </tr>
          </thead>
          <tbody>
            {console.log(tickets)}
            {tickets.map(ticket => (
              <tr 
                key={ticket.ID} 
                onClick={() => handleRowClick(ticket.ID)}
                className={selectedRow === ticket.ID ? styles.selectedRow : ''}
                style={{ cursor: 'pointer' }}
              >
                <td>{ticket.Id}</td>
                <td>{ticket.Title}</td>
                <td>{ticket.Name}</td>
                <td>{ticket.Surname}</td>
                <td>{ticket.Status}</td>
                <td>{ticket.Assigne}</td>
                <td>{ticket.Creation_Date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tickets() {
  
  return (
        <div className="App">
            <div class>
              <CreateMenu />
            </div>
          <div className={styles.content}>
            <div className={`${styles.card} ${styles.tickets}`}>
              <div style={{ textAlign: "right" }}> 
                <MyButton
                text="Add ticket"
                onClick={() => window.location.href = '/ServiceDesk/tickets/addTicket'}
                width={"100px"}
                margin={20}
                />
              </div>
              <CreateTicketList/>
            </div>
          </div>
        </div>
  );
}

export default Tickets;
