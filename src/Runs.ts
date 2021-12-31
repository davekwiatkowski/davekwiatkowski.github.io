export interface IRun {
  date: Date;
  course: string;
  link: string;
  location: string;
  distance: string;
  time: string;
  place?: string;
  type: 'Backyard' | 'Race' | 'FKT';
  fktType?: 'Unsupported';
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
  },
];

export default Runs;
