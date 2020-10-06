import React, { useState, useEffect } from "react";
import axios from "axios";

export const Carrier = () => {
  const [carriers, setCarriers] = useState();
  const [nextCarrierId, setNextCarrier] = useState(0);
  const [newCarrierLabel, setNewCarrier] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/carriers")
    .then(({data})=> {
      setCarriers(data)
      setNextCarrier(data.length)
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }, []);

  const addCarrier = () => {
    setCarriers([
      ...carriers,
      {
        id: nextCarrierId,
        label: newCarrierLabel,
        done: false
      }
    ]);
    setNextCarrier(nextCarrierId + 1);
    setNewCarrier("");
  };

  return carriers ? (
    <div className="carrier-list">
        carriers
    </div>
  ):(<div>..loading</div>);
};