'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award, TrendingUp, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Light Pollution Explorer',
    description: 'Interactive web tool to visualize light pollution severity across 28 Indian states with real VIIRS satellite data',
    image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'March 2025',
    achievements: [
      'Built interactive visualization using React.js and Node.js',
      'Automated shapefile generation and per-state light intensity extraction via Python',
      'Enabled 10-year trend plots with 40% reduction in preprocessing time',
      'Secured 3rd place at Orion Hackathon among 200+ teams'
    ],
    technologies: ['React.js', 'Node.js', 'Python', 'GeoPandas', 'Rasterio', 'Web Development', 'Data Visualization'],
    demoUrl: 'https://light-pollution-explorer.lovable.app/',
    githubUrl: 'https://github.com/AkshatJha0411/light-pollution-explorer',
    award: '3rd Place - Orion Hackathon 2025'
  },
  {
    title: 'AI-Powered Pulsar Detection',
    description: 'Enhanced pulsar detection system achieving 97.35% accuracy using advanced machine learning techniques',
    image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=800',
    date: 'January 2025',
    achievements: [
      'Enhanced pulsar detection to 97.35% accuracy using Random Forest by optimizing features and addressing class imbalance',
      'Designed a CNN-based pulsar classification pipeline in PyTorch with 4 convolutional layers',
      'Achieved 3x faster training with batch normalization'
    ],
    technologies: ['Python', 'Seaborn', 'Scikit-Learn', 'PyTorch', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/AkshatJha0411/SpaceCode-Hackathon/',
    award: '3rd Place - SpaceCode Hackathon'
  },
  {
    title: 'Dealora (IIT Mandi\'s Marketplace)',
    description: 'Mobile/web platform for second-hand item exchange at IIT Mandi with real-time updates and authentication',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 2025',
    achievements: [
      'Built a mobile/web platform for second-hand item exchange at IIT Mandi using React (TypeScript)',
      'Developed backend with Node.js and Supabase (PostgreSQL) for real-time updates and auth',
      'Won 3rd place in KrackHack 2.0 (GDG)'
    ],
    technologies: ['PostgreSQL', 'React', 'Node.js', 'Express', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/AkshatJha0411/Dealora-Marketplace',
    award: '3rd Place - KrackHack 2.0 (GDG)'
  },
  {
    title: 'Telecommunications Using ROS',
    description: 'Robot teleoperation system using ROS for communication and remote command control',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'January - May 2024',
    achievements: [
      'Designed and implemented a robot teleoperation system using ROS for communication',
      'Integrated Arduino (C++) for hardware control and Python (Tkinter) for user interface',
      'Developed a mini UI to send commands via a ROS-based server with NodeMCU execution'
    ],
    technologies: ['ROS', 'Python', 'Tkinter', 'Arduino', 'C++', 'NodeMCU'],
    githubUrl: 'https://github.com/AkshatJha0411/teleop-with-ros'
  },
  {
    title: 'SproutVestor',
    description: 'Web application to assist novice investors and students in making informed stock selections',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 2024',
    achievements: [
      'Built a web application using Next.js, React and Appwrite (Backend as a Service) to assist novice investors',
      'Incorporated an initial questionnaire to gather user\'s investment timeframes and preferences',
      'Developed a personalized stock recommendation feature based on user responses with secure access'
    ],
    technologies: ['Next.js', 'React', 'Appwrite', 'TypeScript', 'Authentication'],
    githubUrl: 'https://github.com/AkshatJha0411/sproutvestor'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
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
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
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
                  <CardTitle className="text-xl flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Achievements</h4>
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
                    <h4 className="font-semibold text-sm">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
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