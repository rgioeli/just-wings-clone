export const boldString = (string, char) => {
  // get the string we need, split it, and return the first part and second part of the string.
  const splitString = string.split(char);
  return (
    <p>
      {splitString[0]} -<span>{splitString[1]}</span>
    </p>
  );
};
