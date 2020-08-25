import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useListenHistory = callback => {
  const history = useHistory();

  useEffect(() => {
    return history.listen(callback);
  }, [history, callback]);
};

export default useListenHistory;
