/*  Package imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';

/*  Local imports */
import { Container } from './styles';

const Paging = props => {
  const { paging, currentPage, handleChangePage } = props;

  return (
    <Container>
      <button
        type="button"
        title="First Page"
        onClick={() => handleChangePage(paging.first)}
        disabled={!paging.previous}
      >
        <FaAngleDoubleLeft />
      </button>

      <button
        type="button"
        title="Previous Page"
        onClick={() => handleChangePage(paging.previous)}
        disabled={!paging.previous}
      >
        <FaAngleLeft />
      </button>

      <div>
        <div title="First Page Number">
          <span>
            First <br />
            {paging.first}
          </span>
        </div>
        <div title="Current Page Number">
          <strong>
            <span>
              Current <br />
              {currentPage}
            </span>
          </strong>
        </div>
        <div title="Last Page Number">
          <span>
            Last <br />
            {paging.last}
          </span>
        </div>
      </div>

      <button
        type="button"
        title="Next Page"
        onClick={() => handleChangePage(paging.next)}
        disabled={!paging.next}
      >
        <FaAngleRight />
      </button>

      <button
        type="button"
        title="Last Page"
        onClick={() => handleChangePage(paging.last)}
        disabled={!paging.next}
      >
        <FaAngleDoubleRight />
      </button>
    </Container>
  );
};

Paging.propTypes = {
  paging: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
  }).isRequired,
  currentPage: PropTypes.string.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

export default Paging;
