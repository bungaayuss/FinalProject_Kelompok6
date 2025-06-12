import React, { useState } from "react";
import "../../../styles/fact.css";

export default function Fact() {
  const faqs = [
    {
      question: "What services does Pora EO offer?",
      answer:
        "We provide complete services including weddings, concerts, seminars, birthdays, and corporate events. This includes decoration, sound system, catering, and documentation.",
    },
    {
      question: "Can I request a custom event theme?",
      answer:
        "Absolutely! Our creative team is ready to bring your ideas and dream event to life.",
    },
    {
      question: "How does the booking process work?",
      answer:
        "You can book through our website or consult directly via WhatsApp. Once confirmed, we’ll send you the invoice and production timeline.",
    },
    {
      question: "Can I cancel after booking?",
      answer:
        "Yes, but a cancellation fee will apply depending on the cancellation time based on our policy.",
    },
    {
      question: "Which areas does Pora EO cover?",
      answer:
        "We’re based in West Java but can organize events across Indonesia with transport and accommodation adjustments.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold text-primary-custom mb-4">
        Everything You Need To Know
        <br />
        About Pora EO
      </h2>

      <div className="accordion-modern">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item-modern">
            <button
              className={`accordion-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              <span className="icon">{activeIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`accordion-answer ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
