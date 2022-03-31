import { memo, useEffect, useState } from "react"
import * as Styled from "./styled"
import NoticeItem from "../../components/NoticeItem"
import ReactLoading from "react-loading"
import { noticeApi } from "../../api/Api"

const Notice = () => {
    const [target, setTarget] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [itemLists, setItemLists] = useState([1])

    const [db, setData] = useState({
        data: [],
    })
    useEffect(() => {
        noticeApi().then((data) => setData(data))
    }, [])

    console.log(db)

    const getMoreItem = async () => {
        setIsLoaded(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        setItemLists((itemLists) => itemLists.concat(Items))
        setIsLoaded(false)
    }

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
            observer.unobserve(entry.target)
            await getMoreItem()
            observer.observe(entry.target)
        }
    }

    useEffect(() => {
        let observer
        if (target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.4,
            })
            observer.observe(target)
        }
        return () => observer && observer.disconnect()
    })

    return (
        <Styled.AppContainer>
            <Styled.AppTitle>공지사항</Styled.AppTitle>

            {itemLists.map((v, i) => {
                return <NoticeItem number={i + 1} key={i} />
            })}
            <Styled.Targetelement ref={setTarget}>
                {isLoaded && <ReactLoading type="spin" color="#3dd3c4" />}
            </Styled.Targetelement>
        </Styled.AppContainer>
    )
}

export default memo(Notice)
