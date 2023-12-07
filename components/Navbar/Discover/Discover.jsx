import React from 'react'


// INTERNAL IMPORT

import style from './Discover.module.css';
import Link from 'next/link';

const Discover = () => {

  const discover=[
    {
      name: "Collection",
      link: "collection"
    },

    {
      name: "Search",
      link: "search"
    },

    {
      name: "Author Profile",
      link: "author-profile"
    },

    {
      name: "Connect Wallet",
      link: "connectWallet"
    },

    {
      name: "Account Setting",
      link: "account-setting"
    },

    {
      name: "Blog",
      link: "blog"
    }
  ];

  return (
    <div>
      {discover.map((el, i)=> (
        <div key={i + 1} className={style.discover}>
          <Link href={{pathname: `${el.link}`}}>{el.name}</Link>

          </div>


      ))}
      
      </div>
  )
}

export default Discover