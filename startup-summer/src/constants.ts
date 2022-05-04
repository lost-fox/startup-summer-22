const INITIAL_USER = {
  login: "",
  id: 0,
  avatar_url: "",
  html_url: "",
  name: "",
  public_repos: 0,
  followers: 0,
  following: 0,
};

const INITIAL_REPOSITORIES = [
  {
    id: 0,
    name: "",
    html_url: "",
    description: "",
  },
];

const AMOUNT_ITEM_TO_PAGE = 4;

export { INITIAL_USER, INITIAL_REPOSITORIES, AMOUNT_ITEM_TO_PAGE };
