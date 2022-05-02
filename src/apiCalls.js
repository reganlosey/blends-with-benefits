const fetchData = async (url) => {
  try {
    const resp = await fetch(`${url}`)
    const respJson = await resp.json()
    if (resp.ok) {
      return respJson
    }
  } catch (err) {
    throw new Error(err)
  } 

}

export default fetchData;