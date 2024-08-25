import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PercentChange from './PercentChange';
import TableFilters from './TableFilters';

const HeaderInfos = () => {
    const [headerData, setheaderData] = useState([]);
 
    useEffect(() => {
      axios
        .get("https://api.coingecko.com/api/v3/global")
        .then((res) => setheaderData(res.data.data));
    }, [])

    return (
        <div className="header-container">
           <ul className="title">
            <li>
                <h1><img src="./assets/logo.png" alt="logo" /> Watch Tower</h1>
            </li>
            <li>
                Crypto-monnaies : {headerData.active_cryptocurrencies && headerData.active_cryptocurrencies}
            </li>
            <li>
                Marchés : {headerData.markets && headerData.markets}
            </li>
           </ul>
           <ul className="infos-mkt">
            <li className="global-mkt">
                Global Market Cap : <PercentChange percent={headerData.
market_cap_change_percentage_24h_usd} />
            </li>
            <li>BTC dominance : {headerData.market_cap_percentage && headerData.market_cap_percentage.btc + "%" } </li> 
            <li>ETH dominance : {headerData.market_cap_percentage && headerData.market_cap_percentage.eth + "%" } </li> 
           </ul>
           <TableFilters />
        </div>
    );
};

export default HeaderInfos;