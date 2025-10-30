import MyButton from '../components/buttons';
import styles from '../css/modules/tickets.module.css'
import { useState,useEffect } from 'react';
function Menu({ label, items, activeMenu, setActiveMenu }) {
  const isOpen = activeMenu === label;

  return (
    <div className="dropdown">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveMenu(isOpen ? null : label); // 🔹 otwieranie/zamykanie
        }}
      >
        {label} <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </a>

      {isOpen && (
        <div className="submenu show">
          {items.map((item) => (
            <a
              key={item}
              href={`/${label.split(" ").join("")}/${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
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
                <td>{ticket.ID}</td>
                <td>{ticket.Title}</td>
                <td>{ticket.CustomerName}</td>
                <td>{ticket.CustomerLastName}</td>
                <td>{ticket.Status}</td>
                <td>{ticket.Assigne}</td>
                <td>{ticket.CreateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tickets() {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div className="App">
      <div className='Slide-Left-Menu'>
        <h1>ITSM</h1>
        <Menu label="Service Desk" items={["Dashboard", "Tickets"]} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <Menu label="CMDB" items={["Servers", "PCs"]}activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <Menu label="Knowledge Base"items={["E-dysk"]}activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Menu label="Admin Panel"items={["Privileges"]}activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Menu label="MDM"items={["Smartphones","Laptops","Tablets"]}activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      </div>
      <div className={styles.rightContent}>

        <div className="Top-Bar">
          <div className='Path'>
            Service Desk {'>'} Dashboard
          </div>
          <div className='Account'>
            <a>Jakub Kufieta <span className="arrow">▼</span></a>
          </div>
        </div>

        <div className={styles.content}>
          <div className={`${styles.card} ${styles.tickets}`}>
            <div style={{ textAlign: "right" }}> 
              <MyButton
              text="Add ticket"
              width={"100px"}
              margin={20}
              />
            </div>
            <CreateTicketList/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Tickets;
