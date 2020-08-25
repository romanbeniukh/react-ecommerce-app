import moment from 'moment';

export default value => {
  if (!value) return '';
  value.toString();
  return moment(value).format('MM/DD/YYYY');
};
