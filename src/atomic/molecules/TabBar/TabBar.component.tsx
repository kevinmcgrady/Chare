import { Container, Grid, Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import cn from 'classnames';
import React, { ReactElement, useState } from 'react';

import styles from './TabBar.module.scss';

type TabBarProps = {
  headings: string[];
  mobileHeadings?: string[];
  tabs: ReactElement[];
};

export const TabBar: React.FC<TabBarProps> = ({
  headings = [],
  mobileHeadings = [],
  tabs = [],
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const { isMobile } = useMediaQuery();

  const displayHeadings =
    isMobile && mobileHeadings.length ? mobileHeadings : headings;

  return (
    <>
      <div className={styles.tabBar}>
        <Container>
          <Grid noOfColumns={headings.length}>
            {displayHeadings.map((heading, index) => (
              <div
                key={heading}
                role='link'
                onClick={() => setActiveTabIndex(index)}
              >
                <Text
                  align='center'
                  className={cn(
                    activeTabIndex === index && styles.isActive,
                    styles.heading,
                  )}
                  variant='h5'
                  color={activeTabIndex === index ? 'default' : 'gray'}
                >
                  {heading}
                </Text>
              </div>
            ))}
          </Grid>
        </Container>
      </div>
      <Spacing top='md'>{tabs[activeTabIndex]}</Spacing>
    </>
  );
};
