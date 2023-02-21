import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ArtistTemplate } from './ArtistTemplate.template';
import userEvent from '@testing-library/user-event';

const collections = [
  {
    title: 'DSGN Animals',
    creator: {
      _id: '123',
      image:
        'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
      username: 'animakid',
      emailAddress: 'kevinmcgrady47@gmail.com',
    },
    mainImage:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/dog.png',
    additionalImages: [
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/bear.png',
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/rabit.png',
    ],
  },
];
const creator = {
  _id: '12345',
  emailAddress: 'kevinmcgrady47@gmail.com',
  image:
    'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
  username: 'Kev',
};
const nfts = [
  {
    slug: 'space-walking',
    title: 'Space Walking',
    image:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/nfts/spaceWalking.svg',
    mintedOn: new Date('2023-01-11T12:17:40.373Z'),
    description: [
      'The Orbitians',
      'is a collection of 10,000 unique NFTs on the Ethereum blockchain.',
      'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.',
      'They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
    ],
    tags: ['Animation', 'Illustration', 'Moon'],
    endDate: new Date('2023-01-11T12:17:40.373Z'),
    price: '1.63',
    highestBid: '0.33',
    creator: {
      _id: '63bed37a732ff9e2680afe2a',
      image:
        'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
      username: 'animakid',
      emailAddress: 'kevinmcgrady47@gmail.com',
    },
  },
];

describe('ArtistTemplate', () => {
  it('should display main image', () => {
    render(
      <ArtistTemplate
        collections={collections}
        creator={creator}
        nfts={nfts}
      />,
    );
    expect(screen.getByAltText('Artist')).toBeInTheDocument();
  });

  it('should display artist information', () => {
    render(
      <ArtistTemplate
        collections={collections}
        creator={creator}
        nfts={nfts}
      />,
    );
    expect(screen.getByAltText('Avatar')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Kev');
  });

  it('should display created NFTs by default', () => {
    render(
      <ArtistTemplate
        collections={collections}
        creator={creator}
        nfts={nfts}
      />,
    );

    expect(screen.getByText('Space Walking')).toBeInTheDocument();
  });

  it('should show collections once clicked', () => {
    render(
      <ArtistTemplate
        collections={collections}
        creator={creator}
        nfts={nfts}
      />,
    );

    userEvent.click(screen.getByText('Collections'));
    expect(screen.getByText('DSGN Animals')).toBeInTheDocument();
  });
});
