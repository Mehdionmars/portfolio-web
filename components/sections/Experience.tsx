'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar, TrendingUp } from 'lucide-react';

const experiences = [
{
  company: 'Solupharm',
  role: 'Fullstack Developer Intern',
  location: 'Montreal, QC',
  period: 'Oct. 2024 – Dec. 2024',
  achievements: [
    "Collaborated cross-functionally to define and prioritize features and requirements.",
    "Developed an interactive web platform using Next.js to centralize task management and employee scheduling.",
    "Enhanced collaboration and communication with an intuitive and efficient user interface.",
    "Integrated advanced scheduling features for accurate real-time activity tracking.",
    "Designed a modular and scalable architecture, reducing maintenance time and enabling new feature additions."
  ],
  technologies: ['Next.js', 'Vercel', 'Postgres', 'Node.js', 'Tailwind', 'EC2', 'RDS', 'S3', 'Shadcn', 'React', 'TypeScript', 'Radix'],
  color: 'red'
},
{
  company: 'LogInfo',
  role: 'Backend & Frontend Intern',
  location: 'Casablanca, Morocco',
  period: 'Mar. 2024 – Sept. 2024',
  achievements: [
    "Deployed applications with Next.js and React on AWS (EC2, RDS, S3).",
    "Collaborated with product and QA teams to automate testing and deployments.",
    "Integrated Docker and Azure DevOps for environment management.",
    "Performed code reviews, unit testing, and system testing, resolving software defects.",
    "Created code templates to share with other developers."
  ],
  technologies: ['Next.js', 'Vercel', 'Postgres', 'Node.js', 'Tailwind', 'EC2', 'RDS', 'S3', 'Shadcn', 'React.js'],
  color: 'purple'
},
{
  company: 'Hpsearch',
  role: 'WordPress Developer Intern',
  location: 'Casablanca, Morocco',
  period: 'June 2023 – Aug. 2023',
  achievements: [
    "Developed a WordPress plugin enabling integration of third-party APIs for secure data storage and retrieval.",
    "Implemented advanced techniques, such as custom post types, to enhance user experience.",
    "Built multiple websites using WordPress, ensuring responsive and optimized design across all devices."
  ],
  technologies: ['WordPress', 'Elementor', 'PHP'],
  color: 'orange'
},
{
  company: 'SDAIM',
  role: 'Android Developer Intern',
  location: 'Casablanca, Morocco',
  period: 'June 2021 – Sept. 2021',
  achievements: [
    "Developed and maintained a mobile application.",
    "Conducted code reviews, unit tests, and system testing.",
    "Developed backend tools with Payload CMS and MongoDB.",
    "Contributed to continuous improvement of software development processes and best practices."
  ],
  technologies: ['Payload CMS', 'React Native', 'Node.js', 'Tailwind', 'MongoDB', 'S3', 'Figma', 'Expo'],
  color: 'yellow'
},
{
  company: 'SITA (Mohammed V Airport, Nouaceur)',
  role: 'Network Technician Intern',
  location: 'Casablanca, Morocco',
  period: 'May 2020 – June 2020',
  achievements: [
    "Assisted in managing network infrastructures.",
    "Gained introduction to network supervision and monitoring."
  ],
  technologies: ['Cisco Networking', 'Network Monitoring'],
  color: 'green'
},
];

export default function Experience() {
  return (
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
  );
}
