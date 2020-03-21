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
        <Link
          text={Strings.homeTown}
          url={Links.homeTown}
          isPrecededBySpace
        />.
      </p>
      <p>
        Here is my
        <Link
          text={Strings.resume}
          url={Links.resume}
          isPrecededBySpace
        />.
        Here is my code on
        <Link
          text={Strings.codePen}
          url={Links.codePen}
          isPrecededBySpace
        />.
        Here are my projects on
          <Link
          text={Strings.github}
          url={Links.github}
          isPrecededBySpace
        />.
        Here are my articles on
        <Link
          text={Strings.medium}
          url={Links.medium}
          isPrecededBySpace
        />.
        Here is my music on
        <Link
          text={Strings.soundCloud}
          url={Links.soundCloud}
          isPrecededBySpace
        />.
      </p>
      <p>
        Please
        <Link
          text='email me'
          url={Links.email}
          isPrecededBySpace
          isSucceededBySpace
        />
        or message me on
        <Link
          text={Strings.linkedIn}
          url={Links.linkedIn}
          isPrecededBySpace
        />.
      </p>
      <p>- Dave</p>
    </div>
  </div>
);

const styles: IStyleSheet = {
  gif: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
  },
};

export default App;