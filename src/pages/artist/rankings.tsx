import { CreatorService, RankingsPage } from '@modules/creator';

export async function getServerSideProps() {
  const creators = await CreatorService.getAllCreators();
  return {
    props: { creators },
  };
}

export default RankingsPage;
