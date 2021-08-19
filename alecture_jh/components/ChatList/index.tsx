import { ChatZone, Section } from '@components/ChatList/styles';
import React, { useCallback, useRef, VFC } from 'react';
import { IDM } from '@typings/db';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  chatData?: IDM[];
}

const ChatList: VFC<Props> = ({ chatData }) => {
  const scrollbarRef = useRef(null);
  const onScroll = useCallback(() => {}, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        <Section>
          {chatData?.map((chat) => (
            <Chat key={chat.id} data={chat} />
          ))}
        </Section>
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
