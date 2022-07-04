// Functions to access blog API go here

const getAuthorByID = async (AuthorID: string) => {
  const response = await fetch(
    `https://fast-bastion-47554.herokuapp.com/author/${AuthorID}`,
  );
  const searchResult = await response.json();
  return searchResult;
};

const getArticleByID = async (ArticleID: string) => {
  const response = await fetch(
    `https://fast-bastion-47554.herokuapp.com/article/${ArticleID}`,
  );
  const searchResult = await response.json();
  return searchResult;
};

const getAllArticles = async () => {
  const response = await fetch(
    "https://fast-bastion-47554.herokuapp.com/article/",
  );
  const searchResult = await response.json();

  return searchResult.allArticles;
};

export { getAuthorByID, getArticleByID, getAllArticles };
