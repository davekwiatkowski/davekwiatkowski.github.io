import IRunListItemData from './IRunListItemData';
import useSanityFetch from '../useSanityFetch';

const useRunListData = (): IRunListItemData[] | undefined => useSanityFetch(
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
  }`,
);

export default useRunListData;
