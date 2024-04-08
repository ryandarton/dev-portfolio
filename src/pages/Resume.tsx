import React from 'react';

const Resume: React.FC = () => {
  return (
    <section>
      <h2>Resume</h2>
      <div>
        <a target='_blank' href='https://docs.google.com/document/d/1dTNysfXWDLwzq9yl6NsJHnX_3HBSEoL_8tgnkiqX2u8/edit?usp=sharing' download>
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
        </ul>
      </div>
    </section>
  );
};

export default Resume;
