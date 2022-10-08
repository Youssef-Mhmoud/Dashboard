import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts/src";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const {currentMode} = useStateContext()

  const darkMode = currentMode === 'Dark' ? "#33373E" : "#fff"
  
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      legendSettings={{background: 'white', color: '#fff'}}
      background= {darkMode}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, i) =>
          <SeriesDirective key={i} {...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
