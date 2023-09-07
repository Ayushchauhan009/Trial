// src/components/Header.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [nseData, setNseData] = useState({});
  const [bseData, setBseData] = useState({});

  useEffect(() => {
    // Replace with your Angel One SmartAPI credentials
    const apiKey = "7X3HCmUD";
    const apiSecret = "583d8b1b-f2f8-4077-a5ac-768b7e05d6ae";

    // Define the stock symbols for NSE and BSE
    const nseSymbol = "NIFTY";
    const bseSymbol = "BSE";

    // Create a function to fetch real-time data
    const fetchRealTimeData = async () => {
      try {
        // Fetch NSE data
        const nseResponse = await axios.get(
          `https://smartapi.angelbroking.com/rest/quote/${nseSymbol}`,
          {
            headers: {
              "X-ANGEL-API-KEY": apiKey,
              "X-ANGEL-BROKING-SECURITY-TOKE": apiSecret,
            },
          }
        );
        setNseData(nseResponse.data);

        // Fetch BSE data
        const bseResponse = await axios.get(
          `https://smartapi.angelbroking.com/rest/quote/${bseSymbol}`,
          {
            headers: {
              "X-ANGEL-API-KEY": apiKey,
              "X-ANGEL-BROKING-SECURITY-TOKE": apiSecret,
            },
          }
        );
        setBseData(bseResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch real-time data when the component mounts
    fetchRealTimeData();
  }, []);

  return (
    <div className="p-44 h-screen">
      <h1>Stock Market Data</h1>
      <div className="stock-data">
        <div className="stock">
          <h2>NSE</h2>
          <p>Last Price: {nseData.ltp}</p>
          <p>Change: {nseData.netPrice}</p>
        </div>
        <div className="stock">
          <h2>BSE</h2>
          <p>Last Price: {bseData.ltp}</p>
          <p>Change: {bseData.netPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
