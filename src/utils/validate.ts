// 아이디 유효성 검사 로직
export const validateId = {
  required: true,
  minLength: {
    value: 6,
    message: '아이디는 6자리 이상 입력해주세요.',
  },
  maxLength: {
    value: 20,
    message: '아이디는 20자리 이하로 입력해주세요.',
  },
  pattern: {
    value: /^[a-z0-9]+$/,
    message: '아이디는 영소문자 및 숫자로 입력해주세요.',
  },
};

// 비밀번호 유효성 검사 로직
export const validatePassword = {
  required: true,
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^+=-])(?=.*[0-9]).{8,25}$/,
    message: '숫자+영문자+특수문자(!@#$%^+=-) 조합으로 8자리 이상 입력해주세요!',
  },
};

// 비밀번호 재확인 검사 로직
export const validatePasswordConfirm = (password: string) => {
  return {
    required: true,
    validate: (value: string) => value === password || '비밀번호가 일치하지 않습니다.',
  };
};

// 이메일 유효성 검사 로직
export const validateEmail = {
  required: true,
  pattern: {
    value:
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
    message: '이메일 형식이 틀렸습니다.',
  },
  validate: (value: string) => value.endsWith('@suwon.ac.kr') || '이메일 형식이 틀렸습니다.',
};
