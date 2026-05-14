'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Mastercard Cybersecurity Virtual Experience',
    issuer: 'Forage',
    description: 'Cybersecurity Virtual Experience Program',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Mastercard/vcKAB5yYAgvemepGQ_Mastercard_QmQfj7678xgft6TRX_1684872202730_completion_certificate.pdf',
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Coursera',
    description: 'DevOps, Cloud, and Agile Foundations Specialization',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ENYAQSEYBT8C',
  },
  {
    title: 'Google Cloud — Spring Boot Microservices',
    issuer: 'Coursera',
    description: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
    link: 'https://www.coursera.org/account/accomplishments/verify/Y4T5LX8KK4BP',
  },
  {
    title: 'Vanderbilt University — Android App Components',
    issuer: 'Coursera',
    description: 'Services, Local IPC, and Content Providers',
    link: 'https://www.coursera.org/account/accomplishments/certificate/YCZLPZTT3PDG',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 text-sm">$ grep -r &quot;certifications&quot; ./resume.json</p>
          <p className="text-xs text-muted-foreground mt-0.5">{certifications.length} results found</p>
          <div className="border-t border-border mt-2" />
        </motion.div>

        <div className="space-y-1">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="border border-border hover:border-green-400/30 transition-all duration-200"
            >
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-cyan-400 font-semibold">{cert.title}</span>
                    <span className="text-muted-foreground/50 border border-border px-1.5 py-0.5">
                      {cert.issuer}
                    </span>
                  </div>
                  <p className="text-muted-foreground pl-2 border-l border-border">
                    {cert.description}
                  </p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 shrink-0"
                >
                  <ExternalLink className="w-3 h-3" />
                  [view]
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
