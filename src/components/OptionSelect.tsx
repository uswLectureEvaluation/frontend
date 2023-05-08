import { useNavigate, useSearchParams } from 'react-router-dom';
import { Arrows, Option, OptionBox, Options, SelectedOption } from 'styles/Common';
import { SortOption } from 'types/common';

interface OptionSelectProps {
  list: SortOption[];
  state: boolean;
  controller: (state: boolean) => void;
  itemTitle: keyof SortOption;
  icon?: boolean;
  location: string;
}

const OptionSelect = ({
  list,
  state,
  controller,
  itemTitle,
  icon = true,
  location,
}: OptionSelectProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('q');
  const option = searchParams.get('option') || 'modifiedDate';
  const majorType = searchParams.get('majorType') || '전체';
  const selectedOption = list.find((row) => row.option === option) as SortOption;
  const OptionName = selectedOption[itemTitle];
  const isMain = location === 'main';

  const handleSelect = (option: string) => {
    isMain
      ? navigate(`/?option=${option}&majorType=${majorType}`)
      : navigate(`/search?q=${searchValue}&option=${option}&majorType=${majorType}`);
  };

  return (
    <OptionBox
      id={String(isMain)}
      select={state}
      icon={icon ? selectedOption?.icon : undefined}
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
