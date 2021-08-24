/*
다음의 예제 데이터를
[{id: 1, d: '2021-02-25'}, {id: 2, d: '2021-02-23'}, {id: 3, d: '2021-02-24'}, {id: 4, d: '2021-02-25'}]

다음처럼 날짜별로 배열의 id를 배열값을 넣어줄것이다.
sections = {
  '2021-02-25': [1, 4],
  '2021-02-23': [2],
  '2021-02-24': [3]
};
 */
import dayjs from 'dayjs';
import { IDM, IChat } from '@typings/db';

export default function makeSection(chatList: (IDM | IChat)[]) {
  const sections: { [key: string]: (IDM | IChat)[] } = {};

  chatList.forEach((chat) => {
    const monthDate = dayjs(chat.createdAt).format('YYYY-MM-DD');
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });

  return sections;
}
