import { Container, Page, RankingTable, Spacing, TabBar, Text } from '@atomic';
import React from 'react';

import { CreatorDTO } from '../models';

type RankingsPageProps = {
  creators: CreatorDTO[];
};

export const RankingsPage: React.FC<RankingsPageProps> = ({
  creators = [],
}) => {
  return (
    <Page title='Rankings'>
      <Spacing top='md' bottom='md'>
        <Container>
          <Text variant='h3'>Top Creators</Text>
          <Spacing bottom='md'>
            <Text variant='subTitle'>
              Check out top ranking NFT artists on the NFT Marketplace.
            </Text>
          </Spacing>
        </Container>
        <TabBar
          headings={['Today', 'This Week', 'This Month', 'All Time']}
          mobileHeadings={['1d', '7d', '30d', 'All Time']}
          tabs={[
            <RankingTable creators={creators} key='Today' />,
            <RankingTable creators={creators} key='This Week' />,
            <RankingTable creators={creators} key='This Month' />,
            <RankingTable creators={creators} key='All Time' />,
          ]}
        />
      </Spacing>
    </Page>
  );
};
