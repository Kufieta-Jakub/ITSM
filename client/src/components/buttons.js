import '../css/uicomponents.css';

export default function MyButton({ text, onClick,width,margin }) {
  return (
    <button className="button" 
        onClick={onClick} 
        style={{width:width,margin:margin}}
        
    >
      {text}
    </button>
  );
}
