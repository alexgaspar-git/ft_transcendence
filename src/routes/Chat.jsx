import { useState } from "react";


export default function Chat() {

    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Function to handle sending a message
    const handleSendMessage = () => {
        // Update the messages state with the new message
        setMessages((prevMessages) => [...prevMessages, inputValue]);
        
        // Clear the input field
        setInputValue('');
    };
    
    const whichBubble = (index) => {
        console.log(index);
        return index % 2 == 1 ? "bubble-one" : "bubble-two";
    }
    

  return (

    <div className="chat-wrapper">
        <div>
            {messages.map((message, index) => (
                <div className={"message-bubble " + whichBubble(index)} key={index}>{message}</div>
            ))}
        </div>
        <input type="text" placeholder="tell me your secrets" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}