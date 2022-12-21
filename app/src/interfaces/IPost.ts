interface IPost {
  publishedAt: string;
  mainImage: string;
  title: string;
  slug: { current: string };
}

export default IPost;
