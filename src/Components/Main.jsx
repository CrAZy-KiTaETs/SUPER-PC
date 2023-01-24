import Left_column from "./Main components/Left_column";
import Center_column from "./Main components/Center_column";
import Right_column from "./Main components/Right_column";
import Bottom_column from "./Main components/Botom_column/Bottom_column";
import { useState } from "react";

function Main({ setActive, setActive2, setActive3 }) {
  const [cpu, setCpu] = useState({ name: "", cost: 0 });
  const [cpuCooler, setCpuCooler] = useState({ name: "", cost: 0 });
  const [motherboard, setMotherboard] = useState({ name: "", cost: 0 });
  const [ram, setRam] = useState({ name: "", cost: 0 });
  const [gpu, setGpu] = useState({ name: "", cost: 0 });
  const [pu, setPu] = useState({ name: "", cost: 0 });
  const [hard, setHard] = useState({ name: "", cost: 0 });
  const [frame, setFrame] = useState({ name: "", cost: 0 });
  const [cooler, setCooler] = useState({ name: "", cost: 0 });
  const cpuData = (info) => {
    setCpu(info);
  };

  const cooler_models = (info) => {
    setCpuCooler(info);
  };

  const motherData = (info) => {
    setMotherboard(info);
  };

  const ramData = (info) => {
    setRam(info);
  };

  function gpuData(info) {
    setGpu(info);
  }

  function puData(info) {
    setPu(info);
  }

  function hardData(info) {
    setHard(info);
  }

  function frameData(info) {
    setFrame(info);
  }

  function coolerData(info) {
    setCooler(info);
  }

  const [isActive, setIsActive] = useState(false);

  const [samal, setS] = useState();

  return (
    <main>
      <article class="main">
        <Left_column
          cpu={cpu}
          cpuCooler={cpuCooler}
          motherboard={motherboard}
          ram={ram}
          gpu={gpu}
          pu={pu}
          hard={hard}
          frame={frame}
          cooler={cooler}
          samal={samal}
          setSamal={setS}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <Center_column
          cpuData={cpuData}
          cooler_models={cooler_models}
          motherData={motherData}
          ramData={ramData}
          gpuData={gpuData}
          puData={puData}
          hardData={hardData}
          frameData={frameData}
          coolerData={coolerData}
        />
        <Right_column
          cpu={cpu}
          cpuCooler={cpuCooler}
          motherboard={motherboard}
          ram={ram}
          gpu={gpu}
          pu={pu}
          hard={hard}
          frame={frame}
          cooler={cooler}
          setActive={setActive}
          setActive2={setActive2}
          setActive3={setActive3}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </article>
      <Bottom_column />
    </main>
  );
}

export default Main;
