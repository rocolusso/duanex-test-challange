'use client';

import React from 'react';
import TreeItem from '@/components/TreeItem';
import { dbApiData, DbApiItem } from '@/lib/db-data';

async function fetchData() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return dbApiData;
}

function RenderStructure() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiData, setApiData] = React.useState<DbApiItem[] | null>(null);

  const getData = async () => {
    setIsLoading(true);
    fetchData().then((resData: DbApiItem[]) => {
      setApiData(resData);
      setIsLoading(false);
    });
  };

  return (
    <div className="mt-10">
      {isLoading && <div>Loading...</div>}

      {apiData !== null && (
        <div className="mt-10">
          <ul
            id="itemsList"
            className="bg-[#1c1c1c] p-10 max-w-[400px] rounded-xl"
          >
            {apiData.map((item: DbApiItem) => (
              <TreeItem key={item.name} item={item} />
            ))}
          </ul>
        </div>
      )}

      {!apiData && (
        <button
          className="px-10 cursor-pointer py-5 bg-green-600 duration-300 hover:bg-green-400 rounded-lg "
          type="button"
          onClick={getData}
        >
          Get Data
        </button>
      )}
    </div>
  );
}

export default RenderStructure;
