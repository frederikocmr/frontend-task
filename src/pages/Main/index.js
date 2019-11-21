/*  Package imports */
import React, { useState, useEffect } from 'react';
import { FaVimeo, FaCircleNotch } from 'react-icons/fa';

/*  Local imports */
import api from '../../services/api';
import dataFilter from '../../utils/dataFilter';
import { DataList, Paging } from '../../components';

/*  Styles imports */
import { Container, Header, Loading } from './styles';

export default function Main() {
  const [videos, setVideos] = useState([]);
  const [paging, setPaging] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  /**
   * Handles the change page withing the paging component
   * It can change to the next, previous, last and first pages.
   *
   * @param {string} page
   */
  const handleChangePage = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    /**
     *  Function responsible for the API call and to map the data before setting
     *  it to the state, it's a dependency of useEffect so it has been declared here.
     *
     */
    const fetchVideos = async () => {
      setLoading(true);

      const { data } = await api.get(`/videos`, {
        params: {
          page: currentPage,
          per_page: 10,
        },
      });

      const pagingData = dataFilter.getPaging(data.paging);

      const dataArray = data.data.map(item => {
        return {
          id: item.resource_key,
          name: item.name,
          description: item.description,
          link: item.link,
          duration: dataFilter.getDuration(item.duration),
          language: dataFilter.getLanguage(item.language),
          username: dataFilter.getUsername(item.user),
          image: dataFilter.getImageUrl(item.pictures),
        };
      });

      setPaging(pagingData);
      setVideos(dataArray);
      setLoading(false);

      window.scrollTo(0, 0);
    };

    fetchVideos();
  }, [currentPage]);

  return (
    <Container>
      <Header>
        <FaVimeo /> <h1>The Best Videos of the Month</h1>
      </Header>

      <DataList data={videos} />

      {!loading ? (
        <Paging
          currentPage={currentPage}
          paging={paging}
          handleChangePage={handleChangePage}
        />
      ) : (
        <Loading>
          <FaCircleNotch />
        </Loading>
      )}
    </Container>
  );
}
