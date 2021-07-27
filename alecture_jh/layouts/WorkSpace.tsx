import fetcher from '@utils/fetcher';
import React, { FC, useCallback } from 'react';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const WorkSpace: FC = ({ children }) => {
  const { data, error, revalidate, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  const onLogOut = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        // revalidate();
        mutate(false, false); //OPTIMISTIC UI
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogOut}>로그아웃</button>
      {children}
    </div>
  );
};

export default WorkSpace;
