const generateDocumentNo = () => {
  const now = new Date();

  const date = `${now.getFullYear().toString().substring(2)}${now.getMonth().toString().padEnd(2, '0')}${now.getDate().toString().padEnd(2, '0')}`;

  const unique = now.getTime().toString().substring(9);

  return `${date}${unique}`;
};

export default generateDocumentNo;
