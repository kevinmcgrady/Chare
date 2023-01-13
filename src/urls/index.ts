export const urls = {
  homepage: '/',
  auth: {
    connectWallet: '/auth/connect-wallet',
    createAccount: '/auth/create-account',
    login: '/auth/login',
  },
  artist: {
    profile: (username: string) => `/artist/${username}`,
    rankings: '/artist/rankings',
  },
  nft: {
    landing: (slug: string) => `/nft/${slug}`,
    marketplace: '/nft/marketplace',
  },
};

export const navigationUrls = [
  { text: 'Marketplace', href: urls.nft.marketplace },
  { text: 'Rankings', href: urls.artist.rankings },
  { text: 'Connect a wallet', href: urls.auth.connectWallet },
];

export const authNavigationUrls = [
  { text: 'Sign Up', href: urls.auth.createAccount },
];

export const getEnviroment = () => {
  return process.env.NEXT_PUBLIC_SERVICE_URL;
};
