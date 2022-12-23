import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSignal from './components/common/LoadingSignal';

const PostPageRedirect: FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/blog/${slug}`, { replace: true });
  }, [navigate, slug]);

  return <LoadingSignal />;
};

export default PostPageRedirect;
