
import React, { useEffect, useState } from 'react';
import ScrollableBox from './ScrollbarBox';
import './css/ScrollableBox.css';

export const Message = () => {
  const [messageData, setMessageData] = useState(null);
  const idReceive = +localStorage.getItem("idReceive");
  const tokenValue = localStorage.getItem("token");

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await fetch(`http://localhost:8081/messages/MessageDUnePersonne?idReceive=${idReceive}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenValue}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error:', errorData);
        } else {
          const responseData = await response.json();
          console.log('Response Data:', responseData);
          setMessageData(responseData);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    getMessage();
  }, [tokenValue, idReceive]);

  const handleSendMessage = async (text) => {
    try {
      const response = await fetch('http://localhost:8081/messages/envoyerMessage', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenValue}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idReceive,
          message: text,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
      } else {
        console.log('Message submitted:', text);
        console.log('Message sent successfully');

        // Mettre à jour le state local avec le nouveau message
        setMessageData(prevData => prevData ? [...prevData, { _id: Date.now(), idSend: 1 , message: text }] : null);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      {messageData && (
        <div>
          <ScrollableBox onSubmit={handleSendMessage}>
            <div style={{ width: '100%' }}>
              {messageData.map((liste) => (
                <div
                  key={liste._id}
                  className={liste.idSend === idReceive ? 'align-left' : 'align-right' }
                >
                  <div>{liste.message}</div>
                </div>
              ))}
            </div>
          </ScrollableBox>
        </div>
      )}
    </div>
  );
};


