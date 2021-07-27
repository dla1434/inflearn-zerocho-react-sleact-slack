import fetcher from '@utils/fetcher';
import React, { FC, useCallback } from 'react';
import useSWR from 'swr';
import axios from 'axios';

const WorkSpace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('http://localhost:3095/api/users', fetcher);
  const onLogOut = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        revalidate();
      });
  }, []);

  return (
    <div>
      <button onClick={onLogOut}>로그아웃</button>
      {children}
    </div>
  );
};

export default WorkSpace;
