import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OptionSelect = ({ list, state, controller, itemTitle, icon, location }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const option = searchParams.get('option') || 'modifiedDate';
  const selectedOption = list.find((row) => row.option === option);
  const OptionName = selectedOption[itemTitle];
  const isMain = location === 'main';

  const handleSelect = (option) => {
    isMain
      ? navigate(`/?option=${option}&majorType=전체`)
      : navigate(`/search?q=${searchParams.get('q')}&option=${option}&majorType=전체`);
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

const SelectedOption = styled.span`
  color: #336af8;
  &#true {
    color: #000;
  }
`;

const Arrows = styled.img`
  position: absolute;
  right: 9px;
  bottom: 12px;
`;

const OptionBox = styled.div`
  z-index: 1;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 12px 9px;
  min-width: 150px;
  position: relative;
  cursor: default;
  &::before {
    content: ${({ icon }) => (icon ? `url(/images/icon_color_${icon}_36.svg)` : "'정렬'")};
    font-size: 15px;
    font-weight: 500;
    padding: 0;
    margin-right: 10px;
  }
  ${({ select }) =>
    !select &&
    `  &:hover {
    background-color: #e7ebf0;
    border-color: #b2bac2;
  }
`}
  &#true {
    width: 180px;
    padding: 7px 9px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;
