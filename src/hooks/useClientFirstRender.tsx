import { useEffect, useState } from 'react';

export const useClientFirstRender = () => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(!client);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};
