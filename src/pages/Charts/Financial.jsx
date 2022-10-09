import React from "react";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  HiloSeries, Category, Tooltip, DateTime, Zoom, Logarithmic,
  Crosshair
} from '@syncfusion/ej2-react-charts';
import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,

  financialChartData,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const date1 = new Date('2017, 1, 1');

// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 bg-white dark:bg-secondary-dark-bg p-10 rounded-3xl">
      <Header category="Financial" title="AAPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          height="420px"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{enable: true, lineType: 'Vertical', line: {width: 0}}}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject services={[Zoom, DateTime, HiloSeries, Tooltip, Category, Crosshair, Logarithmic]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              name="Apple Inc"
              xName="x"
              yName="low"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
