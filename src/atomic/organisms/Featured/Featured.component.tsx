import {
  Button,
  Container,
  CreatorPin,
  Link,
  Spacing,
  Text,
  Timer,
} from '@atomic';
import { useMediaQuery } from '@hooks';
import { NftDTO } from '@modules/nft';
import { urls } from '@urls';
import Image from 'next/image';
import React from 'react';

import styles from './Featured.module.scss';

type FeaturedProps = {
  nft: NftDTO;
};

export const Featured: React.FC<FeaturedProps> = ({ nft }) => {
  const { isMobile } = useMediaQuery();
  return (
    <div className={styles.container}>
      <Image src={nft.image} alt={nft.title} fill className={styles.image} />
      <div className={styles.overlay}>
        <Container>
          <div className={styles.details}>
            <div>
              <Spacing bottom='xs'>
                <CreatorPin
                  artistName={nft.creator.username}
                  image={{ src: nft.creator.image, alt: nft.creator.username }}
                  variant='withBackground'
                />
              </Spacing>
              <Spacing bottom='xs'>
                <Text variant='h2'>{nft.title}</Text>
              </Spacing>
              {!isMobile && (
                <Link href={urls.nft.landing(nft.slug)}>
                  <Button
                    icon={{ type: 'eye', color: 'secondary' }}
                    variant='tertiary'
                  >
                    See NFT
                  </Button>
                </Link>
              )}
            </div>
            <Timer date={new Date()} />
            <Spacing bottom='xs' />
            {isMobile && (
              <Link href={urls.nft.landing(nft.slug)}>
                <Button
                  variant='tertiary'
                  icon={{ type: 'eye', color: 'secondary' }}
                  isFullWidth
                >
                  See NFT
                </Button>
              </Link>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};
