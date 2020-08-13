import React from 'react';

import {Card} from './components/Card';

interface Post {
  title: string,
  img: string
}

const cards: ReadonlyArray<Post> = [
  {
    "title": "Post 2",
    "img": "https://picsum.photos/300/400"
  },
  {
    "title": "G Money",
    "img": "https://picsum.photos/300/400"
  },
  {
    "title": "lit",
    "img": "https://picsum.photos/300/400"
  },
  {
    "title": "heeeyoo",
    "img": "https://picsum.photos/300/400"
  }
] 


function App() {
  return (
    <div className="App">
      <Card title="Example Post" img="https://picsum.photos/id/237/300/400" />
      {cards.map(c => {
        return (<Card title={c.title} img={c.img} />)
      })}
    </div>
  );
}

export default App;
