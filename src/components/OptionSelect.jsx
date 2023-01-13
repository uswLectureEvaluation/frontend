import styled from '@emotion/styled';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const detail = [
  { sub: '날짜', name: '최근 올라온 강의', option: 'modifiedDate', icon: 'fire' },
  { sub: '꿀강', name: '꿀 강의', option: 'lectureHoneyAvg', icon: 'bee' },
  { sub: '만족도', name: '만족도가 높은 강의', option: 'lectureSatisfactionAvg', icon: 'thumbs' },
  { sub: '배움', name: '배울게 많은 강의', option: 'lectureLearningAvg', icon: 'book' },
  { sub: '종합', name: 'BEST 강의', option: 'lectureTotalAvg', icon: 'best' },
];

const OptionSelect = ({ select, onSelect }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const isMain = pathname === '/';
  const option = searchParams.get('option') || 'modifiedDate';
  const selectedOption = detail.find((row) => row.option === option);
  const OptionName = isMain ? selectedOption.name : selectedOption.sub;
  const handleSelect = (e) => {
    isMain
      ? navigate(`/?option=${e}&majorType=전체`)
      : navigate(`/search?q=${searchParams.get('q')}&option=${e}&majorType=전체`);
  };

  return (
    <OptionBox
      id={String(isMain)}
      select={select}
      icon={isMain ? selectedOption.icon : undefined}
      onClick={(e) => {
        e.stopPropagation;
        onSelect(!select);
      }}
    >
      <SelectedOption id={String(isMain)}>{OptionName}</SelectedOption>
      <Arrows src={`/images/icon_${select ? 'up' : 'down'}_arrow_solid_24.svg`} />
      {select && (
        <Options>
          {detail.map((option) => {
            return (
              <Option
                className={String(isMain)}
                id={option[isMain ? 'name' : 'sub'] === OptionName ? 'selected' : undefined}
                key={option.name}
                onClick={() => handleSelect(option.option)}
              >
                {isMain ? (
                  <img
                    alt={option.icon}
                    src={`/images/icon_color_${option.icon}_36.svg`}
                    style={{ marginRight: '10px' }}
                  />
                ) : null}
                {isMain ? option.name : option.sub}
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
    padding: 7px 10px;
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
    padding: 6px 9px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;
