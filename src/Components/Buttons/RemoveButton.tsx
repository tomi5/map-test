import React from "react";

type RemoveButtonProps = {
  onClick: any;
};

const RemoveButton = ({ ...props }: RemoveButtonProps) => {
  return <button {...props}>Delete</button>;
};

export default RemoveButton;
