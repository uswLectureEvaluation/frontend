import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Arrows, OptionBox, SelectedOption } from '../styles/Common';

const OptionSelect = ({ list, state, controller, itemTitle, icon, location }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('q');
  const option = searchParams.get('option') || 'modifiedDate';
  const majorType = searchParams.get('majorType') || '전체';
  const selectedOption = list.find((row) => row.option === option);
  const OptionName = selectedOption[itemTitle];
  const isMain = location === 'main';

  const handleSelect = (option) => {
    isMain
      ? navigate(`/?option=${option}&majorType=${majorType}`)
      : navigate(`/search?q=${searchValue}&option=${option}&majorType=${majorType}`);
  };

  return (
    <OptionBox
      id={String(isMain)}
      select={state}
      icon={icon ? selectedOption.icon : undefined}
      onClick={(e) => {
        e.stopPropagation;
        controller(!state);
      }}
    >
      <SelectedOption id={String(isMain)}>{OptionName}</SelectedOption>
      <Arrows src={`/images/icon_${state ? 'up' : 'down'}_arrow_solid_24.svg`} />
      {state && (
        <Options>
          {list.map((option) => {
            return (
              <Option
                className={String(isMain)}
                id={option[itemTitle] === OptionName ? 'selected' : undefined}
                key={option.name}
                onClick={() => handleSelect(option.option)}
              >
                {isMain ? (
                  <img
                    loading="lazy"
                    alt={option.icon}
                    src={`/images/icon_color_${option.icon}_36.svg`}
                    style={{ marginRight: '10px' }}
                  />
                ) : null}
                {option[itemTitle]}
              </Option>
            );
          })}
        </Options>
      )}
    </OptionBox>
  );
};

export default OptionSelect;

const Options = styled.ul`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px;
  min-width: 150px;
  cursor: default;
`;

const Option = styled.li`
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  &.true {
    padding: 8px 10px;
  }
  &:hover {
    background-color: #e7ebf0;
  }
  &#selected {
    background-color: #daecff;
  }
`;
