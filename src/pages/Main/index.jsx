import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Major from '../../api/Major';
import { versionCheck } from '../../app/versionCheck';
import MainList from '../../components/MainList';
import MajorSearch from '../../components/MajorSearch';
import { MajorModalStyle } from '../../components/ModalStyle';
import { majorList } from '../Search';
import * as Styled from './styled';

const Main = () => {
  const options = [
    {
      name: '최근 올라온 강의',
      lec: 'modifiedDate',
      imgs: 'img/icon_color_fire_36.svg',
    },
    {
      name: '꿀 강의',
      lec: 'lectureHoneyAvg',
      imgs: 'img/icon_color_bee_36.svg',
    },
    {
      name: '만족도가 높은 강의',
      lec: 'lectureSatisfactionAvg',
      imgs: 'img/icon_color_thumbs_36.svg',
    },
    {
      name: '배울게 많은 강의',
      lec: 'lectureLearningAvg',
      imgs: 'img/icon_color_book_36.svg',
    },
    {
      name: 'BEST 강의',
      lec: 'lectureTotalAvg',
      imgs: 'img/icon_color_best_36.svg',
    },
  ];

  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [lecture, setLecture] = useState('modifiedDate');
  const [checkClass, setCheckClass] = useState('전체');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const major = Major();
  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onChangeHandler = (e) => {
    setLecture(e);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length < 2) {
        alert('두 글자 이상 입력해주세요');
      } else {
        navigate(`/search?q=${search}&option=lectureTotalAvg&majorType=전체`);
      }
    }
  };
  useEffect(() => {
    versionCheck(major);
  }, [major]);
  return (
    <div>
      <Styled.Banner>
        <Styled.BannerWrapper>
          <div>
            수위키,
            <br />
            강의평가의 모든 것<Styled.BannerSub>강의평가의 모든 것 수위키</Styled.BannerSub>
          </div>

          <picture>
            <source srcSet="/img/banner.webp" type="image/webp" />
            <source srcSet="/img/banner.svg" type="image/png" />
            <Styled.BannerImg src="img/banner.svg" alt="banner" width={450} height={450} />
          </picture>
        </Styled.BannerWrapper>
      </Styled.Banner>
      <Styled.Container>
        <Styled.SearchWrapper>
          <Styled.SearchTitle>강의평가 검색</Styled.SearchTitle>
          <Styled.SearchInput
            onChange={onChange}
            placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
            onKeyPress={onKeypress}
            onMouseLeave={() => document.activeElement.blur()}
          />
        </Styled.SearchWrapper>
        <Styled.SearchWrapper>
          <Styled.HeadSelection>
            <Styled.FlexWrapper onClick={() => setModalIsOpen(true)}>
              <Styled.SortSelect id="major" defaultValue={checkClass}>
                {majorList.map((index) => (
                  <Styled.StyledOption id="semester" key={index} value={index}>
                    <Styled.Soption id="semester">{checkClass}</Styled.Soption>
                  </Styled.StyledOption>
                ))}
              </Styled.SortSelect>
            </Styled.FlexWrapper>
            <Styled.CustomSelect defaultValue={'modifiedDate'} onChange={onChangeHandler}>
              {options.map((index) => (
                <Styled.StyledOption key={index.name} value={index.lec}>
                  <Styled.Soption>
                    <Styled.Img alt="option-icon" width="22" height="22" src={index.imgs} />{' '}
                    {index.name}
                  </Styled.Soption>
                </Styled.StyledOption>
              ))}
            </Styled.CustomSelect>
          </Styled.HeadSelection>
          <Styled.HeadSelection>
            <MainList lecture={lecture} checkClass={checkClass} />
          </Styled.HeadSelection>
        </Styled.SearchWrapper>
        <Styled.Button
          background="#336af8"
          onClick={() => {
            navigate(`/search?q=&option=lectureTotalAvg&majorType=전체`);
          }}
        >
          더 보러 가기 →
        </Styled.Button>
      </Styled.Container>
      <Modal
        isOpen={modalIsOpen}
        style={MajorModalStyle}
        // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <MajorSearch
          checkClass={checkClass}
          setModalIsOpen={setModalIsOpen}
          setCheckClass={setCheckClass}
        />
      </Modal>
    </div>
  );
};

export default Main;
