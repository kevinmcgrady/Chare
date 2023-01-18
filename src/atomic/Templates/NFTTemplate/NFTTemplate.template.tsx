import {
  Button,
  Container,
  CreatorPin,
  Grid,
  IconLink,
  Page,
  Spacing,
  Tag,
  Text,
  Timer,
} from '@atomic';
import { formatDate } from '@modules/core/utils';
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
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url("${nft.image}")` }}
        ></div>
        <Container>
          <Grid noOfColumns={2} noOfMobileCols={1}>
            <div>
              <Spacing top='md' bottom='xs'>
                <Text variant='h2'>{nft.title}</Text>
              </Spacing>
              <Text color='gray'>{`Minted on ${formatDate(
                nft.mintedOn,
              )}`}</Text>
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
                {nft.description.map((description, index) => (
                  <Spacing key={index} top='xs' bottom='xs'>
                    <Text>{description}</Text>
                  </Spacing>
                ))}
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
                <Timer date={nft.endDate} />
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
