import React from "react";
import { pieChartData } from "../../data/dummy";
import { Header } from "../../components";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2/base";
const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <AccumulationChartComponent
        id="pie-chart"
        title="Browser Market Share"
        legendSettings={{ visible: false }}
        enableSmartLabels={true}
        enableAnimation={false}
        center={{ x: "50%", y: "50%" }}
        enableBorderOnMouseMove={false}
        tooltip={{
          enable: true,
          format: "<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>",
          header: "",
        }}>
        <Inject
          services={[
            AccumulationLegend,
            PieSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            name="Browser"
            xName="x"
            yName="y"
            explode={true}
            explodeOffset="10%"
            explodeIndex={0}
            startAngle={Browser.isDevice ? 55 : 35}
            dataLabel={{
              visible: true,
              position: "Outside",
              name: "text",
              font: { fontWeight: "600" },
              connectorStyle: { length: "20px", type: "Curve" },
            }}
            radius={Browser.isDevice ? "40%" : "70%"}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  </div>
);

export default Pie;
