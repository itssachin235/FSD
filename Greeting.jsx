import { usestate } from "react";

function Greeting(){
     //step1:create a state variable
    const [message, setMessage] = useState("Hello Class");

    function ChangeMessage(){
        //step2:create a function to update the message
        setMessage("You  clicked the button!");
    }
     //step3:ReturnJsx
    return(
        <div>
            <h2>{message}</h2>
            <button onclick={ChangeMessage}>Click Me</button>
        </div>
    );
}

export default Greeting;