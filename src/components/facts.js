import React from "react";
import { useState, useEffect } from "react";
import { factUrl } from "../settings";

const Facts = () => {
  const [fact, setFact] = useState([]);

  useEffect(() => {
    const getFact = async () => {
      const fact = await fetchFact();
      setFact(fact);
    };
    getFact();
  }, []);

  const fetchFact = async () => {
    const res = await fetch(factUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  };
  return (
    <div className="border">
      <h2>fact: {fact.fact}</h2>
    </div>
  );
};

export default Facts;