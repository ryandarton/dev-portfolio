import React from 'react';

const Contact: React.FC = () => {
  const email = 'ryandarton@gmail.com';
  const githubUrl = 'https://github.com/ryandarton';

  return (
    <section>
      <h2>Contact</h2>
      <div>
        <p>If you have any questions or would like to get in touch, feel free to reach out to me:</p>
        <ul>
          <li>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            GitHub:{' '}
            <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
              View my GitHub profile
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
