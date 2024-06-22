import React from "react";
import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is service number: {id}</h1>
    </div>
  );
};

export default ServicePage;
