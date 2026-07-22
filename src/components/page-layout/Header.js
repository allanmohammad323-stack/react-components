import './style.css';
const style = {
    color: 'black',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px',
    cursor: 'pointer',
   display: 'flex',
   top: '0',
  textAlign: 'center',
  justifyContent: 'center'
}



//******** */
export function Header() {
    return (
        <header className="Header">
            <span style={style} {...{onClick: () => {console.log("home");}}}>Home</span>
            <span style={style} {...{onClick: () => {console.log("about");}}}>About</span>
            <span style={style} {...{onClick: () => {console.log("contact");}}}>Contact US</span>
        </header>
    )
}