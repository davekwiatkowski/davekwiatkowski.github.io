interface IRun {
  date: string;
  course: string;
  link: string;
  location: string;
  distance: { amount: number; unit: string };
  duration: { days: number; hours: number; minutes: number; seconds: number };
  place?: string;
  type: 'Backyard' | 'Race' | 'FKT';
  fktType?: 'Unsupported';
  yards?: number;
}

export default IRun;
