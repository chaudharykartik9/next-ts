"use client"
import { FC } from "react";
import { PreinitAs } from "react-dom";

interface primaryButtonProps {
  type: "primary";
  label: string;
}

interface secondaryButtonProps {
  type: "secondary";
  label: string;
}

// type predicate function to check if props are type of primarybuttonProps

type buttonProp = primaryButtonProps | secondaryButtonProps;
function isPrimary(props: buttonProp): props is primaryButtonProps {
  return props.type === "primary";
}

export const secondaryButtonProps = {
  type: "secondary",
  lable: "secondary button",
};
export const primaryButtonProps = {
  type: "primary",
  lable: "primary button",
};

const Button: FC<buttonProp> = (props) => {
  if (isPrimary(props)) {
    return (
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          border: "1px solid red ",
          borderRadius: "10px",
        }}
      >
        {props.label}
      </button>
    );
  } else {
    return (
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          border: "1px solid green ",
          borderRadius: "10px",
        }}
      >
        {props.label}
      </button>

    );
  }
};

export default Button;
