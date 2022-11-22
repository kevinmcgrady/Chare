import { HomepageTemplate, Page } from '@atomic';
import React from 'react';

import {
  categories,
  collections,
  creators,
  popularNFTs,
} from '../atomic/Templates/Homepage/data';

export default function Home() {
  return (
    <Page>
      <HomepageTemplate
        collections={collections}
        creators={creators}
        categories={categories}
        popularNFTs={popularNFTs}
      />
    </Page>
  );
}
