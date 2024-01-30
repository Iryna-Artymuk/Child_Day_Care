import { gql, useQuery } from '@apollo/client';
import styles from './GalleryFilters.module.scss';
const GalleryFilters = ({ getFilterId }) => {
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
  const { data, error, loading } = useQuery(EVENTS);
  return (
    <div className={styles.wrapper}>
      {data?.events?.data.map(item => (
        <button key={item.id} onClick={() => getFilterId(item.id)}>
          {item.attributes.name}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;
