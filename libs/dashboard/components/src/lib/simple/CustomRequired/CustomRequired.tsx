import { ReactElement } from "react";

interface ICustomRequired {
  children?: ReactElement | JSX.Element | JSX.Element[];
  requiredCondition?: boolean;
  value?: any;
  justforTest?: boolean;
}

export const CustomRequired: React.FC<ICustomRequired> = ({
  children,
  requiredCondition,
  value,
  justforTest = false,
}) => (
  <>
    <div
      style={{
        position: "relative",
        //   boxShadow:
        //     'rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px',
        // border: "none",

        borderRadius: "10px",
        // outline: "none",
      }}
    >
      <input
        type="text"
        required={requiredCondition}
        tabIndex={-1}
        style={{
          width: "-webkit-fill-available",
          height: "-webkit-fill-available",
          position: "absolute",
          margin: "2px",
          paddingTop: "22px",
          paddingLeft: "46px",
          outline: "none",
          color: "transparent",
          border: "none",
        }}
        onChange={() => null}
        value={value}
      ></input>
      {children}
    </div>
    {justforTest === true &&value!==""&& <h2>required</h2>}
  </>
);

export default CustomRequired;
