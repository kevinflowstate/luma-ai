import { useState, useEffect, useRef } from 'react'
import './App.css'

const CheckIcon = ({ className = '', style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
  </svg>
)

const ChevronDown = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

// ─── LOGO ───
function LumaIcon({ size = 36, color = 'gradient' }) {
  const id = `lumaGrad_${Math.random().toString(36).slice(2, 8)}`
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="10" y1="4" x2="30" y2="36">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="8" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.9" />
      <circle cx="20" cy="20" r="14" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.2" fill="none" opacity="0.4" />
      <line x1="20" y1="2" x2="20" y2="8" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="32" x2="20" y2="38" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="2" y1="20" x2="8" y2="20" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="32" y1="20" x2="38" y2="20" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="7.3" y1="7.3" x2="11.5" y2="11.5" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <line x1="28.5" y1="28.5" x2="32.7" y2="32.7" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <line x1="32.7" y1="7.3" x2="28.5" y2="11.5" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <line x1="11.5" y1="28.5" x2="7.3" y2="32.7" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
    </svg>
  )
}

function LumaAvatarIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lumaAvatarGrad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#lumaAvatarGrad)" />
      <circle cx="20" cy="20" r="7" fill="white" opacity="0.9" />
      <circle cx="20" cy="20" r="11" stroke="white" strokeWidth="1.2" fill="none" opacity="0.4" />
      <line x1="20" y1="6" x2="20" y2="10" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="30" x2="20" y2="34" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="6" y1="20" x2="10" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="30" y1="20" x2="34" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function Logo() {
  return (
    <div className="logo">
      <LumaIcon size={36} />
      <span className="logo__text">LUMA</span>
    </div>
  )
}

// ─── NOTIFICATION CARDS ───
function NotificationCards() {
  const cards = [
    {
      icon: "💅",
      iconClass: "notif-card__icon--rose",
      label: "New Booking",
      labelClass: "notif-card__label--rose",
      title: "Gel Manicure - Full Set",
      time: "2 minutes ago",
    },
    {
      icon: "💆",
      iconClass: "notif-card__icon--lavender",
      label: "New Booking",
      labelClass: "notif-card__label--lavender",
      title: "Deep Tissue Massage - 90 min",
      time: "8 minutes ago",
    },
    {
      icon: "⭐",
      iconClass: "notif-card__icon--green",
      label: "New Review",
      labelClass: "notif-card__label--green",
      title: "5-star Google Review received",
      time: "Just now",
    },
  ]

  return (
    <div className="notif-stack">
      {cards.map((card, i) => (
        <div key={i} className="notif-card">
          <div className="notif-card__header">
            <div className={`notif-card__icon ${card.iconClass}`}>{card.icon}</div>
            <span className={`notif-card__label ${card.labelClass}`}>{card.label}</span>
          </div>
          <div className="notif-card__title">{card.title}</div>
          <div className="notif-card__time">{card.time}</div>
        </div>
      ))}
    </div>
  )
}

// ─── NAV ───
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Logo />
        <div className="nav__links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
        </div>
        <a href="#pricing" className="btn btn--primary btn--sm">Get Started</a>
      </div>
    </nav>
  )
}

// ─── HERO ───
function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__glow-bg" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <div className="hero__badge-dot" />
          <span className="hero__badge-text">AI Receptionist for Beauty & Wellness</span>
        </div>

        <div className="hero__title-group">
          <div className="hero__title-glow" />
          <div className="hero__title-flourish">
            <div className="hero__title-line" />
            <div className="hero__title-diamond" />
            <div className="hero__title-line" />
          </div>
          <h1 className="hero__title-word">LUMA</h1>
          <div className="hero__title-flourish">
            <div className="hero__title-line" />
            <div className="hero__title-diamond" />
            <div className="hero__title-line" />
          </div>
        </div>
        <div className="hero__tagline">
          <span className="gradient-text">Always on. Always radiant.</span>
        </div>

        <p className="subtitle subtitle--center hero__subtitle">
          The AI receptionist built for salons, spas, and wellness businesses.
          Handles client enquiries, books appointments, and follows up - so your diary is always full.
        </p>

        <div className="hero__actions">
          <a href="#pricing" className="btn btn--primary">See Plans</a>
          <a href="#how-it-works" className="btn btn--outline">How It Works</a>
        </div>

        <div className="hero__proof">
          {["No manual follow-ups", "Set up in 48 hours", "Cancel anytime"].map((t, i) => (
            <div key={i} className="hero__proof-item">
              <CheckIcon className="hero__proof-check" />
              <span>{t}</span>
            </div>
          ))}
        </div>

        <NotificationCards />
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  )
}

// ─── PROBLEM ───
function Problem() {
  const stats = [
    { icon: "📱", stat: "55%", label: "of calls to salons go unanswered" },
    { icon: "⏰", stat: "12hrs+", label: "average reply time to client DMs" },
    { icon: "🚪", stat: "30%", label: "of no-shows never get chased" },
    { icon: "⭐", stat: "8%", label: "of happy clients leave reviews" },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2>Your front desk has <span className="gradient-text">blind spots.</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            Every missed DM is a client who booked somewhere else.
          </p>
        </div>
        <div className="grid-4">
          {stats.map((s, i) => (
            <div key={i} className="card stat-card">
              <div className="stat-card__icon">{s.icon}</div>
              <div className="stat-card__number">{s.stat}</div>
              <div className="stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FEATURES ───
function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">Two Channels, One Brain</span>
          <h2>Voice AI + DM Management</h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            LUMA covers both channels your beauty and wellness clients use to reach you. Choose one, or combine them.
          </p>
        </div>

        <div className="grid-2">
          <div className="feature-card feature-card--voice">
            <div className="feature-card__glow" style={{ background: 'rgba(244,114,182,0.06)' }} />
            <div style={{ position: 'relative' }}>
              <div className="feature-card__icon feature-card__icon--voice">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3>Voice AI</h3>
              <p>An AI receptionist that answers your salon phone 24/7. Handles enquiries, books treatments, and sounds natural - clients won't know the difference.</p>
              <ul className="feature-list">
                {[
                  "Answers calls instantly - no hold music, no voicemail",
                  "Understands beauty context - treatments, availability, pricing",
                  "Books directly into your calendar - integrates with Fresha and Timely",
                  "Transfers to you when needed - seamless handoff",
                  "After-hours coverage - never miss a booking again",
                ].map((item, i) => (
                  <li key={i} className="feature-list__item">
                    <CheckIcon className="feature-list__check feature-list__check--rose" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="feature-card feature-card--dm">
            <div className="feature-card__glow" style={{ background: 'rgba(192,132,252,0.06)' }} />
            <div style={{ position: 'relative' }}>
              <div className="feature-card__icon feature-card__icon--dm">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3>DM Management</h3>
              <p>Handles Instagram and Facebook DMs from beauty and wellness clients around the clock. Answers questions, recommends treatments, and books them in.</p>
              <ul className="feature-list">
                {[
                  "Instant replies to every DM - day and night",
                  "Recommends treatments based on what the client wants",
                  "Handles pricing, availability, and FAQ enquiries",
                  "Books appointments without leaving the chat - syncs with Fresha and Timely",
                  "Escalates complex requests to you with full context",
                ].map((item, i) => (
                  <li key={i} className="feature-list__item">
                    <CheckIcon className="feature-list__check feature-list__check--lavender" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CONVERSATION DEMO ───
function ConversationDemo() {
  const messages = [
    { from: "client", text: "Hi! Do you have any availability for a gel manicure this week?" },
    { from: "luma", text: "Hi! Yes, we do. Would you prefer a classic gel manicure or gel with nail art? We also have a gel mani-pedi combo if you'd like both." },
    { from: "client", text: "Just a classic gel manicure please. What times do you have on Friday?" },
    { from: "luma", text: "On Friday we have 10:00am, 1:30pm, and 4:15pm available. A classic gel manicure takes about 45 minutes. Which time suits you best?" },
    { from: "client", text: "1:30 please!" },
    { from: "luma", text: "You're all booked for Friday at 1:30pm for a classic gel manicure. We'll send you a reminder the day before. See you then!" },
  ]

  return (
    <section className="section demo">
      <div className="demo__bg" />
      <div className="container--narrow" style={{ position: 'relative' }}>
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">See It In Action</span>
          <h2>Warm. Helpful. <span className="gradient-text">Effortless.</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            From enquiry to booked appointment in under 2 minutes.
          </p>
        </div>

        <div className="phone">
          <div className="phone__header">
            <div className="phone__avatar"><LumaAvatarIcon size={32} /></div>
            <div>
              <div className="phone__name">Glow Beauty Studio</div>
              <div className="phone__status">
                <div className="phone__status-dot" />
                LUMA is online
              </div>
            </div>
          </div>
          <div className="phone__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg msg--${msg.from === 'client' ? 'client' : 'luma'}`}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── HOW IT WORKS ───
function HowItWorks() {
  const steps = [
    { num: "01", title: "Client reaches out", desc: "Via phone, Instagram, or Facebook. LUMA responds in seconds.", color: "linear-gradient(135deg, #f472b6, #f9a8d4)" },
    { num: "02", title: "LUMA qualifies", desc: "Asks the right questions - treatment type, preferences, availability - tailored to your business.", color: "linear-gradient(135deg, #f9a8d4, #c084fc)" },
    { num: "03", title: "Appointment booked", desc: "Checks real-time availability. Books into your calendar. You get notified.", color: "linear-gradient(135deg, #c084fc, #d8b4fe)" },
    { num: "04", title: "Reminders sent", desc: "24-hour and 1-hour reminders. Follows up if they go quiet.", color: "linear-gradient(135deg, #d8b4fe, #f472b6)" },
    { num: "05", title: "Post-appointment follow-up", desc: "Checks how it went. Happy clients get a review link. Concerns get flagged to you.", color: "linear-gradient(135deg, #f472b6, #4ade80)" },
  ]

  return (
    <section id="how-it-works" className="section">
      <div className="container--narrow">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">The Client Journey</span>
          <h2>From first message to <span className="gradient-text">five-star review.</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            LUMA manages the full client lifecycle. You just focus on the treatments.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step">
              <div className="step__indicator">
                <div className="step__num" style={{ background: step.color }}>{step.num}</div>
                {i < steps.length - 1 && <div className="step__line" />}
              </div>
              <div className="step__content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── BUILT FOR SECTION ───
function BuiltForBeauty() {
  return (
    <section className="section">
      <div className="container">
        <div className="clinics-grid">
          <div className="clinics-left">
            <span className="eyebrow">Purpose-Built</span>
            <h2 style={{ marginBottom: '20px' }}>
              Built for beauty and wellness. <span className="gradient-text">Not generic chatbots.</span>
            </h2>
            <p className="subtitle">
              LUMA understands treatments, booking preferences, and client expectations.
              Your clients get warm, helpful responses - not scripted templates.
            </p>
            <ul className="check-list">
              {[
                "Trained on salon and spa booking workflows",
                "Understands treatment types, durations, and pricing",
                "Speaks warmly - friendly, not robotic",
                "Integrates with Fresha, Timely, Google Calendar",
                "GDPR compliant - client data stays secure",
              ].map((item, i) => (
                <li key={i} className="check-list__item">
                  <div className="check-list__icon"><CheckIcon /></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="speciality-grid">
            {[
              { name: "Hair Salons", icon: "💇" },
              { name: "Beauty / Nails", icon: "💅" },
              { name: "Spas & Massage", icon: "💆" },
              { name: "Wellness Clinics", icon: "🧘" },
              { name: "Aesthetic Clinics", icon: "✨" },
              { name: "Barbershops", icon: "💈" },
            ].map((s, i) => (
              <div key={i} className="card speciality-card">
                <div className="speciality-card__icon">{s.icon}</div>
                <div className="speciality-card__name">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SPEAK TO LUMA (Interactive Chat) ───
function SpeakToLuma() {
  const [messages, setMessages] = useState([
    { from: 'luma', text: "Hey! Welcome to Glow Beauty Studio. I'm LUMA, your booking assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => { scrollToBottom() }, [messages, typing])

  const suggestions = [
    "I want to book a facial",
    "How much is a blow dry?",
    "Do you do lash extensions?",
    "What availability do you have?",
  ]

  const getResponse = (userMsg) => {
    const msg = userMsg.toLowerCase()

    if (msg.includes('facial') || msg.includes('skin') || msg.includes('face treatment')) {
      return "We have a few facial options! Our Express Facial is \u00a345 (30 min), the Signature Facial is \u00a375 (60 min), and the Luxury Hydra Facial is \u00a3110 (90 min). Which one takes your fancy?"
    }
    if (msg.includes('express') || msg.includes('45') || msg.includes('quick')) {
      return "Great choice! The Express Facial is perfect for a lunchtime refresh. We have availability Thursday at 12:30pm and Friday at 11am. Which works for you?"
    }
    if (msg.includes('signature') || msg.includes('75') || msg.includes('60 min')) {
      return "Lovely - the Signature Facial is our most popular! We have Thursday at 2pm and Saturday at 10:30am. Would either of those work?"
    }
    if (msg.includes('luxury') || msg.includes('hydra') || msg.includes('110') || msg.includes('90 min')) {
      return "Amazing choice - the Luxury Hydra Facial is incredible. We have Saturday at 11am and next Tuesday at 3pm available. Shall I book one of those?"
    }
    if (msg.includes('blow dry') || msg.includes('blowdry') || msg.includes('hair')) {
      return "A blow dry starts from \u00a330, and a cut & blow dry is from \u00a355. We also do updos for events (\u00a345+). Would you like to book one in?"
    }
    if (msg.includes('lash') || msg.includes('eyelash') || msg.includes('extensions')) {
      return "Yes! We offer classic lash extensions (\u00a365), hybrid (\u00a380), and Russian volume (\u00a395). All include a patch test 48 hours before if it's your first time. Shall I book you in for a set?"
    }
    if (msg.includes('nail') || msg.includes('manicure') || msg.includes('pedicure') || msg.includes('gel')) {
      return "We do! Gel manicure is \u00a332, gel pedicure is \u00a338, and the mani-pedi combo is \u00a360. We also do nail art from \u00a310 extra. Would you like to book?"
    }
    if (msg.includes('massage') || msg.includes('deep tissue') || msg.includes('relax')) {
      return "We offer Swedish Relaxation (\u00a355/60min), Deep Tissue (\u00a365/60min), and Hot Stone (\u00a375/75min). All come with a complimentary herbal tea. Which sounds good?"
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('menu')) {
      return "Our most popular treatments: Gel Manicure \u00a332, Blow Dry from \u00a330, Facials from \u00a345, Lash Extensions from \u00a365, and Massage from \u00a355. What are you interested in?"
    }
    if (msg.includes('book') || msg.includes('appointment') || msg.includes('available') || msg.includes('availability') || msg.includes('slot') || msg.includes('when')) {
      return "We have availability throughout this week! What treatment are you after and I'll check the best times for you?"
    }
    if (msg.includes('thursday') || msg.includes('friday') || msg.includes('saturday') || msg.includes('works') || msg.includes('yes') || msg.includes('perfect') || msg.includes('please')) {
      return "You're all booked in! You'll get a confirmation message with all the details. We recommend arriving 5 minutes early so you can relax before your treatment. See you soon!"
    }
    if (msg.includes('where') || msg.includes('location') || msg.includes('address') || msg.includes('parking')) {
      return "We're at 28 Bishop Street, Derry, BT48 6PW. There's pay & display parking on the street and a car park around the corner. Would you like to book a treatment?"
    }
    if (msg.includes('thank') || msg.includes('no') || msg.includes('that\'s all') || msg.includes('cheers')) {
      return "You're welcome! If you need anything else, just message us anytime. Have a lovely day!"
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hey! Are you looking to book a treatment, or do you have a question about what we offer? We do hair, nails, facials, lashes, massage, and more!"
    }
    return "I'd love to help with that! We offer a full range of beauty and wellness treatments - hair, nails, facials, lashes, and massage. What are you looking for?"
  }

  const handleSend = (text) => {
    const msgText = text || input.trim()
    if (!msgText) return

    setMessages(prev => [...prev, { from: 'user', text: msgText }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'luma', text: getResponse(msgText) }])
    }, 1200 + Math.random() * 800)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const showSuggestions = messages.length <= 1 && !typing

  return (
    <section className="section live-chat">
      <div className="live-chat__bg" />
      <div className="container--narrow" style={{ position: 'relative' }}>
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">Try It Yourself</span>
          <h2>Speak to <span className="gradient-text">LUMA</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            Type a message as if you were a client looking to book a beauty or wellness treatment.
          </p>
        </div>

        <div className="live-chat__window">
          <div className="live-chat__header">
            <div className="live-chat__header-left">
              <div className="live-chat__avatar"><LumaAvatarIcon size={36} /></div>
              <div>
                <div className="live-chat__header-name">Glow Beauty Studio</div>
                <div className="live-chat__header-status">
                  <div className="live-chat__header-status-dot" />
                  LUMA is online
                </div>
              </div>
            </div>
            <div className="live-chat__header-badge">LIVE DEMO</div>
          </div>

          <div className="live-chat__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`live-msg live-msg--${msg.from === 'user' ? 'user' : 'luma'}`}>
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="live-chat__typing">
                <div className="live-chat__typing-dot" />
                <div className="live-chat__typing-dot" />
                <div className="live-chat__typing-dot" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showSuggestions && (
            <div className="live-chat__suggestions">
              {suggestions.map((s, i) => (
                <button key={i} className="live-chat__suggestion" onClick={() => handleSend(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="live-chat__input-area">
            <input
              className="live-chat__input"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={typing}
            />
            <button className="live-chat__send" onClick={() => handleSend()} disabled={typing || !input.trim()}>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PRICING ───
function Pricing() {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: "DM Management",
      desc: "Instagram + Facebook DMs with full lifecycle automation.",
      price: annual ? "252" : "297",
      features: [
        "Instagram + Facebook DM responses",
        "Client qualification",
        "Appointment booking",
        "Confirmation + reminders",
        "Post-appointment follow-up",
        "Google Review generation",
        "No-show recovery",
        "Lapsed client re-engagement",
      ],
      featured: false,
    },
    {
      name: "Voice + DM",
      desc: "The complete package. Phone + DMs, one AI brain.",
      price: annual ? "422" : "497",
      features: [
        "Everything in DM Management",
        "AI phone receptionist (24/7)",
        "Call handling + booking",
        "Voicemail transcription",
        "Seamless handoff to your team",
        "After-hours coverage",
        "Priority support",
        "Custom voice personality",
      ],
      featured: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Voice AI Only",
      desc: "AI receptionist for your phone line. Never miss a call.",
      price: annual ? "295" : "347",
      features: [
        "AI phone receptionist (24/7)",
        "Client qualification via phone",
        "Appointment booking",
        "Call transfer to your team",
        "After-hours coverage",
        "Voicemail transcription",
        "Confirmation reminders",
        "Post-appointment follow-up",
      ],
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '16px' }}>
          <span className="eyebrow">Pricing</span>
          <h2>Choose what fits your salon or spa.</h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            All plans include setup, onboarding, and ongoing support. No hidden fees.
          </p>
        </div>

        <div className="pricing-toggle">
          <span className={`pricing-toggle__label ${!annual ? 'pricing-toggle__label--active' : ''}`}>Monthly</span>
          <div
            className={`pricing-toggle__switch ${annual ? 'pricing-toggle__switch--on' : ''}`}
            onClick={() => setAnnual(!annual)}
          >
            <div className="pricing-toggle__knob" />
          </div>
          <span className={`pricing-toggle__label ${annual ? 'pricing-toggle__label--active' : ''}`}>Annual</span>
          {annual && <span className="pricing-toggle__save">Save 15%</span>}
        </div>

        <div className="grid-3">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.featured ? 'pricing-card--featured' : 'pricing-card--default'}`}>
              {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}
              <div className="pricing-card__name">{plan.name}</div>
              <div className="pricing-card__desc">{plan.desc}</div>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">&#163;{plan.price}</span>
                <span className="pricing-card__period"> /month</span>
                <div className="pricing-card__setup">+ one-time &#163;500 setup fee</div>
              </div>
              <ul className="pricing-card__features">
                {plan.features.map((f, j) => (
                  <li key={j} className="pricing-card__feature">
                    <CheckIcon style={{ color: plan.featured ? 'var(--rose)' : 'rgba(244,114,182,0.5)' }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`pricing-card__btn ${plan.featured ? 'pricing-card__btn--primary' : 'pricing-card__btn--outline'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <p className="pricing-note text-center">
          Setup includes connecting your channels, configuring LUMA for your treatments, and going live within 48 hours.
        </p>
      </div>
    </section>
  )
}

// ─── FAQ ───
function FAQ() {
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: "Will clients know they're talking to AI?", a: "LUMA is warm, conversational, and natural. Most clients won't realise - and those who do appreciate the instant responses. If anyone asks to speak to a person, LUMA hands off immediately." },
    { q: "How does it book into my calendar?", a: "LUMA connects to your Fresha, Timely, or Google Calendar. It reads real-time availability and creates bookings in free slots. You see appointments appear on your phone like any other booking." },
    { q: "What if a client asks something LUMA can't handle?", a: "LUMA escalates to you with the full conversation context. You pick up seamlessly - nothing is lost." },
    { q: "How long does setup take?", a: "48 hours from go-ahead to live. We handle everything. You just need a 30-minute onboarding call." },
    { q: "Can I customise what LUMA says?", a: "Absolutely. LUMA is configured with your treatments, pricing, opening hours, and tone of voice. It represents your brand, not a template." },
    { q: "Is client data secure?", a: "Yes. LUMA handles booking conversations only - no payment or sensitive data. All data encrypted and GDPR compliant. DPA available on request." },
  ]

  return (
    <section className="section">
      <div className="container--tight">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2>Common Questions</h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className="faq-item__question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <ChevronDown className={`faq-item__arrow ${open === i ? 'faq-item__arrow--open' : ''}`} />
              </button>
              {open === i && <div className="faq-item__answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ───
function FinalCTA() {
  return (
    <section className="section cta">
      <div className="cta__bg" />
      <div className="cta__glow" />
      <div className="container--narrow text-center" style={{ position: 'relative' }}>
        <h2 style={{ marginBottom: '24px' }}>
          Ready to stop missing <span className="gradient-text">client enquiries?</span>
        </h2>
        <p className="subtitle subtitle--center" style={{ marginBottom: '40px', fontSize: '18px' }}>
          LUMA is live in 48 hours. No contracts, no complexity. Just more beauty and wellness clients booked, and fewer empty chairs.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#pricing" className="btn btn--primary">View Plans</a>
          <a href="mailto:kevin.flowstate@gmail.com" className="btn btn--outline">Book a Demo</a>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Logo />
        <div className="footer__links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="mailto:kevin.flowstate@gmail.com">Contact</a>
        </div>
        <div className="footer__credit">Powered by <span>Flowstate</span></div>
      </div>
    </footer>
  )
}

// ─── APP ───
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <ConversationDemo />
      <HowItWorks />
      <BuiltForBeauty />
      <SpeakToLuma />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
