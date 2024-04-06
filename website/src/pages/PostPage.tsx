import { FC, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../constants/sanityClient';
import LoadingSignal from '../components/common/LoadingSignal';
import BlockContentImage from '../components/blockContent/BlockContentImage';
import BlockContentLink from '../components/blockContent/BlockContentLink';
import getUrlFor from '../util/getUrlFor';
import usePostData from '../util/data/usePostData';
import Image from '../components/common/Image';
import RouteName from '../constants/Route';
import Button from '../components/common/Button';

const PostPage: FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const postData = usePostData(slug);
  const sanityConfig = useMemo(() => sanityClient.config(), []);
  const backgroundColor = useMemo(() => postData?.mainImage.asset.metadata.palette.dominant.background, [postData]);
  const color = useMemo(() => postData?.mainImage.asset.metadata.palette.dominant.foreground, [postData]);

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
      <div className="w-full flex flex-col items-center pb-16">
        <div
          className="w-full flex flex-col items-center"
          style={{ backgroundColor }}
        >
          <div className="w-full max-w-5xl pt-16 pb-16 pl-8 pr-8">
            <h2
              className="pb-8 text-4xl italic font-thin sm:text-8xl"
              style={{ color }}
            >
              {postData.title}
            </h2>
            <div style={{ color }}>
              {'Written by '}
              <Button hasLinkIcon isSamePage onClick={handleClose} color={color}>
                Dave Kwiatkowski
              </Button>
            </div>
          </div>
          <div className="w-full flex items-center flex-col relative">
            <figure className="w-full max-w-5xl z-10 pl-8 pr-8">
              <Image
                className="w-full"
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
              <div>Written by:</div>
              <div className="text-TEXT_DE_EMP whitespace-nowrap">Dave Kwiatkowski</div>
            </div>
          </div>
          <div className="unreset max-w-2xl mt-[-16px]">
            <BlockContent
              blocks={postData.body}
              projectId={sanityConfig.projectId}
              dataset={sanityConfig.dataset}
              serializers={{
                marks: {
                  link: BlockContentLink,
                },
                types: {
                  image: BlockContentImage,
                },
              }}
            />
            <Button hasLinkIcon onClick={handleClose}> Read more by Dave Kwiatkowski</Button>
          </div>
        </div>
      </div>
      )}
      {!postData && <LoadingSignal />}
    </>
  );
};

export default PostPage;
