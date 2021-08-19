import { ChatZone, Section, StickyHeader } from '@components/ChatList/styles';
import React, { useCallback, useRef, VFC } from 'react';
import { IDM } from '@typings/db';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  // chatData?: IDM[];
  chatSections: { [key: string]: IDM[] };
}

const ChatList: VFC<Props> = ({ chatSections }) => {
  const scrollbarRef = useRef(null);
  const onScroll = useCallback(() => {}, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        <Section>
          {/*
          {chatData?.map((chat) => (
            <Chat key={chat.id} data={chat} />
          ))}
          */}
          {/*
          chatData는 배열이여서 map으로 반복이 가능했는데
          chatSection은 객체이므로 다른 방법을 사용한다.
          */}
          {Object.entries(chatSections).map(([date, chats]) => {
            return (
              <Section className={`section-${date}`} key={date}>
                <StickyHeader>
                  <button>{date}</button>
                </StickyHeader>
                {chats.map((chat) => (
                  <Chat key={chat.id} data={chat} />
                ))}
              </Section>
            );
          })}
        </Section>
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
