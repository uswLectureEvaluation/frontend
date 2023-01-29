import JwtInterceptors from './ApiController';

const Notices = () => {
  const instance = JwtInterceptors().instance;
  //공지사항api 확인 필요
  const list = async (pageParam) => {
    try {
      const res = await instance.get(`/notice/all?page=${pageParam}`);
      return {
        data: res,
        nextPage: pageParam + 1,
        isLast: res.data.length < 10,
      };
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  //공지사항 자세히보기 api
  const detail = async (notice) => {
    try {
      const res = await instance.get(`/notice/?noticeId=${notice}`);
      return res;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return { list, detail };
};

export default Notices;
