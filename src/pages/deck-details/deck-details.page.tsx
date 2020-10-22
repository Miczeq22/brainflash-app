import { useQuery } from '@apollo/client';
import { DeckDetailsContainer } from '@app/deck-details/deck-details-container/deck-details-container.component';
import { GET_DECK_DETAILS } from '@graphql/queries/get-deck-details.query';
import { Layout } from '@ui/layout/layout.component';
import { Spin } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';

export const DeckDetailsPage = () => {
  const { id } = useParams() as { id: string };

  const { loading, data } = useQuery(GET_DECK_DETAILS, {
    variables: {
      deckID: id,
    },
    fetchPolicy: 'network-only',
  });

  return (
    <Layout>
      <Spin spinning={loading}>
        {!loading && data.getDeck && <DeckDetailsContainer {...data.getDeck} />}
      </Spin>
    </Layout>
  );
};
