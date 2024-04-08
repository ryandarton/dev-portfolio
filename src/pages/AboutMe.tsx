import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section>
      <img
        className='profile-pic'
        src='https://avatars.githubusercontent.com/u/65424556?v=4'
        alt='Ryan Darton - Full Stack Web Developer'
      />
      <h2>About Me</h2>
      <div>
        <p>Hi, I'm Ryan Darton, a web developer with a passion for creating beautiful and functional applications.</p>
        <p>I love working with Anglular, React, HTML, CSS, JavaScript, TypeScript, Node.js, Express.js, MongoDB.</p>
        <p>
          When I'm not obsessing over code, you can find me riding my road bike, rock climbing, camping, or playing/recording music with my
          mates. Curious about the music?{' '}
          <a target='_blank' href='http://ryandarton.com/'>
            Click Here 🎵
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
