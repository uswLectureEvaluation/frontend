import { memo, useCallback, useEffect, useState } from "react";
import * as Styled from "./styled";
import Item from "./Item";
import Loader from "./Loader";
import { noticeApi } from "../../Api/Api";

const Notice = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);

  const [db, setData] = useState({
    data: [],
  });
  useEffect(() => {
    noticeApi(setData);
  }, []);

  useEffect(() => {
    console.log(itemLists);
    console.log(db.data);
  }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <Styled.AppContainer>
      <Styled.AppWrapper>
        <Styled.AppTitle>공지사항</Styled.AppTitle>
      </Styled.AppWrapper>
          {itemLists.map((v, i) => {
            return <Item number={i + 1} key={i} />;
          })}
      <Styled.Targetelement ref={setTarget}>
        {isLoaded && <Loader />}
      </Styled.Targetelement>
    </Styled.AppContainer>
  );
};

export default memo(Notice);
