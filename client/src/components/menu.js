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
function CreateMenu()
{
    const [activeMenu, setActiveMenu] = useState(null);
    return(
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
            </div>
    </div>
    );

}
export default CreateMenu;