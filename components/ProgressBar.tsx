import React from "react";

type Props = {
  width: string;
};
const ProgressBar = ({ width }: Props) => {
  return (
    <div className="bg-slate-800 progress-bar-wrapper">
      <div style={{ width }} className="progress-bar" />
    </div>
  );
};

export default ProgressBar;
