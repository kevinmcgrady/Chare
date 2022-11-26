import React, { ReactElement } from 'react';
import { AiOutlineEye, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { VscRocket } from 'react-icons/vsc';

type IconType = 'rocket' | 'eye' | 'user' | 'search';
type IconColor = 'primary' | 'secondary';

export enum Color {
  primary = '#ffffff',
  secondary = '#a259ff',
}

export type IconProps = {
  type: IconType;
  color: IconColor;
  className?: string;
};

const iconElement = (
  color: Color,
  className: string | undefined,
): Record<IconType, ReactElement> => {
  return {
    rocket: <VscRocket size={20} color={color} className={className} />,
    eye: <AiOutlineEye size={20} color={color} className={className} />,
    user: <HiOutlineUserCircle size={20} color={color} className={className} />,
    search: <AiOutlineSearch size={20} color={color} className={className} />,
  };
};

export const Icon: React.FC<IconProps> = ({
  type,
  color = 'primary',
  className,
}) => {
  return iconElement(Color[color], className)[type];
};
