import React from 'react'
import './Testimonials.css'

// Company Names
const DodoLogo = () => (
  <span className="company-name">DODO</span>
)

const CheckDCLogo = () => (
  <span className="company-name">Check DC</span>
)

const NugiLogo = () => (
  <span className="company-name">Nugi Technologies</span>
)

const testimonials = [
  {
    id: 't1',
    theme: 'yellow',
    quote: "Somtochukwu is driven, hardworking, and approachable. She's known for excellent output, quick turnaround, and diligence. She has also grown into mentoring a group of emerging professionals.",
    name: 'Susan Onigbinde',
    role: 'Founder/CEO, DODO',
    Logo: DodoLogo,
  },
  {
    id: 't2',
    theme: 'pink',
    quote: 'I think for people who call themselves researchers, curiosity is your biggest advantage. And I think Somto showed that all through.',
    name: 'Lanre Wright',
    role: 'Head of Product, Check DC',
    Logo: CheckDCLogo,
  },
  {
    id: 't3',
    theme: 'rose',
    quote: 'Somtochukwu is hardworking, intelligent, and deeply passionate about her work. She communicates well, collaborates effectively, and consistently delivers results.',
    name: 'Emmanuel Olube',
    role: 'Head of Products',
    Logo: NugiLogo,
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
