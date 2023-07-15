// hago un fetch al endpoint (SOLO SI EXISTE el access_token dentro del localStorage) y si me retorna un error
// devuelvo un objeto con isUserValid en false y hago un console.error del error
// si me retorna un user devuelvo un objeto con isUserValid en true y dentro de data el user
async function fetchUser(API_URL, pathName, access_token) {
  if (localStorage.getItem("access_token")) {
    const res = await fetch(`${API_URL}${pathName}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(access_token).access_token}`,
      },
    });
    if (!res.ok) {
      console.error(res.statusText);
      return { isUserValid: false };
    }
    const json = await res.json();
    return { isUserValid: true, data: json };
  }
}

export default fetchUser;
