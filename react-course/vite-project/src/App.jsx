import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import robotImage from './assets/robot.png'
import userImage from './assets/user.png'
import './App.css'

function ChatInput({ chatMessages, setChatMessages }) {
        const  [ inputText, setInputText ] = useState ('');
        function saveInputText(event) {
          setInputText(event.target.value);
        };

        function sendMessage() {
          if (inputText.trim() === '') {
            return;
          }
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "User",
              id: crypto.randomUUID()
            }
          ];
          setChatMessages(newChatMessages);
          const response = Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID()
            }
          ]);
        
          setInputText('');
          
        } 
        return (
          <div className="chat-input-container">
            <input 
              placeholder="Type your message..." 
              size="30"
              onChange={saveInputText}
              value={inputText}
              className="chat-input"
            />
            <button className="js-send-button" 
            onClick={sendMessage}>Send</button>
          </div>
        );
      }
      function ChatMessage ({ message, sender }) {
        return (
          <div className ={sender === 'robot' ? 'robot-message' : 'user-message'}>
            {sender === 'robot' && (<img src={robotImage} className="chat-message-icon" />)}
            <div className="chat-message-text">
            {message}
            </div>
            {sender === 'User' && (<img src={userImage} className="chat-message-icon" />)}
          </div>
        );
      };
      function ChatMessages({ chatMessages }) {
       const chatMessagesRef = useRef(null);
        useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]);
      
        return (
          <div className="chat-messages-container"
          ref={chatMessagesRef} >
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage 
                  message={chatMessage.message} 
                  sender={chatMessage.sender} 
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      };

function App() {
         const [chatMessages, setChatMessages] = useState ([{ 
          message: "Hello Chatbot", 
          sender: "User",
          id: 'id1' 
        },  { 
          message: "Hello! How can I help you?", 
          sender: "robot",
          id: 'id2'
        },  { 
          message: "can you get me today date?", 
          sender: "User",
          id: 'id3' 
        },  { 
          message: "Today is June 7, 2024.", 
          sender: "robot",
          id: 'id4' 
        }]);

        return (
          <div className="chat-container">
            
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            />
          </div>
        );
      };

export default App
