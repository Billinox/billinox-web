import { DateTime } from 'luxon';

const generateDocumentNo = () => {
  const now = DateTime.now();

  const date = `${now.year.toString().substring(2)}${now.month.toString().padEnd(2, '0')}${now.day.toString().padEnd(2, '0')}`;

  const unique = now.toMillis().toString().substring(9);

  return `${date}${unique}`;
};

export default generateDocumentNo;
