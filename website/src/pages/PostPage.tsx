import { FC, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../constants/sanityClient';
import LoadingSignal from '../components/common/LoadingSignal';
import PostPageImage from '../components/postPage/PostPageImage';
import PostPageLink from '../components/postPage/PostPageLink';
import getUrlFor from '../util/getUrlFor';
import usePostData from '../util/data/usePostData';

const PostPage: FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const postData = usePostData(slug);
  const sanityConfig = useMemo(() => sanityClient.config(), []);

  const handleClose = useCallback(
    (event: any) => {
      event.preventDefault();
      navigate('/');
    },
    [navigate],
  );

  return (
    <div className="flex flex-col p-4 md:pt-12 md:pb-12">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-2xl">
          {postData ? (
            <>
              <div>
                <h2 className="pb-4 text-4xl italic font-extralight sm:text-8xl">
                  {postData.title}
                </h2>
                <div className="text-stone-400">
                  {new Date(postData.publishedAt).toDateString()}
                  {' | By '}
                  <span
                    className="text-teal-500 cursor-pointer hover:text-teal-600"
                    onClick={handleClose}
                  >
                    <span className="underline">
                      Dave Kwiatkowski
                    </span>
                  </span>
                </div>
              </div>
              <hr className="mt-4 mb-4" />
              <figure>
                <img
                  src={getUrlFor(postData.mainImage).url()}
                  alt={postData.mainImage.caption ?? undefined}
                />
                {postData.mainImage.caption && (
                  <figcaption className="text-sm italic text-center text-stone-600">
                    {postData.mainImage.caption}
                  </figcaption>
                )}
              </figure>
              <div className="unreset">
                <BlockContent
                  blocks={postData.body}
                  projectId={sanityConfig.projectId}
                  dataset={sanityConfig.dataset}
                  serializers={{
                    marks: {
                      link: PostPageLink,
                    },
                    types: {
                      image: PostPageImage,
                    },
                  }}
                />
              </div>
              <hr className="mb-4" />
              <div
                className="text-teal-500 cursor-pointer hover:text-teal-600"
                onClick={handleClose}
              >
                <span>
                  ←
                  {' '}
                </span>
                <span className="underline">
                  Read more by Dave Kwiatkowski
                </span>
              </div>
            </>
          ) : (
            <LoadingSignal />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
