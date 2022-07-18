import React, { useState } from "react";
import _ from 'lodash'

export function SortButton({ setPosts }) {
  const [sortMode, setSortMode] = useState("asc");

  const goDesc = () => {//Слушатель для сортировки по убыванию
    setSortMode('desc')
    setPosts((prev) => {
      return _.orderBy(prev, 'creation_date', 'desc')
    })
  }
  const goAsc = () => {//Слушатель для сортировки по возрастанию
    setSortMode('asc')
    setPosts((prev) => {
      return _.orderBy(prev, 'creation_date', 'asc')
    })
  }

  return (
    <>
      {/* условный рендеринг кнопки */}
      {sortMode === "asc" && (
        <button
          onClick={goDesc}
          className="py-2 px-4 my-4 rounded hover:shadow-md self-center transition-all bg-red-600"
        >
          Сортировать по убыванию
        </button>
      )}
      {sortMode === "desc" && (
        <button
          onClick={goAsc}
          className="py-2 px-4 my-4 rounded hover:shadow-md self-center transition-all bg-green-600"
        >
          Сортировать по возрастанию
        </button>
      )}
    </>
  );
}
