async function fetchData(API_URL, pathName, search = undefined) {
  // TODO: deal with pagination
  // console.log("fetchData called with", API_URL, pathName, search);

  let res;
  if (location.pathname && !search) {
    res = await fetch(`${API_URL}${pathName}/?offset=0&limit=10`);
  } else if (search) {
    res = await fetch(`${API_URL}${pathName}${search}`);
  }
  const json = await res.json();
  if (json.error || res.status == 400) {
    throw new Error(json.error);
  }

  return json;
}

export default fetchData;
