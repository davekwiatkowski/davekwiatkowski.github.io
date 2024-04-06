import { FC, useMemo } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import useAboutData from '../util/data/useAboutData';
import Image from './common/Image';
import getUrlFor from '../util/getUrlFor';
import LoadingSignal from './common/LoadingSignal';
import sanityClient from '../constants/sanityClient';
import BlockContentLink from './blockContent/BlockContentLink';
import BlockContentImage from './blockContent/BlockContentImage';

const About: FC = () => {
  const aboutData = useAboutData();
  const sanityConfig = useMemo(() => sanityClient.config(), []);

  return (
    <div className="flex flex-row flex-wrap items-top justify-center p-4 gap-4">
      {!aboutData && <LoadingSignal />}
      {aboutData && (
      <>
        {aboutData.mainImage && (
          <Image
            src={getUrlFor(aboutData.mainImage).url()}
            alt={aboutData.mainImage?.caption ?? ''}
            className="object-cover w-full md:w-[calc(50%-8px)]"
          />
        )}
        <div className="w-full md:w-[calc(50%-8px)]">
          <div className="font-bold text-xl md:text-5xl xl:text-6xl text-PRIMARY">{aboutData.title}</div>
          <div className="md:text-3xl xl:text-4xl text-justify font-extralight text-PRIMARY">
            <BlockContent
              className="unreset"
              blocks={aboutData.text}
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
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default About;
