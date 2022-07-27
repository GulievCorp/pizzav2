const mockApi = `https://62d1010cd9bf9f170590bf69.mockapi.io/Items?`;

export const getPizzas = async (
  setPizzas,
  setIsLoading,
  page,
  categoryId,
  sortProperty,
  searchValue
  ) => {
  const url = `page=${page}&limit=5${categoryId ? `&category=${categoryId}` : ''}${sortProperty ? `&_sortBy=${sortProperty}&_order=desc` : ''}${searchValue ? `&search=${searchValue}` : ''}`;

  console.log(url);

  setIsLoading(true);
  fetch(mockApi + url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setPizzas(json);
      setIsLoading(false);
    });
}; 