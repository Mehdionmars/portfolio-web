'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';

const experiences = [
  {
    company: 'VectorX DB (prev. LaunchX Labs)',
    role: 'SDE Intern',
    location: 'Bengaluru, Karnataka',
    period: 'Dec. 2024 – Jan. 2025',
    achievements: [
      'Designed AI agents (LLM Agent & RAG Agent) with PGVectorStore and GPT-4o-mini, reducing response time by 50% and improving retrieval accuracy',
      'Built a metadata extraction pipeline with LangChain\'s LLM, automating document processing for 1M+ documents monthly',
      'Developed a dynamic filter system with FilterAgent and Claude 3.5 Sonnet, generating 100K+ JSON filters daily and boosting DB query efficiency by 40%'
    ],
    technologies: ['Python', 'LangChain', 'GPT-4o-mini', 'Claude 3.5 Sonnet', 'PGVectorStore', 'AI Agents', 'RAG'],
    color: 'blue'
  },
  {
    company: 'Urbanchat.ai',
    role: 'Backend Developer Intern',
    location: 'Remote (Malta, Europe)',
    period: 'June 2024 – Aug. 2024',
    achievements: [
      'Architected AppSumo webhook and OAuth integration, developing REST APIs to automate 95% of onboarding and reduce user setup time',
      'Migrated the voicebot\'s speech synthesis from Amazon Polly to Deepgram, decreasing average response time from 7 seconds to 1.2 seconds, which amplified user engagement by 24%',
      'Engineered the backend for an interruption feature in a voice AI chatbot using Twilio\'s API, cutting response delays by 35%'
    ],
    technologies: ['Node.js', 'REST APIs', 'Amazon Polly', 'Deepgram', 'Twilio API', 'OAuth', 'Webhooks'],
    color: 'teal'
  }
];

export default function Experience() {
  return (
    <AuroraBackground className="min-h-auto">
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and driving measurable impact
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-background hidden md:block" />

                  <Card className={`md:ml-16 hover:shadow-lg transition-all duration-300 border-l-4 bg-background/50 backdrop-blur-sm ${
                    exp.color === 'blue' 
                      ? 'border-l-blue-500 hover:border-l-blue-600' 
                      : 'border-l-teal-500 hover:border-l-teal-600'
                  }`}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2 flex items-center gap-2 text-foreground">
                            <Building className="w-5 h-5" />
                            {exp.company}
                          </CardTitle>
                          <p className="text-lg font-semibold text-muted-foreground mb-2">
                            {exp.role}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2 text-foreground">
                          <TrendingUp className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="bg-muted/50 hover:bg-muted/80 transition-colors backdrop-blur-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}