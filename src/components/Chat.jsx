import { useState } from 'react'
import { Mic, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, how are you today?", sender: "system" },
    { id: 2, text: "I'm feeling a bit overwhelmed!", sender: "user" },
    { id: 3, text: "I'm sorry to hear that. What's been going on?", sender: "system" },
    { id: 4, text: "I've been dealing with a lot of stress at work.", sender: "user" },
    { id: 5, text: "That sounds really challenging. How have you been coping with it", sender: "system" }
  ])

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { 
        id: messages.length + 1, 
        text: message, 
        sender: "user" 
      }])
      setMessage('')
      
      // Simulate therapist response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "Thank you for sharing that with me. Can you tell me more about what specifically is causing you stress?",
          sender: "system"
        }])
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="theratalk-header">
        <h1 className="theratalk-title">TheraTalk</h1>
      </div>

      {/* Chat Container */}
      <div className="content-area">
        <div className="chat-container">
          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Mic size={20} />
            </Button>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="flex-1 border-none bg-transparent focus:ring-0"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button 
              onClick={sendMessage}
              size="icon" 
              className="bg-green-500 hover:bg-green-600 rounded-full"
            >
              <Send size={20} className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat

