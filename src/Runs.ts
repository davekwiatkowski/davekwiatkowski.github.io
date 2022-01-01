export interface IRun {
  date: Date;
  course: string;
  link: string;
  location: string;
  distance: string;
  time: string;
  place?: string;
  type: 'Backyard' | 'Race' | 'FKT';
  surface: 'Trail' | 'Road';
  fktType?: 'Unsupported';
  summary: string;
}

const Runs: IRun[] = [
  {
    date: new Date('12/12/21'),
    course: 'Rivanna Trail Double Loop',
    link: 'https://fastestknowntime.com/fkt/dave-kwiatkowski-rivanna-trail-va-2021-12-12',
    location: 'Charlottesville, VA',
    distance: '41 mi',
    time: '5:40:03',
    type: 'FKT',
    fktType: 'Unsupported',
    surface: 'Trail',
    summary:
      'I always wanted to go after a record time around my home town. This attempt is not the fastest possible, so I would love to go after this again.',
  },
  {
    date: new Date('12/05/21'),
    course: 'Bear Creek 10 Mile Trail Run',
    link: 'https://runsignup.com/Race/Results/50062#resultSetId-293018;perpage:100',
    location: 'Cumberland, VA',
    distance: '10 mi',
    time: '1:15:04',
    place: '1st',
    type: 'Race',
    surface: 'Trail',
    summary:
      'Zipping through leaves, trees, and creeks. That is pretty much how this went. Nothing beats the first 3 miles where you can barely see the trail!',
  },
  {
    date: new Date('10/16/21'),
    course: "Andy's Backyard Ultra",
    link: 'https://runsignup.com/Race/Results/105772#resultSetId-284854;perpage:100',
    location: 'Earlysville, VA',
    distance: '112.5 mi',
    time: '27 hours',
    place: '3rd',
    type: 'Backyard',
    surface: 'Trail',
    summary:
      'My first backyard ultra was a blast, and it was super close to home. I learned a lot about ultra marathoning in this, and I cannot wait to go further.',
  },
  {
    date: new Date('09/12/21'),
    course: 'Lake Washington Loop',
    link: 'https://fastestknowntime.com/fkt/dave-kwiatkowski-lake-washington-loop-wa-2021-09-12',
    location: 'Seattle, WA',
    distance: '48 mi',
    time: '6:40:55',
    type: 'FKT',
    fktType: 'Unsupported',
    surface: 'Road',
    summary:
      'Ever since moving to Seattle, I wanted to tour the Seattle area by circumnavigating the iconic Lake Washington. I left this with a torn MCL.',
  },
  {
    date: new Date('08/15/21'),
    course: 'Tunnel Vision Marathon',
    link: 'https://www.itsyourrace.com/results.aspx?id=8084',
    location: 'North Bend, WA',
    distance: 'Marathon',
    time: '2:42:42',
    place: '3rd',
    type: 'Race',
    surface: 'Trail',
    summary:
      'After running a sub-3 marathon time trial, I signed up for my first marathon: a downhill trail race with some spectacular views of the PNW. A blast.',
  },
];

export default Runs;
