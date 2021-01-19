import './App.css';
import React, { FC } from 'react';
import Link from './components/Link';
import Links from './constants/Links';
import Strings from './constants/Strings';

const App: FC = () => (
  <div className='App'>
    <div className='Content'>
      <p>
        {'Hi! '}
        <span role='img' aria-label='Evergreen tree'>
          🌲
        </span>
      </p>
      <p>
        I am a software engineer at
        <Link
          text={Strings.employer}
          url={Links.employer}
          isPrecededBySpace
          isSucceededBySpace
        />
        and live in
        <Link text={Strings.homeTown} url={Links.homeTown} isPrecededBySpace />.
      </p>
      <p>
        Check out my
        <Link text={Strings.resume} url={Links.resume} isPrecededBySpace />,
        code-art on
        <Link text={Strings.codePen} url={Links.codePen} isPrecededBySpace />,
        projects on
        <Link text={Strings.github} url={Links.github} isPrecededBySpace />,
        articles on
        <Link text={Strings.medium} url={Links.medium} isPrecededBySpace />,
        music on
        <Link
          text={Strings.soundCloud}
          url={Links.soundCloud}
          isPrecededBySpace
        />
        , and runs on
        <Link text={Strings.strava} url={Links.strava} isPrecededBySpace />.
      </p>
      <p>
        Consider
        <Link
          text='emailing me'
          url={Links.email}
          isPrecededBySpace
          isSucceededBySpace
        />
        or messaging me on
        <Link text={Strings.linkedIn} url={Links.linkedIn} isPrecededBySpace />.
      </p>
      <p>Dave</p>
    </div>
  </div>
);

export default App;
