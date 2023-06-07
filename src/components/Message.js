import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../Redux/features/message';

const Message = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.message.greeting);
  const status = useSelector((state) => state.message.status);
  const error = useSelector((state) => state.message.error);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <h1>Message is being Fetched</h1>
    );
  } if (status === 'failed') {
    return (
      <h1>
        Error:
        {error}
      </h1>
    );
  }

  return (
    <h1>
      Rails API said:
      {greeting}
    </h1>
  );
};

export default Message;
