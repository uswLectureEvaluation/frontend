import { useState } from 'react';
import { OptionBox, SelectedOption, Arrows, Options, Option } from 'styles/ommon';

const SemesterSelect = ({ list, selected, setSelect }) => {
  const [modal, setModal] = useState(false);
  return (
    <OptionBox
      id="semester"
      select={modal}
      onClick={(e) => {
        e.stopPropagation;
        setModal(!modal);
      }}
    >
      <SelectedOption id="true">{selected}</SelectedOption>
      <Arrows src={`/images/icon_${modal ? 'up' : 'down'}_arrow_solid_24.svg`} />
      {modal && (
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
