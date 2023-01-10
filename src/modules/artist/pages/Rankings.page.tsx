import { Container, Page, RankingTable, Spacing, TabBar, Text } from '@atomic';
import React from 'react';

export const RankingsPage: React.FC = () => {
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
            <RankingTable key='Today' />,
            <RankingTable key='This Week' />,
            <RankingTable key='This Month' />,
            <RankingTable key='All Time' />,
          ]}
        />
      </Spacing>
    </Page>
  );
};
