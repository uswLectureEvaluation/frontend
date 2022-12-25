import { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import Major from '../../api/Major';
import { searchFavorite, type } from '../../api/etc';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../app/recoilStore';

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
    <Styled.ModalWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>개설학과 검색</Styled.Title>
        <Styled.Title onClick={() => props.setModalIsOpen(false)}>X</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.TitleLine />
      <Styled.InputWrapper>
        <Styled.CssTextField
          placeholder="개설학과를 검색하세요."
          value={searchMajor}
          onChange={(e) => setSearchMajor(e.target.value)}
        />
      </Styled.InputWrapper>
      <Styled.TabWrapper>
        <Styled.TabMenu id={all ? 'selected' : null} onClick={() => setAll(true)}>
          전체
        </Styled.TabMenu>
        <Styled.TabMenu id={all ? null : 'selected'} onClick={() => setAll(false)}>
          즐겨찾기
        </Styled.TabMenu>
      </Styled.TabWrapper>
      <Styled.MajorBox>
        {all ? (
          <form onChange={majorChange}>
            {db
              .filter((v) => {
                return searchMajor === '' ? v : v.includes(searchMajor) ? v : null;
              })
              .map((v, i) => {
                return (
                  <label key={i}>
                    <Styled.FormCheckLeft
                      name="majorType"
                      id="easy"
                      value={v}
                      defaultChecked={defaultMajor === v}
                    />
                    <Styled.MajorSelect>
                      <Styled.SearchIcon
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
                    </Styled.MajorSelect>
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
                    <Styled.FormCheckLeft
                      name="majorType"
                      id="easy"
                      value={v}
                      defaultChecked={props.checkClass === v}
                    />
                    <Styled.MajorSelect>
                      <Styled.SearchIcon
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
                    </Styled.MajorSelect>
                  </label>
                );
              })}
          </form>
        )}
      </Styled.MajorBox>
      <Styled.SubmitButton onClick={clickSubmit}>확인</Styled.SubmitButton>
    </Styled.ModalWrapper>
  );
};

export default MajorSearch;
