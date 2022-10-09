import React from "react";
import {
  pieChartData
} from "../../data/dummy";

import { Header } from "../../components";
import PieChart from "../../components/Charts/PieChart";

const Pie = () => {

  return (
    <div className="m-4 md:m-10 mt-24 bg-white dark:bg-secondary-dark-bg p-10 rounded-3xl">
      <Header category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full"/>
      </div>
    
    </div>
  );
};

export default Pie;
