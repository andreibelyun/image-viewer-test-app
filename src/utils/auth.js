const USER = { name: "admin", password: "admin" };

const isExistingUser = (name, password) => {
  return name === USER.name && password === USER.password;
};

export { isExistingUser };
