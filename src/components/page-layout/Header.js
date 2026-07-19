import './style.css';
const style = {
    color: 'black',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px',
    cursor: 'pointer'

}
//******** */
export function Header() {
    return (
        <header className="Header">
            <span style={style}>Home</span>
            <span style={style}>About</span>
            <span style={style}>Contact US</span>
        </header>
    )
}