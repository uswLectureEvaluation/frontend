import React, { useState } from 'react'
import { Display, DContainer, Row, TextCenter, VerticalMiddle, SearchButton, PrimaryButton, SearchInput, SearchBar, HeadSelection, CustomSelect, StyledOption } from './Header.elemets'
import { HiSearch } from "react-icons/hi";
import Table from '../Table/Table';
import Link from '@mui/material/Link';
import fire from '../img/fire-solid.svg'
import check from '../img/check-solid.svg'
import star from '../img/star-solid.svg'
import thumb from '../img/thumbs-up-solid.svg'
import book from '../img/book-solid.svg'
import Ntable from '../Table/Ntable';


const Header = () => {

    const [search, setSearch] = useState('');


    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onClick = () => {
        alert(search + '검색하겠습니다');
    }


    const countries = [
        { code: fire, label: '최근 올라온 강의' },
        {
            code: thumb,
            label: '꿀 강의',
        },
        { code: star, label: '만족도가 높은 강의' },
        { code: book, label: '배울게 많은 강의' },
        { code: check, label: 'Best 강의' }
    ]

    return (
        <Display>
            <VerticalMiddle>
                <DContainer>
                    <Row>
                        <TextCenter>강의평가 검색</TextCenter>
                        <SearchBar>
                            <SearchInput
                                onChange={onChange}
                                placeholder="과목명, 교수명으로 원하는 강의평가를 찾아보세요!"
                            />
                            {/* <SearchButton>
                                <HiSearch style={{
                                    width: '40px',
                                    height: '45px'
                                }} />
                            </SearchButton> */}
                        </SearchBar>
                        <HeadSelection style={{ marginBottom: '20px' }}>
                            <CustomSelect>
                                {countries.map((c) => (
                                    <StyledOption key={c.code} value={c.code}>
                                        <img
                                            loading="lazy"
                                            width="20"
                                            src={c.code}

                                        />
                                        {c.label}
                                    </StyledOption>
                                ))}
                            </CustomSelect>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.log("I'm a button.");
                                }}
                                style={{ fontSize: '20px', color: 'rgb(158, 158, 158)' }}
                            >
                                더보기>
                            </Link>
                        </HeadSelection>
                        <Ntable />
                    </Row>
                </DContainer>
            </VerticalMiddle>
        </Display >
    )
}

export default Header
