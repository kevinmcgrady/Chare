import { CreatorService, RankingsPage } from '@modules/creator';

export async function getServerSideProps(context: any) {
  const creatorService = new CreatorService(context);

  const creators = await creatorService.getAllCreators();
  return {
    props: { creators },
  };
}

export default RankingsPage;
