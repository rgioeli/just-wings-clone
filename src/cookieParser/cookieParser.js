export const cookieParser = (cookies) => {
  const splitCookies = cookies
    .split(";")
    .map((x) => x.split("="))
    .reduce((emptyArr, cookie) => {
      emptyArr.push({ [cookie[0].trim()]: cookie[1] });
      return emptyArr;
    }, []);

  return splitCookies;
};
