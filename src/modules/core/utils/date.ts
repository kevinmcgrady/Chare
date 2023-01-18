import dayjs from 'dayjs';

/*
 * 12 May 2033
 **/
export const formatDate = (date: Date) => dayjs(date).format('DD MMMM YYYY');
