import React from 'react';
import PropTypes from 'prop-types';
import './Cryptocurrency.css';

class Cryptocurrency extends React.Component {
  render() {
    var {
      id, name, symbol, price_usd,
      percent_change_1h, percent_change_24h, percent_change_7d
    } = this.props.data;

    return (
      <li className={"cryptocurrency " + id}>
        <p className="cryptocurrency-name">{name} ({symbol})</p>
        <h1>${ (+price_usd).toFixed(2) }</h1>
        <p>{percent_change_1h}%</p>
        <p>{percent_change_24h}% 24hrs</p>
        <p>{percent_change_7d}% 7 days</p>
      </li>
    );
  }
}

Cryptocurrency.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price_usd: PropTypes.string.isRequired,
    percent_change_1h: PropTypes.string.isRequired,
    percent_change_24h: PropTypes.string.isRequired,
    percent_change_7d: PropTypes.string.isRequired
  })
};

export default Cryptocurrency;