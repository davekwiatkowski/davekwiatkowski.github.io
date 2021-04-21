import './App.css';
import React, { FC } from 'react';
import Link from './components/Link';
import Links from './constants/Links';
import Strings from './constants/Strings';

const App: FC = () => (
  <div className='App'>
    <div className='Content'>
      <p>
        Dave Kwiatkowski is a software engineer at
        <Link
          text={Strings.employer}
          url={Links.employer}
          isPrecededBySpace
          isSucceededBySpace
        />
        and lives in
        <Link text={Strings.homeTown} url={Links.homeTown} isPrecededBySpace />.
      </p>
      <p>
        You can find him on
        <Link text={Strings.codePen} url={Links.codePen} isPrecededBySpace />,
        <Link text={Strings.github} url={Links.github} isPrecededBySpace />,
        <Link text={Strings.linkedIn} url={Links.linkedIn} isPrecededBySpace />,
        <Link text={Strings.medium} url={Links.medium} isPrecededBySpace />,
        <Link
          text={Strings.soundCloud}
          url={Links.soundCloud}
          isPrecededBySpace
        />
        , and
        <Link text={Strings.strava} url={Links.strava} isPrecededBySpace />.
      </p>
      <p>
        You can email him at <Link text={Strings.email} url={Links.email} /> or
        look at his
        <Link text={Strings.resume} url={Links.resume} isPrecededBySpace />.
      </p>
    </div>
  </div>
);

export default App;
