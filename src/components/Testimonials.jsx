import React from 'react'
import './Testimonials.css'

// Company Names
const StacksLogo = () => (
  <span className="company-name">NaijaTech</span>
)

const HurleyLogo = () => (
  <span className="company-name">SwiftPay</span>
)

const ApexLogo = () => (
  <span className="company-name">TerraNova</span>
)

const testimonials = [
  {
    id: 't1',
    theme: 'yellow',
    quote: 'Elevated our product strategy. Their creative discovery research and targeted usability insights significantly boosted user interactions and drove notable traffic to our platform.',
    name: 'Chinedu Okonkwo',
    role: 'CEO at NaijaTech',
    Logo: StacksLogo,
  },
  {
    id: 't2',
    theme: 'pink',
    quote: 'We saw remarkable ROI improvement after partnering with Melvina. Her expert research team delivered insights and campaigns that increased our conversion rates by 35%.',
    name: 'Emeka Adewale',
    role: 'CEO at SwiftPay',
    Logo: HurleyLogo,
  },
  {
    id: 't3',
    theme: 'rose',
    quote: 'One of the few researchers who can speak fluently to both engineers and executives. The user insights always landed cleanly because the narrative was airtight and evidence-backed.',
    name: 'Amara Eze',
    role: 'VP of Design at TerraNova',
    Logo: ApexLogo,
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" aria-label="Testimonials">
      <div className="testimonials-header" data-reveal>
        <h2 className="testimonials-heading">What Collaborators Say</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, idx) => {
          const LogoComp = item.Logo
          return (
            <div
              className={`testimonial-card card-theme-${item.theme}`}
              key={item.id}
              data-reveal
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <span className="testimonial-quote-mark" aria-hidden="true">"</span>
              {/* Quote Content */}
              <div className="card-quote-wrapper">
                <p className="testimonial-quote">{item.quote}</p>
              </div>

              {/* Author Footer */}
              <div className="testimonial-footer">
                <div className="author-details">
                  <h3 className="author-name">{item.name}</h3>
                  <p className="author-role">{item.role}</p>
                </div>

                <div className="company-wrapper">
                  <LogoComp />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
