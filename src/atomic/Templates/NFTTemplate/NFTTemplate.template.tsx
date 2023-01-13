import {
  Button,
  Container,
  CreatorPin,
  Grid,
  IconLink,
  Image,
  Page,
  Spacing,
  Tag,
  Text,
  Timer,
} from '@atomic';
import { NftDTO } from '@modules/nft';
import React from 'react';

import styles from './NFTTemplate.module.scss';

type NftTemplateProps = {
  nft: NftDTO;
};

export const NFTTemplate: React.FC<NftTemplateProps> = ({ nft }) => {
  return (
    <Page title='NFT' absoluteHeader>
      <Spacing bottom='md'>
        <div className={styles.imageContainer}>
          <Image
            priority
            src={nft.image}
            alt='NFT'
            fill
            className={styles.image}
          />
        </div>
        <Container>
          <Grid noOfColumns={2} noOfMobileCols={1}>
            <div>
              <Spacing top='md' bottom='xs'>
                <Text variant='h2'>{nft.title}</Text>
              </Spacing>
              <Text color='gray'>{`Minted on ${nft.mintedOn}`}</Text>
              <Spacing top='xs'>
                <Text variant='h5' font='spaceMono' color='gray'>
                  Created By
                </Text>
                <Spacing top='xs'>
                  <CreatorPin
                    artistName={nft.creator.username}
                    image={{ src: nft.creator.image, alt: 'alt' }}
                    variant='large'
                  />
                </Spacing>
              </Spacing>
              <Spacing top='xs'>
                <Text variant='h5' font='spaceMono' color='gray'>
                  Description
                </Text>
                <Spacing top='xs' bottom='xs'>
                  <Text>The Orbitians</Text>
                </Spacing>
                <Spacing bottom='xs'>
                  <Text>
                    is a collection of 10,000 unique NFTs on the Ethereum
                    blockchain.
                  </Text>
                </Spacing>
                <Spacing bottom='xs'>
                  <Text>
                    There are all sorts of beings in the NFT Universe. The most
                    advanced and friendly of the bunch are Orbitians.
                  </Text>
                </Spacing>
                <Text>
                  They live in a metal space machines, high up in the sky and
                  only have one foot on Earth. These Orbitians are a peaceful
                  race, but they have been at war with a group of invaders for
                  many generations. The invaders are called Upside-Downs,
                  because of their inverted bodies that live on the ground, yet
                  do not know any other way to be. Upside-Downs believe that
                  they will be able to win this war if they could only get an
                  eye into Orbitian territory, so they have taken to make human
                  beings their target.
                </Text>
              </Spacing>
              <Spacing top='xs'>
                <Spacing bottom='xs'>
                  <Text variant='h5' font='spaceMono' color='gray'>
                    Details
                  </Text>
                </Spacing>
                <Spacing bottom='xs'>
                  <IconLink
                    icon={{ type: 'world' }}
                    href='/'
                    text='View on Etherscan'
                  />
                </Spacing>
                <IconLink
                  icon={{ type: 'world' }}
                  href='/'
                  text='View Original'
                />
              </Spacing>
              <Spacing top='xs'>
                <Text variant='h5' font='spaceMono' color='gray'>
                  Tags
                </Text>
                <Spacing top='xs'>
                  <div className={styles.tagContainer}>
                    {nft.tags.map((tag) => (
                      <Spacing key={tag} right='xs'>
                        <Tag title={tag} />
                      </Spacing>
                    ))}
                  </div>
                </Spacing>
              </Spacing>
            </div>
            <div className={styles.timerContainer}>
              <Spacing top='md'>
                <Timer />
                <Spacing top='xs'>
                  <Button isFullWidth>Place Bid</Button>
                </Spacing>
              </Spacing>
            </div>
          </Grid>
        </Container>
      </Spacing>
    </Page>
  );
};
