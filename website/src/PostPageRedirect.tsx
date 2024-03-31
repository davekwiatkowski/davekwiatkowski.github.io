import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSignal from './components/common/LoadingSignal';
import RouteName from './constants/Route';

const PostPageRedirect: FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${RouteName.Blog}/${slug}`, { replace: true });
  }, [navigate, slug]);

  return <LoadingSignal />;
};

export default PostPageRedirect;
