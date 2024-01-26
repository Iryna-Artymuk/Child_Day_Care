import Container from '@/components/ui/Container/Container';

import styles from './OurKids.module.scss';

import { kidsData } from '@/constants/data/kidsData';

import Card from './Card';

import sprite from '@/assets/icons/sprite.svg';
import { useEffect, useState } from 'react';
const OurKids = () => {
  // const [searchInputValue, setsearchInputValue] = useState('');

  // const [filterKidsData, setFilterKidsData] = useState(kidsData);
  // const handelChange = e => {
  //   setsearchInputValue(e.target.value.trim());
  // };
  // useEffect(() => {
  //   const filterKids = kidsData.filter(kid =>
  //     kid.name.toLowerCase().includes(searchInputValue.toLowerCase())
  //   );
  //   setFilterKidsData(filterKids);
  // }, [searchInputValue]);
  return (
    <section id="ourKids" className={styles.ourKids}>
      <Container>
        <div className="contentWrapper">
          <h2 className="title">Наші діти</h2>
          {/* <div className={styles.searchWrapper}>
            <h2 className="title">Наші діти</h2>
            <label>
              <svg className={styles.icon1} width={20} height={20}>
                <use href={`${sprite}#${'icon-search'}`} />
              </svg>
              <input
                className={styles.searchInput}
                type="text"
                value={searchInputValue}
                onChange={handelChange}
                placeholder="введіть ім'я"
                title="пошук по імені або прізвищу"
              />
            </label>
          </div> */}

          <ul className={styles.kidsList}>
            {kidsData.map(child => {
              return (
                <li key={child.name}>
                  <Card childInfo={child} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default OurKids;
