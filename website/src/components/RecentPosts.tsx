import { FC } from 'react';
import useSubstackPosts from '../util/data/useSubstackPosts';
import FadeIn from './common/FadeIn';
import urlConstants from '../constants/urlConstants';
import Button from './common/button/Button';
import LoadingSignal from './common/LoadingSignal';

const FeaturedPostCard: FC<{
  title: string;
  date: string;
  description: string;
  link: string;
}> = ({
  title, date, description, link,
}) => (
  <FadeIn>
    <article>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block py-5 sm:py-6 -mx-3 px-3 rounded-lg transition-colors duration-200 ease-out group hover:bg-BG_SECONDARY"
        aria-label={`${title} — ${date}`}
      >
        <h4 className="font-HEADING font-semibold text-lg sm:text-xl md:text-2xl text-TEXT tracking-tight leading-snug transition-colors duration-200 group-hover:text-PRIMARY">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-TEXT_DE_EMP leading-relaxed mt-2">
          {description}
        </p>
        <div className="flex items-center gap-4 mt-3">
          <time className="text-xs sm:text-sm text-TEXT_DE_EMP">{date}</time>
          <span className="text-xs font-medium text-PRIMARY inline-flex items-center gap-1">
            Read
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </div>
      </a>
    </article>
  </FadeIn>
);

const PostCard: FC<{
  title: string;
  date: string;
  description: string;
  link: string;
  index: number;
}> = ({
  title, date, description, link, index,
}) => (
  <FadeIn delay={index * 60}>
    <article>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block py-3.5 sm:py-4 -mx-3 px-3 rounded-lg transition-colors duration-200 ease-out group hover:bg-BG_SECONDARY"
        aria-label={`${title} — ${date}`}
      >
        <div className="flex items-baseline gap-3 mb-0.5">
          <h4 className="font-HEADING font-semibold text-sm sm:text-base text-TEXT tracking-tight leading-snug transition-colors duration-200 group-hover:text-PRIMARY line-clamp-1 flex-1 min-w-0">
            {title}
          </h4>
          <time className="text-xs text-TEXT_DE_EMP whitespace-nowrap shrink-0">{date}</time>
        </div>
        <p className="text-xs sm:text-sm text-TEXT_DE_EMP leading-relaxed line-clamp-2">
          {description}
        </p>
      </a>
    </article>
  </FadeIn>
);

const RecentPosts: FC = () => {
  const posts = useSubstackPosts();

  if (!posts) return <LoadingSignal />;
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="px-5 sm:px-10 md:px-14 py-6 sm:py-10 md:py-14" aria-label="Latest writing">
      <FadeIn>
        <div className="flex items-baseline justify-between mb-4 sm:mb-6">
          <h3 className="font-HEADING font-semibold text-xl sm:text-2xl md:text-3xl text-TEXT tracking-tight">
            Latest writing
          </h3>
          <Button href={urlConstants.BLOG_SITE} hasLinkIcon className="text-xs sm:text-sm">
            View all
          </Button>
        </div>
      </FadeIn>

      <FeaturedPostCard
        title={featured.title}
        date={featured.date}
        description={featured.description}
        link={featured.link}
      />

      {rest.length > 0 && (
        <div className="divide-y divide-BORDER border-t border-BORDER">
          {rest.map((post, index) => (
            <PostCard
              key={post.link}
              title={post.title}
              date={post.date}
              description={post.description}
              link={post.link}
              index={index + 1}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentPosts;
