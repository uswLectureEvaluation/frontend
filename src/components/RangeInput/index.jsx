import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
  } from "react";
  import "./styled.css";
  
  const RangeInput = ({
    min = 0,
    max = 5,
    step = 0.5,
    defaultValue = 0,
    onChange = () => {}
  }) => {
    const inputRef = useRef();
    const [isChanging, setIsChanging] = useState(false);
  
    const getPercent = useMemo(
      () => (value) => ((value - min) / (max - min)) * 100,
      [max, min]
    );
  
    const changeInputProgressPercentStyle = useCallback(() => {
      inputRef.current.style.setProperty(
        "--webkitProgressPercent",
        `${getPercent(inputRef.current.value)}%`
      );
    }, [getPercent]);
  
    useEffect(() => {
      changeInputProgressPercentStyle();
      const inputElement = inputRef.current;
  
      const handleUpAndLeave = () => setIsChanging(false);
      const handleDown = () => setIsChanging(true);
  
      inputElement.addEventListener("mousemove", changeInputProgressPercentStyle);
      inputElement.addEventListener("mousedown", handleDown);
      inputElement.addEventListener("mouseup", handleUpAndLeave);
      inputElement.addEventListener("mouseleave", handleUpAndLeave);
      return () => {
        inputElement.removeEventListener(
          "mousemove",
          changeInputProgressPercentStyle
        );
        inputElement.removeEventListener("mousedown", handleDown);
        inputElement.removeEventListener("mouseup", handleUpAndLeave);
        inputElement.removeEventListener("mouseleave", handleUpAndLeave);
      };
    }, [isChanging, changeInputProgressPercentStyle]);
  
    useEffect(() => {
      if (!inputRef?.current) return;
      changeInputProgressPercentStyle();
    }, [inputRef, changeInputProgressPercentStyle]);
  
    return (
      <>
        <input
          className="range"
          type="range"
          ref={inputRef}
          min={min}
          max={max}
          step={step}
          value={defaultValue}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </>
    );
  };
  
  export default RangeInput;
  