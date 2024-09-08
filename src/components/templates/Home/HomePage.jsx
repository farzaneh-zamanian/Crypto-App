import React, { useEffect, useState } from "react";
import { api, API_KEY } from "../../../services/config";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    api
      .get("/coins/list", {
        params: {
          x_cg_demo_api_key: API_KEY,
        },
      })
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {coins.map((coin) => (
        <div key={coin.id}>{coin.name}</div>
      ))}
    </div>
  );
}

export default HomePage;
