export default function NameReceiver({sendName}) {
 
   return (
     <button onClick={() => sendName("Mohammad")}>
      Send Name
    </button>
   );
}