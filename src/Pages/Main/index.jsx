import React, { useState } from 'react';
import MainList from '../../components/MainList';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { majorTypeApi } from '../../api/Api';
import Modal from 'react-modal';
import {MajorModalStyle} from '../../components/ModalStyle';
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
  const [lecture, setLecture] = useState('lectureHoneyAvg');
  const [checkClass, setCheckClass] = useState('전체');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMajor, setSelectedMajor] = useState('');

  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onChangeHandler = (e) => {
    setLecture(e);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search`, {
        state: {
          search_value: search,
          search_option: lecture,
        },
      });
    }
  };
  if (window.localStorage.getItem('majorType') === null) {
    majorTypeApi().then((data) => window.localStorage.setItem('majorType', data.data));
  }
  return (
    <>
      <Styled.Banner>
        <Styled.BannerWrapper>
          <div>
            수위키,
            <br />
            수원대 강의평가의 모든 것
            <Styled.BannerSub>수원대 강의평가의 모든 것 수위키</Styled.BannerSub>
          </div>
          <Styled.BannerImg src="img/banner.svg" />
        </Styled.BannerWrapper>
      </Styled.Banner>
      <Styled.Container>
        <Styled.SearchWrapper>
          <Styled.SearchTitle>강의평가 검색</Styled.SearchTitle>
          <Styled.SearchInput
            onChange={onChange}
            placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
            onKeyPress={onKeypress}
          />
        </Styled.SearchWrapper>
        <Styled.SearchWrapper>
          <Styled.HeadSelection>
          <Styled.FlexWrapper onClick={()=>setModalIsOpen(true)}>
          <Styled.SortSelect id="major" defaultValue={'lectureHoneyAvg'} onChange={onChangeHandler}>
            {options.map((index) => (
              <Styled.StyledOption id="semester" key={checkClass} value={index.lec}>
                <Styled.Soption id="semester">{checkClass}</Styled.Soption>
              </Styled.StyledOption>
            ))}
          </Styled.SortSelect>
        </Styled.FlexWrapper>
            <Styled.CustomSelect defaultValue={'lectureHoneyAvg'} onChange={onChangeHandler}>
              {options.map((index) => (
                <Styled.StyledOption key={index.name} value={index.lec}>
                  <Styled.Soption>
                    <Styled.Img loading="lazy" width="22" src={index.imgs} /> {index.name}
                  </Styled.Soption>
                </Styled.StyledOption>
              ))}
            </Styled.CustomSelect>
          </Styled.HeadSelection>
          <Styled.HeadSelection>
            <MainList lecture={lecture} />
          </Styled.HeadSelection>
        </Styled.SearchWrapper>
        <Styled.Button
          background="#346cfd"
          onClick={() =>
            navigate(`/search`, {
              state: {
                search_value: 'all',
                search_option: lecture,
              },
            })
          }
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
          <MajorSearch setModalIsOpen={setModalIsOpen} setSelectedMajor={setSelectedMajor} setCheckClass={setCheckClass} selectedMajor={selectedMajor} />
        </Modal>
    </>
  );
};

export default Main;
