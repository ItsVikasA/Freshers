'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Do I need to register to attend the event?',
      answer:
        'No registration is required! All CSE freshers are welcome to attend. Just bring your college ID card.',
    },
    {
      question: 'Is there any entry fee?',
      answer:
        'No, the event is completely free for all CSE freshers. Just bring your college ID and join us!',
    },
    {
      question: 'What should I bring to the event?',
      answer:
        'Please bring your college ID card for verification. That\'s all you need!',
    },
    {
      question: 'Can I bring a friend from another branch?',
      answer:
        'This event is exclusively for CSE freshers. However, we organize similar events for other branches throughout the year.',
    },
    {
      question: 'Will food be provided at the event?',
      answer:
        'Yes, complimentary food and refreshments will be provided to all registered participants.',
    },
    {
      question: 'What is the dress code for the event?',
      answer:
        'The dress code is Smart Casual or Ethnic. Dress comfortably but elegantly!',
    },
    {
      question: 'Can I participate in the games and competitions?',
      answer:
        'Absolutely! All registered participants are welcome to participate in games and competitions. Prizes await the winners!',
    },
    {
      question: 'Can I bring my belongings?',
      answer:
        'Yes, but please keep your valuables safe. We recommend bringing only essentials as there may be limited secure storage.',
    },
    {
      question: 'Will there be photography at the event?',
      answer:
        'Yes, we will have professional photographers capturing all the memorable moments. Photos will be shared on our social media pages.',
    },
    {
      question: 'Who can I contact for more information?',
      answer:
        'You can reach out to the organizing committee through the contact details provided in the Contact section below.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <span className="text-primary flex-shrink-0">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-4">
            Still have questions? Feel free to reach out to us!
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
