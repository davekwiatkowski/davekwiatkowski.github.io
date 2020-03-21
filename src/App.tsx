import React, { FC } from 'react';
import './App.css';
import Link from './components/Link';
import gif from './images/gif.gif';
const App: FC = () => (
  <div className='App'>
    <div className='Content'>
      <img
        width='100%'
        max-width='100%'
        height='auto'
        alt='gif'
        src={gif}
      />
      <p>Hi!</p>
      <p>
        I am a software engineer at
        <Link
          text='Microsoft'
          url='https://microsoft.com'
          isPrecededBySpace
          isSucceededBySpace
        />
        and live in
        <Link
          text='Seattle'
          url='https://www.google.com/maps/place/Seattle,+WA/@47.6129432,-122.4821475,11z/data=!3m1!4b1!4m5!3m4!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708'
          isPrecededBySpace
        />
        .
      </p>
      <p>
        Please
        <Link
          text='email me'
          url='mailto:hi@davekwiatkowski.com'
          isPrecededBySpace
          isSucceededBySpace
        />
        or message me on
        <Link
          text='LinkedIn'
          url='https://linkedin.com/in/davekwiatkowski'
          isPrecededBySpace
        />
        .
        Also, here is my
        <Link
          text='resume'
          url='https://davekwiatkowski.com/resume/cv.pdf'
          isPrecededBySpace
        />
        .
      </p>
      <p>- Dave</p>
    </div>
  </div>
);

export default App;