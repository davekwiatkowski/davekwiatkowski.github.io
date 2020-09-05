import './App.css';
import React, { FC } from 'react';
import Link from './components/Link';
import gif from './images/gif.gif';
import Links from './constants/Links';
import Strings from './constants/Strings';
import Image from './components/Image';
import IStyleSheet from './shared/IStyleSheet';

const App: FC = () => (
  <div className='App'>
    <div className='Content'>
      <Image
        description={'Gif of Joy from Pokémon typing'}
        source={gif}
        style={styles.gif}
      />
      <p>Hi!</p>
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
      <p>-Dave</p>
    </div>
  </div>
);

const styles: IStyleSheet = {
  gif: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    filter:
      'drop-shadow(-100px -100px 0px tan) brightness(1.5) hue-rotate(-50deg)',
  },
};

export default App;
