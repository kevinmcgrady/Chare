import { Button, Grid, Link, Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import React, { ReactElement } from 'react';

import styles from './SectionWithTitleAndDescription.module.scss';

type SectionWithTitleAndDescriptionProps = {
  title: string;
  description?: string;
  data: ReactElement[];
  noOfColumns: number;
  cta?: { text: string; href: string };
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
        <section role='main'>
          <div data-testid='header' className={styles.header}>
            <div>
              <Text variant='h3'>{title}</Text>
              <Spacing bottom='md'>
                {description && <Text variant='subTitle'>{description}</Text>}
              </Spacing>
            </div>
            {cta && !isMobile && (
              <div>
                <Link href={cta.href}>
                  <Button
                    icon={{ type: 'eye', color: 'secondary' }}
                    variant='secondary'
                  >
                    {cta?.text}
                  </Button>
                </Link>
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
              <Link href={cta.href}>
                <Button
                  icon={{ type: 'eye', color: 'secondary' }}
                  variant='secondary'
                  isFullWidth
                >
                  {cta?.text}
                </Button>
              </Link>
            </Spacing>
          )}
        </section>
      </Spacing>
    );
  };
