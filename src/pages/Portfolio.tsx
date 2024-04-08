import React from 'react';
import Project from '../components/Project';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Ecommerce Admin Portal',
      deployedUrl: 'https://the-green-hill-ecommerce-admin-b26231d8324c.herokuapp.com/',
      githubUrl: 'https://github.com/ryandarton/the-green-hill-ecommerce-admin-portal',
      imageUrl: 'https://raw.githubusercontent.com/ryandarton/the-green-hill-ecommerce-admin-portal/dev/public/assets/Homepage.png',
    },
    {
      title: 'Weather Dashboard',
      deployedUrl: 'https://ryandarton.github.io/weather-dashboard/',
      githubUrl: 'https://github.com/ryandarton/weather-dashboard',
      imageUrl: 'https://raw.githubusercontent.com/ryandarton/weather-dashboard/main/assets/weather-dashboard-screenshot.png',
    },
    {
      title: 'Horiseon Social Solution Services',
      deployedUrl: 'https://ryandarton.github.io/horiseon-social-solutions-services/',
      githubUrl: 'https://github.com/ryandarton/horiseon-social-solutions-services',
      imageUrl: 'https://github.com/ryandarton/horiseon-social-solutions-services/blob/main/assets/images/screencapture.png?raw=true',
    },
    {
      title: 'JavaScript Fundamentals Quiz',
      deployedUrl: 'https://ryandarton.github.io/JavaScript-fundamentals-quiz/',
      githubUrl: 'https://github.com/ryandarton/JavaScript-fundamentals-quiz',
      imageUrl: 'https://github.com/ryandarton/JavaScript-fundamentals-quiz/raw/main/assets/images/Screenshot.png',
    },
    {
      title: 'Password Generator',
      deployedUrl: 'https://ryandarton.github.io/password-generator/',
      githubUrl: 'https://github.com/ryandarton/password-generator',
      imageUrl: 'https://github.com/ryandarton/password-generator/raw/main/password-generator-screenshot.png',
    },
    {
      title: 'Workday Scheduler',
      deployedUrl: 'https://ryandarton.github.io/workday-scheduler/',
      githubUrl: 'https://github.com/ryandarton/workday-scheduler',
      imageUrl: 'https://github.com/ryandarton/workday-scheduler/raw/main/Assets/work-day-scheduler-screenshot.png',
    },
    {
      title: 'Note Taker Web App',
      deployedUrl: 'https://rd-note-taker-web-app-4661d447f166.herokuapp.com/',
      githubUrl: 'https://github.com/ryandarton/note-taker-web-app',
      imageUrl: 'https://github.com/ryandarton/note-taker-web-app/raw/main/public/assets/images/Screenshot1.png',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className='project-card'>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            deployedUrl={project.deployedUrl}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
