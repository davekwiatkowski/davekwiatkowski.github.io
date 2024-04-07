import {
  FC, useCallback, useMemo, useRef, useState,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BrowserView,
} from 'react-device-detect';
import LoadingSignal from '../components/common/LoadingSignal';
import getUrlFor from '../util/getUrlFor';
import usePostData from '../util/data/usePostData';
import Image from '../components/common/Image';
import RouteName from '../constants/Route';
import Button from '../components/common/Button';
import CustomBlockContent from '../components/blockContent/CustomBlockContent';
import ScrollProgress from '../components/common/ScrollProgress';
import MainFooter from '../components/common/MainFooter';

const PostPage: FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const postData = usePostData(slug);
  const dominantBackground = useMemo(() => postData?.mainImage.asset.metadata.palette.dominant.background, [postData]);
  const dominantForeground = useMemo(() => postData?.mainImage.asset.metadata.palette.dominant.foreground, [postData]);
  const ref = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleImageLoad = useCallback(() => {
    if (ref.current) {
      setScrollOffset(ref.current.clientHeight);
    }
  }, []);

  const handleClose = useCallback(
    (event: any) => {
      event.preventDefault();
      navigate(`/${RouteName.Blog}`);
    },
    [navigate],
  );

  return (
    <>
      {postData && (
        <>
          <ScrollProgress offset={scrollOffset} completedColor={dominantBackground} togoColor={dominantForeground}>
            <BrowserView>
              <div className="border-b border-TEXT_DE_EMP bg-BG flex justify-center items-center w-full">
                <div className="flex flex-row gap-1 text-sm p-4 max-w-screen-2xl grow">
                  <div className="text-TEXT_DE_EMP">Reading:</div>
                  <div>{postData.title}</div>
                </div>
              </div>
            </BrowserView>
          </ScrollProgress>
          <div className="w-full flex flex-col items-center pb-8">
            <div
              ref={ref}
              className="w-full flex flex-col items-center"
              style={{ backgroundColor: dominantBackground }}
            >
              <div className="w-full max-w-5xl pt-16 pb-16 pl-8 pr-8">
                <h2
                  className="pb-8 text-4xl italic font-thin sm:text-8xl"
                  style={{ color: dominantForeground }}
                >
                  {postData.title}
                </h2>
                <div style={{ color: dominantForeground }}>
                  {'Written by '}
                  <Button isSamePage onClick={handleClose} color={dominantForeground}>
                    Dave Kwiatkowski
                  </Button>
                </div>
              </div>
              <div className="w-full flex items-center flex-col relative">
                <figure className="w-full max-w-5xl z-10 pl-8 pr-8">
                  <Image
                    onImageLoad={handleImageLoad}
                    className="w-full object-cover"
                    src={getUrlFor(postData.mainImage).url()}
                    alt={postData.mainImage.caption ?? ''}
                  />
                  {postData.mainImage.caption && (
                  <figcaption className="text-sm italic text-center text-TEXT_DE_EMP">
                    {postData.mainImage.caption}
                  </figcaption>
                  )}
                </figure>
                <div className="bg-BG w-full h-1/2 absolute block bottom-0 left-0" />
              </div>
            </div>
            <div className="w-full max-w-5xl md:pt-12 md:pb-12 flex flex-wrap gap-8 pt-8 pl-8 pr-8">
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <div>Published:</div>
                  <div className="text-TEXT_DE_EMP whitespace-nowrap">{new Date(postData.publishedAt).toDateString()}</div>
                </div>
                <div>
                  <div>Author:</div>
                  <div className="text-TEXT_DE_EMP whitespace-nowrap">Dave Kwiatkowski</div>
                </div>
              </div>
              <div className="unreset max-w-2xl mt-[-16px]">
                <CustomBlockContent blocks={postData.body} />
                <Button hasLinkIcon onClick={handleClose}> Read more by Dave Kwiatkowski</Button>
              </div>
            </div>
          </div>
          <MainFooter />
        </>
      )}
      {!postData && <LoadingSignal />}
    </>
  );
};

export default PostPage;
