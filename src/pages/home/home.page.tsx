import { Loading3QuartersOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { DeckList } from '@app/home/deck-list/deck-list.component';
import { GET_DECKS_QUERY } from '@graphql/queries/get-decks.query';
import { DeckListProvider } from '@providers/deck-list.provider';
import { Layout } from '@ui/layout/layout.component';
import { Spin } from 'antd';
import React from 'react';

export const HomePage = () => {
  const { data, loading } = useQuery(GET_DECKS_QUERY);

  return (
    <Layout>
      <DeckListProvider>
        <Spin
          spinning={loading}
          tip="Fetching decks data..."
          indicator={<Loading3QuartersOutlined style={{ fontSize: 30 }} spin />}
          style={{ fontSize: 19 }}
        >
          <DeckList decks={loading ? [] : data.getAllDecks} />
        </Spin>
      </DeckListProvider>
    </Layout>
  );
};
