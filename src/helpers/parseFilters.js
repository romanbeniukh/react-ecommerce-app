import qs from 'qs';

export default url => {
  const parsedFilters = qs.parse(url.substr(1));
  const { page, perPage, origins, minPrice, maxPrice } = parsedFilters;

  if (page) parsedFilters.page = +page;
  if (perPage) parsedFilters.perPage = +perPage;
  if (origins) parsedFilters.origins = origins.split(',');
  if (minPrice) parsedFilters.minPrice = +minPrice;
  if (maxPrice) parsedFilters.maxPrice = +maxPrice;

  return parsedFilters;
};
