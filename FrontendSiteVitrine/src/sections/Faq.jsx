import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Comment puis-je réserver un service ?",
    answer: (
      <div className="text-center">
        <p>Vous pouvez réserver un service en ligne via notre plateforme.</p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            Contactez-nous
          </button>
          {/* Ajoutez le bouton "Introduire une demande" ici si nécessaire */}
        </div>
      </div>
    ),
  },
  {
    question: "Puis-je modifier ma réservation ?",
    answer: "Oui, vous pouvez modifier votre réservation à tout moment avant la date de l'événement.",
  },
  {
    question: "Comment mes données sont-elles sécurisées ?",
    answer: "Nous utilisons des protocoles de sécurité avancés pour protéger vos données personnelles.",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    if (expanded !== null) {
      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.style.maxHeight = expanded === index ? `${ref.scrollHeight}px` : "0px";
        }
      });
    } else {
      contentRefs.current.forEach((ref) => {
        if (ref) {
          ref.style.maxHeight = "0px";
        }
      });
    }
  }, [expanded]);

  return (
    <section id="faq" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-700 text-center mb-10">FAQ</h2>
        <div className="max-w-2xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 border border-gray-300 rounded-lg flex items-center justify-between bg-white shadow-md focus:outline-none focus:ring-0 transition-all"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <span className="font-bold text-gray-700">{faq.question}</span>
                <span className="text-gray-500">
                  {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${expanded === index ? "max-h-screen" : "max-h-0"}`}
                style={{
                  maxHeight: expanded === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                  backgroundColor: 'transparent', // Assure que le fond est transparent
                }}
              >
                <div className="p-4 text-center">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
