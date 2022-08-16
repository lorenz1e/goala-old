import React from "react";

export default function GoalsInfo(toggleInfo) {

  console.log(toggleInfo)
  if (!toggleInfo) return null;

  return <h1>no goals in here</h1>;
}
