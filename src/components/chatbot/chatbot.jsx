import nlp from 'compromise'
import { useEffect, useRef, useState } from 'react'
import './chatbot.css'

const KNOWLEDGE = [
  {
    topics: ['skill', 'know', 'tech', 'expertise', 'specialise', 'proficient', 'language', 'python', 'java', 'machine learning', 'ml', 'ai', 'deep learning', 'nlp', 'data', 'analytics'],
    responses: [
      "Srikaran specialises in Machine Learning, Deep Learning, NLP, and Data Analytics. He's proficient in Python, Java, and R — and also does Web Development!",
      "His core skills include: Data Analytics, Machine Learning, AI, NLP, Deep Learning, Data Visualization, Python/Java/R, and Web Development.",
    ]
  },
  {
    topics: ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'app', 'application'],
    responses: [
      "Srikaran has completed 10+ projects! One highlight is a Skill Gap Severity Prediction app built with Streamlit and ML. Check the 'My Work' section for more!",
      "His portfolio includes 10+ data science and AI projects. The My Work section showcases his latest ones — click any image to explore!",
    ]
  },
  {
    topics: ['experience', 'year', 'background', 'history', 'worked', 'career'],
    responses: [
      "Srikaran has 2+ years of hands-on experience in data science and AI, with 10+ certifications and a diverse background in both analytics and development.",
      "With 2+ years of experience and 10+ certifications, Srikaran brings both academic and practical expertise to every project.",
    ]
  },
  {
    topics: ['service', 'offer', 'provide', 'help', 'hire', 'freelance', 'available', 'work together'],
    responses: [
      "Srikaran offers: Data Analysis, Analytical Thinking, Gap Analysis, Data Visualization, Machine Learning, and Web Development services.",
      "He provides data science services including ML model development, data visualization, gap analysis, and web development. Feel free to reach out!",
    ]
  },
  {
    topics: ['contact', 'email', 'phone', 'reach', 'message', 'whatsapp', 'call'],
    responses: [
      "Reach Srikaran at mailto:mastersk0210@gmail.com or WhatsApp: https://wa.me/353894002480. He's based in Dublin, Ireland!",
      "Email: mailto:mastersk0210@gmail.com | WhatsApp: https://wa.me/353894002480",
    ]
  },
  {
    topics: ['linkedin', 'linked in'],
    responses: [
      "Here's Srikaran's LinkedIn profile: https://www.linkedin.com/in/srikaran-sankar/",
      "Connect with Srikaran on LinkedIn: https://www.linkedin.com/in/srikaran-sankar/",
    ]
  },
  {
    topics: ['github', 'git hub', 'repository', 'repo'],
    responses: [
      "Here's Srikaran's GitHub: https://github.com/mastersk0210-del",
      "Check out his projects on GitHub: https://github.com/mastersk0210-del",
    ]
  },
  {
    topics: ['social', 'profile', 'instagram', 'connect'],
    responses: [
      "Connect with Srikaran on LinkedIn: https://www.linkedin.com/in/srikaran-sankar/ or GitHub: https://github.com/mastersk0210-del",
    ]
  },
  {
    topics: ['location', 'based', 'live', 'where', 'ireland', 'india', 'dublin', 'chennai'],
    responses: [
      "Srikaran is based in Dublin, Ireland, originally from Chennai, Tamil Nadu, India.",
      "He's currently located in Dublin, Ireland — originally from Chennai, India.",
    ]
  },
  {
    topics: ['certif', 'qualif', 'degree', 'education', 'study', 'course'],
    responses: [
      "Srikaran holds 10+ certifications in data science, machine learning, AI, and related fields. 🔗 View them here: https://www.linkedin.com/in/srikaran-sankar/details/certifications/",
      "He has 10+ professional certifications covering machine learning, AI, data science, and analytics. 🔗 See all certifications: https://www.linkedin.com/in/srikaran-sankar/details/certifications/",
    ]
  },
  {
    topics: ['resume', 'cv', 'download'],
    responses: [
      "You can download Srikaran's resume here: https://srithings.info/Srikaran_Sankar_Resume.pdf",
      "Here's a direct link to his resume: https://srithings.info/Srikaran_Sankar_Resume.pdf",
    ]
  },
  {
    topics: ['hello', 'hi', 'hey', 'greet', 'good morning', 'good afternoon', 'howdy'],
    responses: [
      "Hi there! 👋 I'm Sri's assistant. Ask me about his skills, projects, experience, or how to contact him!",
      "Hello! I'm here to tell you all about Srikaran. What would you like to know? 😊",
    ]
  },
  {
    topics: ['who', 'about', 'introduce', 'tell me', 'srikaran', 'sri'],
    responses: [
      "Srikaran Sankar is a Machine Learning Engineer & Data Scientist based in Dublin, Ireland, passionate about AI and data analytics.",
      "Sri is a skilled ML Engineer with expertise in data science, AI, deep learning, and web development — based in Dublin, Ireland.",
    ]
  },
  {
    topics: ['thank', 'thanks', 'appreciate', 'great', 'awesome', 'helpful'],
    responses: [
      "You're welcome! 😊 Feel free to ask anything else about Srikaran.",
      "Happy to help! Let me know if you have more questions.",
    ]
  },
]

const FALLBACKS = [
  "I'm not sure about that. Try asking about Srikaran's skills, projects, experience, or contact details!",
  "Hmm, I didn't quite get that. You can ask me about his skills, projects, services, or how to reach him!",
  "I'm still learning! Try asking about Srikaran's background, projects, or contact info.",
]

function getReply(input) {
  const doc = nlp(input.toLowerCase())
  const terms = doc.terms().out('array').join(' ')

  let bestMatch = null
  let bestScore = 0

  for (const item of KNOWLEDGE) {
    let score = 0
    for (const topic of item.topics) {
      if (terms.includes(topic) || input.toLowerCase().includes(topic)) {
        score += topic.split(' ').length
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = item
    }
  }

  if (bestMatch && bestScore > 0) {
    const responses = bestMatch.responses
    return responses[Math.floor(Math.random() * responses.length)]
  }

  return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)]
}

function renderWithLinks(text) {
  const urlRegex = /((?:https?|mailto):\/\/[^\s]+|mailto:[^\s]+)/g
  const parts = text.split(urlRegex)
  return parts.map((part, i) => {
    if (/^mailto:/.test(part)) {
      return <a key={i} href={part} style={{color:'#b97dff', textDecoration:'underline'}}>{part.replace('mailto:','')}</a>
    }
    if (/^https?:\/\//.test(part)) {
      return <a key={i} href={part} target="_blank" rel="noreferrer" style={{color:'#b97dff', textDecoration:'underline'}}>{part}</a>
    }
    return part
  })
}

const SUGGESTIONS = ['Skills', 'Projects', 'Contact', 'Experience', 'Services']

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! 👋 I'm Sri's AI assistant. Ask me anything about his skills, projects, or experience!" }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = (text) => {
    const msg = text || input
    if (!msg.trim()) return
    const userMsg = { role: 'user', content: msg.trim() }
    const reply = { role: 'assistant', content: getReply(msg.trim()) }
    setMessages(prev => [...prev, userMsg, reply])
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); sendMessage() }
  }

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">SK</div>
              <div>
                <p className="chatbot-name">Sri's AI Assistant</p>
                <p className="chatbot-status">● Always Online</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.role}`}>
                <p>{renderWithLinks(msg.content)}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {messages.length <= 2 && (
            <div className="chatbot-suggestions">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => sendMessage(s)}>{s}</button>
              ))}
            </div>
          )}
          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
            />
            <button onClick={() => sendMessage()} disabled={!input.trim()}>➤</button>
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
