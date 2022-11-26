import { Grid, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import cn from 'classnames';
import React, { useState } from 'react';

import styles from './TabBar.module.scss';

type TabBarProps = {
  headings: string[];
  mobileHeadings?: string[];
};

export const TabBar: React.FC<TabBarProps> = ({
  headings = [],
  mobileHeadings = [],
}) => {
  const [activeTab, setActiveTab] = useState<string>(headings[0]);
  const { isMobile } = useMediaQuery();

  const displayHeadings =
    isMobile && mobileHeadings.length ? mobileHeadings : headings;

  return (
    <Grid noOfColumns={headings.length}>
      {displayHeadings.map((heading) => (
        <div key={heading} role='link' onClick={() => setActiveTab(heading)}>
          <Text
            align='center'
            className={cn(
              activeTab === heading && styles.isActive,
              styles.heading,
            )}
            variant='h5'
            color={activeTab === heading ? 'default' : 'gray'}
          >
            {heading}
          </Text>
        </div>
      ))}
    </Grid>
  );
};
