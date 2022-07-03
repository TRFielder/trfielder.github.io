// Functions to access blog API go here

const getAuthorByID = async (AuthorID: string) => {
  const response = await fetch(
    `https://fast-bastion-47554.herokuapp.com/author/${AuthorID}`,
  );
  const searchResult = await response.json();
  return searchResult;
};

export { getAuthorByID };
