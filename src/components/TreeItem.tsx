'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { DbApiItem } from '@/lib/db-data';

function getFileExtension(filename:string) {
  const index = filename.lastIndexOf('.');
  return index > 0 ? filename.slice(index + 1) : '';
}

function getIconByFileExtension(fileExtension: string) {
  switch (fileExtension) {
    case 'js': return 'icon-js';

    case 'css': return 'icon-css';

    default: return '';
  }
}
function TreeItem({ item }:{item:DbApiItem}) {
  const iconClass = item.icon || getIconByFileExtension(getFileExtension(item.name));
  const router = useRouter();

  const handleClick = (e:React.BaseSyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const elem = e.target;

    if ((elem.innerHTML.includes('.js') || elem.innerHTML.includes('.css'))
            && elem.nodeName === 'LI' && elem.childNodes.length < 2
    ) {
      router.push(`/${elem.innerText}`);
    }
  };
  return (
    <li onClick={handleClick} className={`${iconClass} border-b border-t border-gray-200 cursor-pointer`}>
      {item.name}
      {item.subitems && item.subitems?.length > 0 && (
        <ul className="ml-5 inside">
          {item.subitems.map((subitem: any) => (
            <TreeItem key={Math.random()} item={subitem} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default TreeItem;
