import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Container from '@/components/ui/Container/Container';

import styles from './StudyPage.module.scss';
import { useEffect } from 'react';
import { setRotationPlus } from '@/services/setRotationPlus';
const STUDY_ITEMS = gql`
  query getitems {
    studies {
      data {
        id
        attributes {
          title
          body
        }
      }
    }
  }
`;
const StudyPage = () => {
  const [studyItems, setStudyItems] = useState([]);
  const { data, error, loading } = useQuery(STUDY_ITEMS);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setStudyItems(data?.studies.data);
  }, [data]);

  return (
    <section className={styles.studyPage}>
      <Container>
        <div className="contentWrapper">
          {loading && !error ? (
            <p> 1хв Заватаження даних... </p>
          ) : (
            <ul className={styles.cards}>
              {studyItems?.map(item => (
                <li
                  key={item.id}
                  style={{ transform: setRotationPlus() }}
                  className={styles.cards_item}
                >
                  <div className={styles.card}>
                    <div className={styles.card_content}>
                      <div className={styles.card_text}>
                        <Markdown remarkPlugins={[remarkGfm]}>
                          {item.attributes.body}
                        </Markdown>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
};

export default StudyPage;
