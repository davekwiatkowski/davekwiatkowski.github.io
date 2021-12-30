export interface IRun {
  date: Date;
  name: string;
  award: string;
  link: string;
}

const Runs: IRun[] = [
  {
    date: new Date('12/12/21'),
    name: 'Rivanna Trail Double Loop',
    award: 'FKT (Unsupported)',
    link: 'https://fastestknowntime.com/fkt/dave-kwiatkowski-rivanna-trail-va-2021-12-12',
  },
  {
    date: new Date('12/05/21'),
    name: 'Bear Creek 10 Mile Trail Run',
    award: '1st',
    link: 'https://runsignup.com/Race/Results/50062#resultSetId-293018;perpage:100',
  },
  {
    date: new Date('10/16/21'),
    name: "Andy's Backyard Ultra",
    award: '27 hrs, 112.5 mi',
    link: 'https://runsignup.com/Race/Results/105772#resultSetId-284854;perpage:100',
  },
  {
    date: new Date('09/12/21'),
    name: 'Lake Washington Loop',
    award: 'FKT (Unsupported)',
    link: 'https://fastestknowntime.com/fkt/dave-kwiatkowski-lake-washington-loop-wa-2021-09-12',
  },
  {
    date: new Date('08/15/21'),
    name: 'Tunnel Vision Marathon',
    award: '3rd',
    link: 'https://www.itsyourrace.com/results.aspx?id=8084',
  },
];

export default Runs;
