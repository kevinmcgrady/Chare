import { Container, Page, RankingTable,Spacing, TabBar, Text } from '@atomic';
import React from 'react';

export default function Home() {
  return (
    <Page title='Rankings'>
      <Spacing top='md'>
        <Container>
          <Text variant='h3'>Top Creators</Text>
          <Spacing bottom='md'>
            <Text variant='subTitle'>
              Check out top ranking NFT artists on the NFT Marketplace.
            </Text>
          </Spacing>
          <TabBar
            headings={['Today', 'This Week', 'This Month', 'All Time']}
            mobileHeadings={['1d', '7d', '30d', 'All Time']}
          />
          <RankingTable />
        </Container>
      </Spacing>
    </Page>
  );
}
