import React from 'react';

const Resume: React.FC = () => {
  return (
    <section>
      <h2>Resume</h2>
      <div>
        <a href='path/to/your/resume.pdf' download>
          Download Resume
        </a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          {/* Add more proficiencies */}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
