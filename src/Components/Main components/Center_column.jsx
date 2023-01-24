import { useState } from "react";
import Custom_select from "../UI/Custom-select.scss";
import Cooler from "./Center column components/Cooler/Cooler";
import Cpu_cooler from "./Center column components/Cpu coller/Cpu_Cooler";
import Cpu from "./Center column components/Cpu/Cpu";
import Frame from "./Center column components/Frame/Frame";
import Gpu from "./Center column components/Gpu/Gpu";
import Hard_drive from "./Center column components/Hdd/Hard_drive";
import Motherboard from "./Center column components/Motherboard/Motherboard";
import Pu from "./Center column components/Pu/Pu";
import Ram from "./Center column components/Ram/Ram";

function Center_column({
  cpuData,
  cooler_models,
  motherData,
  ramData,
  gpuData,
  puData,
  hardData,
  frameData,
  coolerData,
}) {
  return (
    <section class="accessories">
      <ul>
        <Cpu cpuData={cpuData} />
        <Cpu_cooler cooler_models={cooler_models} />
        <Motherboard motherData={motherData} />
        <Ram ramData={ramData} />
        <Gpu gpuData={gpuData} />
        <Pu puData={puData} />
        <Hard_drive hardData={hardData} />
        <Frame frameData={frameData} />
        <Cooler coolerData={coolerData} />
      </ul>
    </section>
  );
}

export default Center_column;
