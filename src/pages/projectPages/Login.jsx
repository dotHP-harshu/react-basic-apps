import React from "react";
import Header from "../../components/navbar/Header";
import ProjectContainer from "../../components/projectpage/ProjectContainer";
import data from "../../../data/login.json";

function Login() {
  return (
    <div className=" w-full mt-auto py-20">
      <Header />
      <ProjectContainer
        title={data.title}
        src={"/media/videos/login.mp4"}
        aboutPara={data.description}
        conceptArray={data.concepts}
        featureArray={data.features}
        ImprovementArray={data.improvements}
      />
    </div>
  );
}

export default Login;
