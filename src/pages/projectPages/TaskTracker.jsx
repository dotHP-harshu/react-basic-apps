import React from "react";
import Header from "../../components/navbar/Header";
import ProjectContainer from "../../components/projectpage/ProjectContainer";
import data from "../../../data/taskTracker.json";

function TaskTracker() {
  return (
    <div className=" w-full mt-auto py-20">
      <Header />
      <ProjectContainer
        title={data.title}
        src={"/media/videos/task_tracker.mp4"}
        aboutPara={data.description}
        conceptArray={data.concepts}
        featureArray={data.features}
        ImprovementArray={data.improvements}
      />
    </div>
  );
}

export default TaskTracker;
