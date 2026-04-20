import { useEffect, useRef, useState } from 'react'
import './chatbot.css'

const FAQ = [
  {
    keywords: ['hello', 'hi', 'hey', 'greet'],
    answer: "Hi there! 👋 I'm Sri's assistant. Ask me about his skills, projects, experience, or how to contact him!"
  },
  {
    keywords: ['skill', 'know', 'tech', 'language', 'python', 'java', 'machine learning', 'ai', 'deep learning', 'nlp'],
    answer: "Srikaran is skilled in Data Analytics, Machine Learning, Deep Learning, NLP, Artificial Intelligence, Data Visualization, Python, Java, R, and Web Development."
  },
  {
    keywords: ['project', 'work', 'portfolio', 'built', 'made'],
    answer: "Srikaran has completed 10+ projects including Skill Gap Severity Prediction (Streamlit ML app) and various data science projects. Check the My Work section for more!"
  },
  {
    keywords: ['experience', 'year', 'background', 'history'],
    answer: "Srikaran has 2+ years of hands-on experience in data science and AI, with 10+ certifications and a strong background in both analytics and web development."
  },
  {
    keywords: ['service', 'offer', 'provide', 'do'],
    answer: "Srikaran offers: Data Analysis, Analytical Thinking, Gap Analysis, Data Visualization, Machine Learning, and Web Development services."
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'available'],
    answer: "You can reach Srikaran at mastersk0210@gmail.com or call +353 894002480. He's based in Dublin, Ireland!"
  },
  {
    keywords: ['linkedin', 'github', 'social', 'profile'],
    answer: "Find Srikaran on LinkedIn at linkedin.com/in/srikaran-sankar and GitHub at github.com/mastersk0210-del."
  },
  {
    keywords: ['location', 'based', 'live', 'where', 'ireland', 'india'],
    answer: "Srikaran is based in Dublin, Ireland and originally from Chennai, Tamil Nadu, India."
  },
  {
    keywords: ['certif', 'qualif', 'degree', 'educat'],
    answer: "Srikaran holds 10+ certifications in data science, machine learning, and related fields."
  },
  {
    keywords: ['resume', 'cv'],
    answer: "You can download Srikaran's resume directly from the portfolio — click the 'My Resume' button on the home page!"
  },
]

const DEFAULT = "I'm not sure about that. Try asking about Srikaran's skills, projects, experience, services, or contact details!"

function getReply(input) {
  const lower = input.toLowerCase()
  for (const item of FAQ) {
    if (item.keywords.some(k => lower.includes(k))) {
      return item.answer
    }
  }
  return DEFAULT
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Sri's assistant. Ask me about his skills, projects, or how to contact him! 😊" }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input.trim() }
    const reply = { role: 'assistant', content: getReply(input.trim()) }
    setMessages(prev => [...prev, userMsg, reply])
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">SK</div>
              <div>
                <p className="chatbot-name">Sri's Assistant</p>
                <p className="chatbot-status">● Online</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.role}`}>
                <p>{msg.content}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
            />
            <button onClick={sendMessage} disabled={!input.trim()}>➤</button>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setIsOpen(o => !o)}>
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  )
}

export default Chatbot
