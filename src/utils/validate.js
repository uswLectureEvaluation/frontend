// 비밀번호 유효성 검사 로직
export const validatePassword = {
  required: true,
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^+=-])(?=.*[0-9]).{8,25}$/,
    message: '숫자+영문자+특수문자(!@#$%^+=-) 조합으로 8자리 이상 입력해주세요!',
  },
};
