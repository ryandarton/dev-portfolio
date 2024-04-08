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
      githubUrl: 'https://github.com/ryandarton/weather-dashboar',
      imageUrl: 'https://raw.githubusercontent.com/ryandarton/weather-dashboard/main/assets/weather-dashboard-screenshot.png',
    },
    // TODO: Add more projects
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
