import React, { useRef, useState } from "react";
import Input from "../generic/Input";
import "./Slider.scss";
import { theme } from "../../Model/Default";
interface SliderProp {
  initialValue: number;
  type?: theme;
}

const Slider = (props: SliderProp) => {
  const [sliderValue, setSliderValue] = useState<number>(props?.initialValue);
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const { type } = props;
  const getBackgroundColor = (val: string) => {
    return `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${val}%, #fff ${val}%, white 100%)`;
  };

  const changeHandler = (e: React.ChangeEvent<HTMLElement>) => {
    if (sliderRef?.current) {
      sliderRef.current.style.background = getBackgroundColor(
        sliderRef?.current.value
      );
    }
  };
  return (
    <>
      <Input
        ref={sliderRef}
        onchangeHandler={changeHandler}
        value={sliderValue}
        type={"range"}
        label={"Slide me"}
        labelPosition={"below"}
        className={`c-slider ${type}`}
        debounceTime={0}
      />
    </>
  );
};

export default Slider;
