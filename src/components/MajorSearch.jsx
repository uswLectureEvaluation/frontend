import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as styles from '@mui/material/styles';
import Major from '../api/Major';
import { searchFavorite, type } from '../api/etc';
import { useRecoilState } from 'recoil';
import { tokenState } from '../app/recoilStore';
import { TextField } from '@material-ui/core';

const MajorSearch = (props) => {
  const major = Major();
  const [token, setToken] = useRecoilState(tokenState);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [all, setAll] = useState(true);
  const [db, setData] = useState([]);
  const [searchMajor, setSearchMajor] = useState('');
  const [favoriteDb, setFavoriteDb] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState('');
  const majorChange = (e) => {
    setSelectedMajor(e.target.value);
  };

  let searchValue = searchParams.get('q');
  let majorType = searchParams.get('majorType');
  let option = searchParams.get('option');
  let defaultMajor = location.pathname === '/search' ? majorType : props.checkClass;

  useEffect(() => {
    if (localStorage.getItem('login') != null || sessionStorage.getItem('login') != null)
      searchFavorite(token, setToken).then((data) => setFavoriteDb(data.data));
  }, [token, setToken]);

  const onFavoriteMajor = (e) => {
    if (localStorage.getItem('login') != null || sessionStorage.getItem('login') != null) {
      setSelectedMajor(e.target.alt);
      if (!favoriteDb.includes(e.target.alt)) {
        major.favoriting(e.target.alt);
        setFavoriteDb(favoriteDb.concat([e.target.alt]));
      } else {
        major.unfavoriting(e.target.alt);
        setFavoriteDb(favoriteDb.filter((v) => v !== e.target.alt));
      }
    } else {
      alert('로그인 후 이용해주세요');
      navigate('/login');
    }
  };

  useEffect(() => {
    if (!window.localStorage.getItem('majorType')) {
      type(token, setToken).then((res) => {
        window.localStorage.setItem('majorType', ['전체', res.data]);
        setData(['전체', ...res.data]);
      });
    } else setData(window.localStorage.getItem('majorType').split(','));
  }, [token, setToken]);

  const clickSubmit = () => {
    if (selectedMajor !== '') {
      if (location.pathname === '/search') {
        navigate(`/search?q=${searchValue}&option=${option}&majorType=${selectedMajor}`);
      } else {
        props.setCheckClass(selectedMajor);
      }
    }
    props.setModalIsOpen(false);
  };

  return (
    <ModalWrapper>
      <TitleWrapper>
        <Title>개설학과 검색</Title>
        <Title onClick={() => props.setModalIsOpen(false)}>X</Title>
      </TitleWrapper>
      <TitleLine />
      <InputWrapper>
        <CssTextField
          placeholder="개설학과를 검색하세요."
          value={searchMajor}
          onChange={(e) => setSearchMajor(e.target.value)}
        />
      </InputWrapper>
      <TabWrapper>
        <TabMenu id={all ? 'selected' : null} onClick={() => setAll(true)}>
          전체
        </TabMenu>
        <TabMenu id={all ? null : 'selected'} onClick={() => setAll(false)}>
          즐겨찾기
        </TabMenu>
      </TabWrapper>
      <MajorBox>
        {all ? (
          <form onChange={majorChange}>
            {db
              .filter((v) => {
                return searchMajor === '' ? v : v.includes(searchMajor) ? v : null;
              })
              .map((v, i) => {
                return (
                  <label key={i}>
                    <FormCheckLeft
                      name="majorType"
                      id="easy"
                      value={v}
                      defaultChecked={defaultMajor === v}
                    />
                    <MajorSelect>
                      <SearchIcon
                        src={
                          !favoriteDb.includes(v)
                            ? 'images/icon-emptystar-24.svg'
                            : 'images/icon_fullstar_24.svg'
                        }
                        width={20}
                        alt={v}
                        onClick={onFavoriteMajor}
                      />
                      {v}
                    </MajorSelect>
                  </label>
                );
              })}
          </form>
        ) : (
          <form onChange={majorChange}>
            {favoriteDb
              .filter((v) => {
                return searchMajor === '' ? v : v.includes(searchMajor) ? v : null;
              })
              .map((v, i) => {
                return (
                  <label key={i}>
                    <FormCheckLeft
                      name="majorType"
                      id="easy"
                      value={v}
                      defaultChecked={props.checkClass === v}
                    />
                    <MajorSelect>
                      <SearchIcon
                        src={
                          !favoriteDb.includes(v)
                            ? 'images/icon-emptystar-24.svg'
                            : 'images/icon_fullstar_24.svg'
                        }
                        width={20}
                        alt={v}
                        onClick={onFavoriteMajor}
                      />
                      {v}
                    </MajorSelect>
                  </label>
                );
              })}
          </form>
        )}
      </MajorBox>
      <SubmitButton onClick={clickSubmit}>확인</SubmitButton>
    </ModalWrapper>
  );
};

export default MajorSearch;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 95%;
`;

const Title = styled.div`
  font-size: 20px;

  cursor: pointer;
`;

const TitleLine = styled.div`
  margin-top: 18px;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 95%;
  margin-top: 40px;
`;

const CssTextField = styles.styled(TextField)({
  width: '100%',
  '& label.Mui-focused': {
    color: '#336af8',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'black',
  },
  backgroundImage: `url('images/icon_search_24.svg')`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `99% -10%`,
});

const TabWrapper = styled.div`
  display: flex;
  margin-top: 36px;
  width: 95%;
`;

const TabMenu = styled.div`
  font-size: 16px;
  color: #a3a3a3;

  font-weight: 400;
  margin-right: 15px;
  &#selected {
    color: black;
  }
  &:hover {
    cursor: pointer;
  }
`;

const MajorBox = styled.div`
  width: 95%;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  min-height: 220px;
  overflow-y: scroll;
  padding: 5px;
`;

const MajorSelect = styled.span`
  display: flex;
  align-items: center;

  font-size: 16px;
  width: 100%;
  padding: 5px;
  &:hover {
    background-color: #eeeeee;
  }
`;

const SubmitButton = styled.div`
  background-color: #336af8;
  width: 65%;
  color: #fff;
  text-align: center;
  padding: 14px;
  border-radius: 15px;
  margin-top: 30px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 550px) {
    width: 95%;
  }
`;

const SearchIcon = styled.img`
  margin-right: 8px;
  color: #e0e0e0;
  &:hover {
    cursor: pointer;
  }
`;

const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &#difficult {
    &:checked + ${MajorSelect} {
      color: #7800ff;
      font-weight: 600;
    }
  }
  &#normal {
    &:checked + ${MajorSelect} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#easy {
    &:checked + ${MajorSelect} {
      color: #336af8;
      background-color: #eeeeee;
    }
  }
  display: none;
`;
