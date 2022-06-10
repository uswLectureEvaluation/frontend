import { useEffect, useState } from 'react'
import { deleteFavoriteMajorApi, favoriteMajorApi, searchFavoriteMajorApi } from '../../api/Api';
import * as Styled from './styled'

const MajorSearch = (props) => {
    const [all, setAll] = useState(true);
    const [db, setData] = useState([]);
    const [selectedMajor, setSelectedMajor] = useState('');
    const [searchMajor, setSearchMajor] = useState('');
    const [favorite, setFavorite] = useState('');
    const [favoriteDb, setFavoriteDb] = useState([]);

    const majorChange = (e) => {
        setSelectedMajor(e.target.value);
        setSearchMajor(e.target.value);
      };
    useEffect(()=>{
        searchFavoriteMajorApi().then((data)=>setFavoriteDb(data.data));
    },[selectedMajor, favorite])
    const onFavoriteMajor = (e) => {
        setSelectedMajor(e.target.alt);
        favoriteMajorApi(setFavorite, e.target.alt);
      }
    const onDeleteFavorite = (e) => {
        setSelectedMajor(e.target.alt);
        deleteFavoriteMajorApi(setFavorite, e.target.alt);
      }
    useEffect(()=>{
        setData(window.localStorage.getItem('majorType').split(","));
    },[])
    return(
        <Styled.ModalWrapper>
            <Styled.TitleWrapper>
                <Styled.Title>
                    개설학과 검색
                </Styled.Title>
                <Styled.Title onClick={()=>props.setModalIsOpen(false)}>
                    X
                </Styled.Title>
            </Styled.TitleWrapper>
            <Styled.TitleLine />
            <Styled.InputWrapper>
                <Styled.CssTextField placeholder='개설학과를 검색하세요.' value={searchMajor} onChange={(e)=>{setSearchMajor(e.target.value)}}/>
            </Styled.InputWrapper>
            <Styled.TabWrapper>
                <Styled.TabMenu id={all?'selected':null} onClick={()=>setAll(true)}>전체</Styled.TabMenu>
                <Styled.TabMenu id={all?null:'selected'} onClick={()=>setAll(false)}>즐겨찾기</Styled.TabMenu>
            </Styled.TabWrapper>
            <Styled.MajorBox>
                {all?
                <Styled.Content onChange={majorChange}>
                {db.map((v,i)=>{
                    return(
                            <Styled.FormLabel key={i}>
                                <Styled.FormCheckLeft
                                name="majorType"
                                id="easy"
                                value={v}
                                defaultChecked={selectedMajor === v}/>
                                {favoriteDb.includes(v)===false?<Styled.MajorSelect>
                                    <Styled.SearchIcon src='img/icon-emptystar-24.svg' 
                                    width={20} alt={v} onClick={onFavoriteMajor}/>{v}</Styled.MajorSelect>:
                                    <Styled.MajorSelect>
                                    <Styled.SearchIcon src='img/icon_fullstar_24.svg' 
                                    width={20} alt={v} onClick={onDeleteFavorite}/>{v}</Styled.MajorSelect>}
                            </Styled.FormLabel>
                    )
                })}
                </Styled.Content>
                :<Styled.Content onChange={majorChange}>
                {favoriteDb.map((v,i)=>{
                    return(
                            <Styled.FormLabel key={i}>
                                <Styled.FormCheckLeft
                                name="majorType"
                                id="easy"
                                value={v}
                                defaultChecked={selectedMajor === v}/>
                                {favoriteDb.includes(v)===false?<Styled.MajorSelect>
                                    <Styled.SearchIcon src='img/icon-emptystar-24.svg' 
                                width={20} alt={v} onClick={onFavoriteMajor}/>{v}</Styled.MajorSelect>:
                                <Styled.MajorSelect>
                                <Styled.SearchIcon src='img/icon_fullstar_24.svg' 
                                width={20} alt={v} onClick={onDeleteFavorite}/>{v}</Styled.MajorSelect>}
                            </Styled.FormLabel>
                    )
                })}
                </Styled.Content>}
            </Styled.MajorBox>
            <Styled.SubmitButton>확인</Styled.SubmitButton>
        </Styled.ModalWrapper>
    )
}

export default MajorSearch