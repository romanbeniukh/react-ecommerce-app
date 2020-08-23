import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useListenHistory = callback => {
  const history = useHistory();

  useEffect(() => {
    return history.listen(callback);
    // eslint-disable-next-line
  }, [history]);
};

export default useListenHistory;
