import { Container, Page, RankingTable, Spacing, TabBar, Text } from '@atomic';
import React from 'react';

export default function Rankings() {
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
            <Container key='Today'>
              <RankingTable />
            </Container>,
            <Container key='This Week'>
              <RankingTable />
            </Container>,
            <Container key='This Month'>
              <RankingTable />
            </Container>,
            <Container key='All Time'>
              <RankingTable />
            </Container>,
          ]}
        />
      </Spacing>
    </Page>
  );
}
