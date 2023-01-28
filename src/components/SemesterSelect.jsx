import { OptionBox, SelectedOption, Arrows, Options, Option } from 'styles/Common';

const SemesterSelect = ({ state, controller, list, selected, setSelect }) => {
  return (
    <OptionBox
      id="semester"
      select={state}
      onClick={(e) => {
        e.stopPropagation;
        controller(!state);
      }}
    >
      <SelectedOption id="true">{selected}</SelectedOption>
      <Arrows src={`/images/icon_${state ? 'up' : 'down'}_arrow_solid_24.svg`} />
      {state && (
        <Options id="semester">
          {list.map((semester) => {
            return (
              <Option
                id={selected === semester ? 'selected' : undefined}
                key={semester}
                onClick={() => setSelect(semester)}
              >
                {semester}
              </Option>
            );
          })}
        </Options>
      )}
    </OptionBox>
  );
};

export default SemesterSelect;
