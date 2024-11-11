type activePageInitialStateTypes = {
  page: number;
};

type userInitialStateTypes = {
  isLogin: boolean;
  info: {
    name: string;
    email: string;
  };
};

export const activePageInitialState: activePageInitialStateTypes = {
  page: -1,
};

export const userInitialState: userInitialStateTypes = {
  isLogin: false,
  info: {
    name: "",
    email: "",
  },
};
