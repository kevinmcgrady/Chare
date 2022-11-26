import BasketBall from '@assets/icons/Basketball.svg';
import Camera from '@assets/icons/Camera.svg';
import MagicWand from '@assets/icons/MagicWand.svg';
import MusicNotes from '@assets/icons/MusicNotes.svg';
import PaintBrush from '@assets/icons/PaintBrush.svg';
import Planet from '@assets/icons/Planet.svg';
import Swatches from '@assets/icons/Swatches.svg';
import VideoCamera from '@assets/icons/VideoCamera.svg';
import Avatar from '@assets/images/Avatar.svg';
import Avatar1 from '@assets/images/Avatar-1.svg';
import Avatar2 from '@assets/images/Avatar-2.svg';
import Avatar3 from '@assets/images/Avatar-3.svg';
import Avatar4 from '@assets/images/Avatar-4.svg';
import Avatar5 from '@assets/images/Avatar-5.svg';
import Avatar6 from '@assets/images/Avatar-6.svg';
import Avatar7 from '@assets/images/Avatar-7.svg';
import SportCategory from '@assets/images/Ball.png';
import BearImage from '@assets/images/bear.png';
import VirtualWorldsCatgory from '@assets/images/Clouds.png';
import DogImage from '@assets/images/dog.png';
import UtilityCategory from '@assets/images/Key.png';
import VideoCategory from '@assets/images/Landscape.png';
import PhotographyCategory from '@assets/images/Man.png';
import CollectiblesCategory from '@assets/images/Monkey.png';
import MushroomImage from '@assets/images/mushroom.png';
import MushroomTwoImage from '@assets/images/mushroom-2.png';
import MushroomThreeImage from '@assets/images/mushroom-3.png';
import MusicCategory from '@assets/images/Music.png';
import ArtCategory from '@assets/images/purpleBackground.png';
import RabitImage from '@assets/images/rabit.png';
import RobotImage from '@assets/images/robot.png';
import RobotTwoImage from '@assets/images/robot-2.png';
import RobotThreeImage from '@assets/images/robot-3.png';
import Sky from '@assets/images/Sky.png';
import SpaceShip from '@assets/images/Spaceship.png';
import SpaceWoman from '@assets/images/SpaceWoman.png';
import {
  CardProps,
  CategoryWidgetProps,
  CollectionProps,
  CreatorWidgetProps,
} from '@atomic';

export const collections: CollectionProps[] = [
  {
    mainImage: { src: DogImage, alt: 'dog' },
    additionalImages: [
      { src: RabitImage, alt: 'rabit' },
      { src: BearImage, alt: 'Bear' },
    ],
    stat: '1020+',
    title: 'DSGN Animals',
    author: {
      image: { src: Avatar3, alt: 'GravityOne' },
      name: 'GravityOne',
    },
  },
  {
    mainImage: { src: MushroomImage, alt: 'mushroom' },
    additionalImages: [
      { src: MushroomTwoImage, alt: 'small mushroom' },
      { src: MushroomThreeImage, alt: 'large mushroom' },
    ],
    stat: '1020+',
    title: 'Magic Mushrooms',
    author: {
      image: { src: Avatar6, alt: 'Mr Fox' },
      name: 'Mr Fox',
    },
  },
  {
    mainImage: { src: RobotImage, alt: 'robot' },
    additionalImages: [
      { src: RobotTwoImage, alt: 'small robot' },
      { src: RobotThreeImage, alt: 'large robot' },
    ],
    stat: '1020+',
    title: 'Disco Machines',
    author: {
      image: { src: Avatar1, alt: 'robotica' },
      name: 'robotica',
    },
  },
];

export const creators: CreatorWidgetProps[] = [
  {
    image: {
      src: Avatar,
      alt: 'animakid',
    },
    authorName: 'animakid',
    totalSavings: '34.53 ETH',
  },
  {
    image: {
      src: Avatar2,
      alt: 'DigiLab',
    },
    authorName: 'DigiLab',
    totalSavings: '34.53 ETH',
  },
  {
    image: {
      src: Avatar3,
      alt: 'GravityOne',
    },
    authorName: 'GravityOne',
    totalSavings: '34.53 ETH',
  },
  {
    image: {
      src: Avatar4,
      alt: 'Juanie',
    },
    authorName: 'Juanie',
    totalSavings: '34.53 ETH',
  },
  {
    image: {
      src: Avatar5,
      alt: 'BlueWhale',
    },
    authorName: 'BlueWhale',
    totalSavings: '34.53 ETH',
  },
  {
    image: {
      src: Avatar6,
      alt: 'Mr fox',
    },
    authorName: 'Mr fox',
    totalSavings: '34.53 ETH',
  },
  {
    image: {
      src: Avatar7,
      alt: 'Shroomie',
    },
    authorName: 'Shroomie',
    totalSavings: '34.53 ETH',
  },
  {
    image: {
      src: Avatar1,
      alt: 'robotica',
    },
    authorName: 'robotica',
    totalSavings: '34.53 ETH',
  },
];

export const categories: CategoryWidgetProps[] = [
  {
    image: { src: ArtCategory, alt: 'Art' },
    icon: { src: PaintBrush, alt: 'Paint brush' },
    title: 'Art',
  },
  {
    image: { src: CollectiblesCategory, alt: 'Collectibles' },
    icon: { src: Swatches, alt: 'Swatches' },
    title: 'Collectibles',
  },
  {
    image: { src: MusicCategory, alt: 'Music' },
    icon: { src: MusicNotes, alt: 'Music Notes' },
    title: 'Music',
  },
  {
    image: { src: PhotographyCategory, alt: 'Photography' },
    icon: { src: Camera, alt: 'Camera' },
    title: 'Photography',
  },
  {
    image: { src: VideoCategory, alt: 'Video' },
    icon: { src: VideoCamera, alt: 'Video Camera' },
    title: 'Video',
  },
  {
    image: { src: UtilityCategory, alt: 'Utility' },
    icon: { src: MagicWand, alt: 'Magic Wand' },
    title: 'Utility',
  },
  {
    image: { src: SportCategory, alt: 'Sport' },
    icon: { src: BasketBall, alt: 'Basket Ball' },
    title: 'Sport',
  },
  {
    image: { src: VirtualWorldsCatgory, alt: 'Virtual Worlds' },
    icon: { src: Planet, alt: 'Planet' },
    title: 'Virtual Worlds',
  },
];

export const popularNFTs: CardProps[] = [
  {
    image: SpaceShip,
    title: 'Space Walking',
    author: { image: Avatar1, name: 'robotica' },
    price: '1.63 ETH',
    highestBid: '0.33 ETH',
  },
  {
    image: Sky,
    title: 'Wonder Sky',
    author: { image: Avatar2, name: 'DigiLab' },
    price: '1.63 ETH',
    highestBid: '0.33 ETH',
  },
  {
    image: SpaceWoman,
    title: 'Peaceful Life',
    author: { image: Avatar3, name: 'GravityOne' },
    price: '1.63 ETH',
    highestBid: '0.33 ETH',
  },
];
