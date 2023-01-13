import { useSearchParams } from 'react-router-dom';
import { Arrows, OptionBox, SelectedOption, SelectedOption_M } from '../styles/Common';
import Modal from 'react-modal';
import { useState } from 'react';
import { MajorModalStyle } from './Etc/ModalStyle';
import MajorSearch from './MajorSearch';
import { subStr } from '../utils/subString';

const MajorSelect = () => {
  const [searchParams] = useSearchParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const majorType = searchParams.get('majorType') || '전체';

  return (
    <>
      <OptionBox id="major" onClick={() => setModalIsOpen(true)}>
        <SelectedOption id="major">{majorType}</SelectedOption>
        <SelectedOption_M>{subStr(majorType, 3)}</SelectedOption_M>
        <Arrows
          id="major"
          alt="arrow"
          src={`/images/icon_${modalIsOpen ? 'up' : 'down'}_arrow_solid_24.svg`}
        />
      </OptionBox>
      <Modal
        isOpen={modalIsOpen}
        style={MajorModalStyle}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <MajorSearch setModalIsOpen={setModalIsOpen} />
      </Modal>
    </>
  );
};

export default MajorSelect;
