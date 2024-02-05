import { gql, useQuery } from '@apollo/client';
import styles from './GalleryFilters.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
const GalleryFilters = ({ getFilterId, filterId }) => {
  const EVENTS = gql`
    query GetEvents {
      events {
        data {
          id
          attributes {
            name
          }
        }
      }
    }
  `;
  const { data } = useQuery(EVENTS);

  const [isActive, setIsActive] = useState(filterId);
  console.log('isActive: ', isActive);
  return (
    <div className={styles.wrapper}>
      {data?.events?.data.map(item => (
        <button
          key={item.id}
          onClick={() => {
            setIsActive(item.id);
            getFilterId(item.id);
          }}
          className={isActive === item.id ? styles.activeButton : ''}
        >
          {item?.attributes.name}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;
