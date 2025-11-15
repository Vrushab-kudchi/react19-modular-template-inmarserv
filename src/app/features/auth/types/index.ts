export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  user: {
    userId: string;
    email: string;
    name: string;
    role: string;
    modules: [
      {
        _id: string;
        keyword: string;
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
      },
    ];
  };
};
