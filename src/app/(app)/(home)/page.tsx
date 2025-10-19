

import { getQueryClient, trpc } from '@/trpc/server';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export default async function Home() {

  const queryClient = getQueryClient();

  const categories = await queryClient.fetchQuery(trpc.categories.getMany.queryOptions());

  return (
      <div>
        {JSON.stringify(categories, null, 2)};
      </div>
      );
};
