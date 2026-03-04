import useSanityFetch from '../useSanityFetch';

interface IMainLinkItemData {
  title: string;
  url: string;
}

const useMainLinkListData = (): IMainLinkItemData[] | undefined => useSanityFetch(
  `*[_type == "mainLink"]{
    title,
    url
  }`,
);

export default useMainLinkListData;
