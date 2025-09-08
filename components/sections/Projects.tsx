'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award, TrendingUp, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'VCard QR Generator',
    description: 'Interactive web tool to visualize light pollution severity across 28 Indian states with real VIIRS satellite data',
    image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'March 2025',
    achievements: [
      'Built interactive visualization using React.js and Node.js',
      'Automated shapefile generation and per-state light intensity extraction via Python',
      'Enabled 10-year trend plots with 40% reduction in preprocessing time'
    ],
    technologies: ['React.js', 'Node.js', 'Python', 'Web Development', 'Data Visualization'],
    demoUrl: 'https://gentle-lamington-556b02.netlify.app/',
    githubUrl: 'https://github.com/',
    award: ''
  },
  {
    title: 'PC Boost Gaming',
    description: 'Mobile/web platform for a store that sell gaming PCs and accessories',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 2025',
    achievements: [
      'Built a website for gaming pc store',
      'Developed backend with Payload CMS (headless cms) for real-time updates and auth',
      'added features like pc builder'
    ],
    technologies: ['Payload CMS', 'React', 'Node.js', 'Express', 'TypeScript', 'Vite js'],
    demoUrl: 'https://beta.boostgaming.ma/',
    githubUrl: 'https://github.com/xenedium/boostgaming-frontend',
    award: ''
  },
  {
    title: 'Weather Forecast Detection',
    description: 'Enhanced weather forecast system achieving 97.35% accuracy using advanced machine learning techniques',
    image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=800',
    date: 'January 2025',
    achievements: [
      'Enhanced weather forecast to 97.35% accuracy using Random Forest by optimizing features and addressing class imbalance',
      'Designed a CNN-based weather classification pipeline in PyTorch with 4 convolutional layers',
      'Achieved 3x faster training with batch normalization'
    ],
    technologies: ['Python', 'Seaborn', 'Next.js', 'PyTorch', 'Jupyter Notebook'],
    demoUrl: 'https://weatherca.vercel.app/',
    githubUrl: 'https://github.com/Mehdionmars/weatherca/',
    award: '3rd Place - SpaceCode Hackathon'
  },
  {
    title: 'Cyberpunk dashboard design',
    description: 'Flutter-Firebase app that tracks real-time energy use, air quality, and carbon footprint, targeting college students and campuses',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Aug 2024 - Dec 2024',
    achievements: [
      'Developed a Flutter-Firebase app that tracks real-time energy use, air quality, and carbon footprint, targeting college students and campuses',
      'Integrated Gemini chatbot for interactive sustainability guidance, alongside custom UI, Google Fonts, and smart device control features'
    ],
    technologies: ['typescript', 'vscode', 'nextjs', 'supabase', 'react'],
    demoUrl: 'https://v0-cyberpunk-dashboard-design-gold-eta-63.vercel.app/',
    githubUrl: 'https://github.com/AkshatJha0411/SustainX/',
  },
  {
    title: 'BEACHFRONT LUXURY ACCOMMODATION',
    description: 'website for luxury beachfront accommodation in Maldives',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'January - May 2024',
    achievements: [
      'Designed and implemented website using figma for UI/UX and React.js for frontend',
      'Integrated gallery and contact form for user engagement',
      'Developed website for hotel booking and accommodation services',
    ],
    technologies: ['vite js', 'react', 'Typescript', 'vscode'],
    demoUrl: 'https://lovable.dev/projects/96f629c9-6031-4f68-8bd0-680a3c64b6e3',
    githubUrl: 'https://github.com/AkshatJha0411/teleop-with-ros'
  },
  {
    title: 'AtlanticSoud',
    description: 'Web application for a construction company in Morocco',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 2024',
    achievements: [
      'Built a web application using Next.js, React and supabase (Backend) ',
      'Implemented gallery, contact form, and dynamic content management',
    ],
    technologies: ['Next.js', 'React', 'supabase', 'TypeScript',],
    demoUrl: 'https://www.atlanticsoud.ma/',
    githubUrl: 'https://github.com/Mehdionmars/Constead'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across AI/ML, web development, and robotics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-200 border bg-card">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
                  {project.award && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                        <Award className="w-3 h-3 mr-1" />
                        {project.award}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-foreground">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-2">
                    {project.demoUrl && (
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-2" />
                          View Source
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}