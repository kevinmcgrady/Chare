import Coinbase from '@assets/icons/Coinbase.svg';
import Metamask from '@assets/icons/Metamask.svg';
import WalletConnect from '@assets/icons/WalletConnect.svg';
import { Image } from '@atomic';
import React, { ReactElement } from 'react';
import { AiOutlineEye, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { TbWorld } from 'react-icons/tb';
import { VscRocket } from 'react-icons/vsc';

type IconType =
  | 'rocket'
  | 'eye'
  | 'user'
  | 'search'
  | 'metamask'
  | 'coinbase'
  | 'walletConnect'
  | 'world';
type IconColor = 'primary' | 'secondary';

export enum Color {
  primary = '#ffffff',
  secondary = '#a259ff',
}

export type IconProps = {
  type: IconType;
  color?: IconColor;
  className?: string;
};

const iconElement = (
  color: Color,
  className: string | undefined,
): Record<IconType, ReactElement> => {
  return {
    rocket: (
      <VscRocket role='img' size={20} color={color} className={className} />
    ),
    eye: (
      <AiOutlineEye role='img' size={20} color={color} className={className} />
    ),
    user: (
      <HiOutlineUserCircle
        role='img'
        size={20}
        color={color}
        className={className}
      />
    ),
    search: (
      <AiOutlineSearch
        role='img'
        size={20}
        color={color}
        className={className}
      />
    ),
    metamask: (
      <Image
        role='img'
        width={32}
        height={32}
        className={className}
        src={Metamask}
        alt='Metamask'
      />
    ),
    coinbase: (
      <Image
        role='img'
        width={32}
        height={32}
        className={className}
        src={Coinbase}
        alt='Coinbase'
      />
    ),
    walletConnect: (
      <Image
        role='img'
        width={32}
        height={32}
        className={className}
        src={WalletConnect}
        alt='Wallet Connect'
      />
    ),
    world: <TbWorld role='img' size={20} color={color} className={className} />,
  };
};

export const Icon: React.FC<IconProps> = ({
  type,
  color = 'primary',
  className,
}) => {
  return iconElement(Color[color], className)[type];
};
