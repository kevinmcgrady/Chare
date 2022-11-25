import { Button, Grid, Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks/useMediaQuery';
import React, { ReactElement } from 'react';

import styles from './SectionWithTitleAndDescription.module.scss';

type SectionWithTitleAndDescriptionProps = {
  title: string;
  description?: string;
  data: ReactElement[];
  noOfColumns: number;
  cta?: { text: string };
  noOfTabletCols?: number;
  noOfMobileCols?: number;
};

export const SectionWithTitleAndDescription: React.FC<SectionWithTitleAndDescriptionProps> =
  ({
    title,
    description,
    noOfColumns,
    cta,
    noOfTabletCols,
    noOfMobileCols,
    data,
  }) => {
    const { isMobile } = useMediaQuery();

    return (
      <Spacing top={isMobile ? 'sm' : 'lg'} bottom={isMobile ? 'sm' : 'lg'}>
        <section>
          <div className={styles.header}>
            <div>
              <Text variant='h3'>{title}</Text>
              <Spacing bottom='md'>
                {description && <Text variant='subTitle'>{description}</Text>}
              </Spacing>
            </div>
            {cta && !isMobile && (
              <div>
                <Button
                  icon={{ type: 'eye', color: 'secondary' }}
                  variant='secondary'
                >
                  {cta?.text}
                </Button>
              </div>
            )}
          </div>
          <Grid
            noOfTabletColumns={noOfTabletCols}
            noOfColumns={noOfColumns}
            noOfMobileCols={noOfMobileCols}
          >
            {data}
          </Grid>
          {cta && isMobile && (
            <Spacing top='xs'>
              <Button variant='secondary' isFullWidth>
                {cta?.text}
              </Button>
            </Spacing>
          )}
        </section>
      </Spacing>
    );
  };
