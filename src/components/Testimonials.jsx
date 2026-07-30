import React from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 't1',
    quote: '"Somtochukwu has a rare ability to turn messy, ambiguous problems into research that the whole team can rally around. Every read-out came with a clear point of view on what to do next."',
    name: 'Jane Cooper',
    role: 'Head of Product, Placeholder Co.',
  },
  {
    id: 't2',
    quote: '"Working together was refreshing — thoughtful, rigorous, and genuinely collaborative from kickoff to delivery. The findings changed how we prioritised our roadmap."',
    name: 'Wade Warren',
    role: 'Design Lead, Placeholder Co.',
  },
  {
    id: 't3',
    quote: '"One of the few researchers I have worked with who can speak fluently to both engineers and executives. The insights always landed because the story was airtight."',
    name: 'Esther Howard',
    role: 'VP of Design, Placeholder Co.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" aria-label="Testimonials">
      <h2 className="testimonials-heading">Testimonials</h2>

      <div className="testimonials-list">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <p className="testimonial-quote">{t.quote}</p>

            <div className="testimonial-author">
              <div className="testimonial-avatar" aria-hidden="true">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#e5e7eb" />
                  <path d="M18 10 C15.2 10 13 12.2 13 15 C13 17.8 15.2 20 18 20 C20.8 20 23 17.8 23 15 C23 12.2 20.8 10 18 10 Z M18 22 C13.5 22 9.5 24.5 9.5 27.5 C9.5 28.5 10.5 29 11.5 29 H24.5 C25.5 29 26.5 28.5 26.5 27.5 C26.5 24.5 22.5 22 18 22 Z" fill="#9ca3af" />
                </svg>
              </div>
              <div className="testimonial-meta">
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
