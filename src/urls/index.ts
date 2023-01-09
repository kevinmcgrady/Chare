export const urls = {
  homepage: '/',
  auth: {
    connectWallet: '/connect-wallet',
    createAccount: '/create-account',
  },
  artist: {
    profile: (username: string) => `/artist/${username}`,
    rankings: '/rankings',
  },
  nft: {
    landing: (slug: string) => `/nft/${slug}`,
    marketplace: '/marketplace',
  },
};
