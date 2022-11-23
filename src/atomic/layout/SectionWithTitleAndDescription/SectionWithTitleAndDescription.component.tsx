import { Button,Grid, Spacing, Text } from '@atomic';
import React, { ReactNode } from 'react';

import styles from './SectionWithTitleAndDescription.module.scss';

type SectionWithTitleAndDescriptionProps = {
  children: ReactNode;
  title: string;
  description?: string;
  noOfColumns: number;
  cta?: { text: string };
};

export const SectionWithTitleAndDescription: React.FC<SectionWithTitleAndDescriptionProps> =
  ({ children, title, description, noOfColumns, cta }) => {
    return (
      <Spacing top='lg' bottom='lg'>
        <section>
          <div className={styles.header}>
            <div>
              <Text variant='h3'>{title}</Text>
              <Spacing bottom='md'>
                {description && <Text variant='subTitle'>{description}</Text>}
              </Spacing>
            </div>
            {cta && (
              <div>
                <Button variant='secondary'>{cta?.text}</Button>
              </div>
            )}
          </div>

          <Grid noOfColumns={noOfColumns}>{children}</Grid>
        </section>
      </Spacing>
    );
  };
