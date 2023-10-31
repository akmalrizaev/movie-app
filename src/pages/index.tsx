import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useContext } from 'react';
import { Header, Hero, Modal, Row, SubscriptionPlan } from 'src/components';

import { IMovie, Product } from 'src/interfaces/app.interface';
import { API_REQUEST } from 'src/services/api.service';
import { useInfoStore } from 'src/store';

export default function Home({
  trending,
  topRated,
  tvTopRated,
  popular,
  documentary,
  comedy,
  history,
  family,
  products,
  subscription,
}: HomeProps): JSX.Element {
  // useEffect(() => {
  //   fetch(API_REQUEST.trending)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const { setModal, modal } = useInfoStore();

  if (!subscription.length) return <SubscriptionPlan products={products} />;

  return (
    <div
      className={`relative min-h-screen ${
        modal && '!h-screen overflow-hidden'
      }`}
    >
      <Head>
        <title>Home-Movie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />

      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Hero trending={trending} />
        <section>
          {/* Row */}
          <Row title="Top Rated" movies={topRated} />
          <Row title="Tv Show" movies={tvTopRated} isBig={true} />
          <Row title="Popular" movies={popular} />
          <Row title="Documentary" movies={documentary} />
          <Row title="History" movies={history} />
          <Row title="Family" movies={family} />
          <Row title="Comedy" movies={comedy} />
          {/* BigRow */}
          {/* Row */}
          {/* BigRow */}
        </section>
      </main>
      {modal && <Modal />}
      <button className="z-100" onClick={() => setModal(true)}></button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  req,
}) => {
  const user_id = req.cookies.user_id;

  if (!user_id) {
    return {
      redirect: { destination: '/auth', permanent: false },
    };
  }

  const [
    trending,
    topRated,
    tvTopRated,
    popular,
    documentary,
    comedy,
    history,
    family,
    products,
    subscription,
  ] = await Promise.all([
    fetch(API_REQUEST.trending).then((res) => res.json()),
    fetch(API_REQUEST.top_rated).then((res) => res.json()),
    fetch(API_REQUEST.tv_top_rated).then((res) => res.json()),
    fetch(API_REQUEST.popular).then((res) => res.json()),
    fetch(API_REQUEST.documentary).then((res) => res.json()),
    fetch(API_REQUEST.comedy).then((res) => res.json()),
    fetch(API_REQUEST.history).then((res) => res.json()),
    fetch(API_REQUEST.family).then((res) => res.json()),
    fetch(API_REQUEST.products_list).then((res) => res.json()),
    fetch(`${API_REQUEST.subscription}/${user_id}`).then((res) => res.json()),
  ]);

  // const trending = await fetch(API_REQUEST.trending).then((res) => res.json());
  // const topRated = await fetch(API_REQUEST.top_rated).then((res) => res.json());
  // const tvTopRated = await fetch(API_REQUEST.tv_top_rated).then((res) =>
  //   res.json()
  // );
  // const popular = await fetch(API_REQUEST.popular).then((res) => res.json());
  // const documentary = await fetch(API_REQUEST.documentary).then((res) =>
  //   res.json()
  // );
  // const comedy = await fetch(API_REQUEST.comedy).then((res) => res.json());
  // const history = await fetch(API_REQUEST.history).then((res) => res.json());
  // const family = await fetch(API_REQUEST.family).then((res) => res.json());

  return {
    props: {
      trending: trending.results,
      topRated: topRated.results,
      tvTopRated: tvTopRated.results,
      popular: popular.results,
      documentary: documentary.results,
      comedy: comedy.results,
      history: history.results,
      family: family.results,
      products: products.products.data,
      subscription: subscription.subscription.data,
    },
  };
};

interface HomeProps {
  trending: IMovie[];
  topRated: IMovie[];
  tvTopRated: IMovie[];
  popular: IMovie[];
  documentary: IMovie[];
  comedy: IMovie[];
  history: IMovie[];
  family: IMovie[];
  products: Product[];
  subscription: string[];
}
