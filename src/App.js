import { useEffect, useState } from "react";
import _ from 'lodash'
import { PostList } from "./components/PostList";
import { SortButton } from "./components/SortButton";
function App() {
  const [posts, setPosts] = useState(null)
  //const [sortMode, setSortMode] = useState('asc')
  useEffect(() => {//запрос, фильтрация и сортировка данных
    fetch('https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow')
      .then((res) => res.json())
      .then((res) => _.filter(res.items, function (el) {
        return el.is_answered && el.owner.reputation >= 50
      }))
      .then((res) => _.orderBy(res, 'creation_date', 'asc'))
      .then((data) => setPosts(data))
      .catch((err) => console.log(err))
  }, [])


  return (
    <div className="App flex flex-col justify-center items-center h-screen">
        {!posts && <h1 className="text-2xl">Loading...</h1>}
        {posts && <>
        <SortButton setPosts={setPosts} />
        <PostList posts={posts} />
        </>
        }
    </div>
  );
}

export default App;
