import JwtInterceptors from './ApiController';

const Notices = () => {
  const instance = JwtInterceptors().instance;
  //공지사항api 확인 필요
  const list = async (pageParam) => {
    const result = await instance({
      url: `/notice/all?page=${pageParam}`,
      method: 'GET',
    });
    return {
      data: result,
      nextPage: pageParam + 1,
      isLast: result.data.length < 10,
    };
  };

  //공지사항 자세히보기 api
  const detail = async (notice) => {
    return instance({
      url: `/notice/?noticeId=${notice}`,
      method: 'GET',
    });
  };
  return { list, detail };
};

export default Notices;
