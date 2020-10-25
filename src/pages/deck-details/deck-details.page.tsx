import { useQuery } from '@apollo/client';
import { DeckDetailsContainer } from '@app/deck-details/deck-details-container/deck-details-container.component';
import { reloadDeckDetailsData } from '@context/deck-details/deck-details.action-creators';
import { GET_DECK_DETAILS } from '@graphql/queries/get-deck-details.query';
import { useDeckDetailsState } from '@hooks/use-deck-details-state/use-deck-details-state.hook';
import { Layout } from '@ui/layout/layout.component';
import { Spin } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';

export const DeckDetailsPage = () => {
  const {
    state: { shouldReloadData },
    dispatch,
  } = useDeckDetailsState();

  const { id } = useParams() as { id: string };

  const { loading, data, refetch } = useQuery(GET_DECK_DETAILS, {
    variables: {
      deckID: id,
    },
    fetchPolicy: 'network-only',
  });

  React.useEffect(() => {
    if (!shouldReloadData) {
      return;
    }

    dispatch(reloadDeckDetailsData());
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReloadData]);

  return (
    <Layout>
      <Spin spinning={loading}>
        {!loading && data.getDeck && <DeckDetailsContainer {...data.getDeck} />}
      </Spin>
    </Layout>
  );
};
