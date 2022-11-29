const response = (res: Response) => {
  console.log("after fetch", res);
  return res.json();
};

export default response;
