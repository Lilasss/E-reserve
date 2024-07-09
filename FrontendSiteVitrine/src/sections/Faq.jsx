import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "Comment puis-je réserver un service ?",
    answer: "Vous pouvez réserver un service en ligne via notre plateforme.",
  },
  {
    question: "Puis-je modifier ma réservation ?",
    answer:
      "Oui, vous pouvez modifier votre réservation à tout moment avant la date de l'événement.",
  },
  {
    question: "Comment mes données sont-elles sécurisées ?",
    answer:
      "Nous utilisons des protocoles de sécurité avancés pour protéger vos données personnelles.",
  },
];

const Faq = () => {

    const [expanded, setExpanded] = useState(null);

  return (
    <section id="faq" className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">FAQ</h2>
        <div className="max-w-lg mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <span className="font-bold">{faq.question}</span>
              </button>
              {expanded === index && (
                <div className="p-4 border border-t-0 border-gray-300">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/contact-form"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded shadow-lg hover:bg-blue-700 transition duration-300"
          >
            faire les démarches
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
