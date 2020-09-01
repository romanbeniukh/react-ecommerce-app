import { INITIAL_FILTERS } from '../../helpers/constants';
import parseFilters from '../../helpers/parseFilters';

export const preloadStateFromUrl = () => {
  try {
    const { search } = window.location;
    const parsedFilters = parseFilters(search);
    const filters = { ...INITIAL_FILTERS, ...parsedFilters };

    return {
      filters,
    };
  } catch (e) {
    return { ...INITIAL_FILTERS };
  }
};
