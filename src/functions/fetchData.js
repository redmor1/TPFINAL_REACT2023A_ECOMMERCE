async function fetchData(API_URL, pathName, search = undefined) {
  // TODO: deal with pagination
  let res;
  if (pathName == location.pathname && !search) {
    res = await fetch(`${API_URL}${pathName}/?offset=0&limit=10`);
  } else if (search) {
    res = await fetch(`${API_URL}${pathName}${search}`);
  } else {
    res = await fetch(`${API_URL}/${pathName}/?offset=0&limit=10`);
  }
  const json = await res.json();
  if (json.error) {
    throw new Error(json.error);
  }

  return json;
}

export default fetchData;
