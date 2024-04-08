import React from 'react';

interface ProjectProps {
  title: string;
  deployedUrl: string;
  githubUrl: string;
  imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, deployedUrl, githubUrl, imageUrl }) => {
  return (
    <div className='project'>
      <h3>{title}</h3>
      <div className='project-links'>
        <div className='project-link'>
          <a href={deployedUrl} target='_blank' rel='noopener noreferrer'>
            Deployed Application
          </a>
        </div>
        <div className='project-link'>
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            GitHub Repository
          </a>
        </div>
      </div>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Project;
