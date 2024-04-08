import React from 'react';

interface ProjectProps {
  title: string;
  deployedUrl: string;
  githubUrl: string;
  imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, deployedUrl, githubUrl, imageUrl }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <div>
        <a href={deployedUrl} target='_blank' rel='noopener noreferrer'>
          Deployed Application
        </a>
        <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
