import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { initialize, pageview } from 'react-ga';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      initialize('G-KG7KQ8K3GP');
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
  return <></>;
};

export default RouteChangeTracker;