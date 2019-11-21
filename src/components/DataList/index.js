/*  Package imports */
import React from 'react';
import PropTypes from 'prop-types';
import { FaClock, FaUserCircle, FaGlobe } from 'react-icons/fa';

/*  Local imports */
import { List } from './styles';

const DataList = props => {
  const { data } = props;

  return (
    <List>
      {data.map(item => (
        <a
          key={String(item.id)}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <img src={item.image} alt={item.name} />
            <div>
              <strong>
                <h3>{item.name}</h3>
              </strong>
              <div>
                <span>
                  <FaUserCircle /> {item.username}
                </span>
                <span>
                  <FaClock /> {item.duration}
                </span>
                {item.language && (
                  <span>
                    <FaGlobe /> {item.language}
                  </span>
                )}
              </div>
              <p>
                {item.description && item.description.substring(0, 310)} ...
              </p>
            </div>
          </li>
        </a>
      ))}
    </List>
  );
};

DataList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      username: PropTypes.string,
      image: PropTypes.string,
      duration: PropTypes.string,
      language: PropTypes.string,
    })
  ).isRequired,
};

export default DataList;
