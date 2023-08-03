import useSanityFetch from '../useSanityFetch';

export interface IRunListItemData {
  date: string;
  course: string;
  link: string;
  location: string;
  distance: {
    amount: number;
    unit: string;
  };
  duration: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  type: 'Backyard' | 'Race' | 'FKT' | 'Adventure';
  race?: {
    place: number;
  };
  fkt?: {
    type: 'Unsupported' | 'Self-supported' | 'Supported';
  };
  backyard?: {
    yards: number;
    place: 'Win' | 'Assist' | 'Dnf';
  };
}

const useRunListData = (): IRunListItemData[] | undefined =>
  useSanityFetch(
    `*[_type == "run"]{
    date,
    course,
    link,
    location,
      duration{
      days,
      hours,
      minutes,
      seconds
    },
    distance{
      amount,
      unit,
    },
    type,
    race{
      place,
    },
    fkt{
      type,
    },
    backyard{
      yards,
      place,
    },
  }`
  );

export default useRunListData;
