import React from 'react';
import Tech from './tech';
import Chapters from './chapters';
import Github from './github';

export default function Readme() {
  return (
    <div>
      <h1>ReactU Episode #30</h1>
      <h2>
        Building a Real Time Chat App using Node, Express, SocketIO and React
      </h2>
      <p>
        Today we will be building a basic chat application where users can pick
        a username, join the room, send messages and see messages sent by
        others. Real time updates will be provided by the socket.io library.
      </p>

      <Tech />
      <Chapters />
      <Github />
    </div>
  );
}
