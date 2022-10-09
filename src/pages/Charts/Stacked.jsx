import React from "react";
import { Header, Stacked } from "../../components";

const Pyramid = () => {


  return (
    <div className="m-4 md:m-10 mt-24 bg-white dark:bg-secondary-dark-bg p-10 rounded-3xl">
      <Header category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <Stacked />
      </div>
    </div>
  );
};

export default Pyramid;
