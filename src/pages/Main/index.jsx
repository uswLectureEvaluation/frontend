import { useEffect, useState } from 'react';
import MainList from '../../components/MainList';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { majorTypeApi, versionApi } from '../../api/Api';
import Modal from 'react-modal';
import { MajorModalStyle } from '../../components/ModalStyle';
import MajorSearch from '../../components/MajorSearch';

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

  let navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [lecture, setLecture] = useState('modifiedDate');
  const [checkClass, setCheckClass] = useState('전체');
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    if (!window.localStorage.getItem('version') || !window.localStorage.getItem('majorType')) {
      versionApi().then((res) => {
        // console.log('버전없어서 세팅');
        window.localStorage.setItem('version', res.version.toFixed(1));
      });
      majorTypeApi().then((res) => {
        // console.log('전공없어서 세팅');
        window.localStorage.setItem('majorType', ['전체', res.data]);
      });
      window.sessionStorage.setItem('version-check', true);
      // console.log('버전 체크 완료');
    } else if (!window.sessionStorage.getItem('version-check')) {
      versionApi().then((res) => {
        if (window.localStorage.getItem('version') !== res.version.toFixed(1)) {
          // console.log('버전 다름');
          window.localStorage.setItem('version', res.version.toFixed(1));
          // console.log('버전 최신화');
          majorTypeApi().then((res) => {
            window.localStorage.setItem('majorType', ['전체', res.data]);
            // console.log('전공 최신화');
          });
        }
        window.sessionStorage.setItem('version-check', true);
        // console.log('버전 체크 완료');
      });
    }
  }, []);
  return (
    <>
      <Styled.Banner>
        <Styled.BannerWrapper>
          <div>
            수위키,
            <br />
            강의평가의 모든 것<Styled.BannerSub>강의평가의 모든 것 수위키</Styled.BannerSub>
          </div>
          <Styled.BannerImg src="img/banner.svg" alt="banner" width={450} height={450} />
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
              <Styled.SortSelect
                id="major"
                defaultValue={'lectureHoneyAvg'}
                onChange={onChangeHandler}
              >
                {options.map((index) => (
                  <Styled.StyledOption id="semester" key={index.name} value={index.lec}>
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
    </>
  );
};

export default Main;
