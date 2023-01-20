const baseUrl = "https://picsum.photos";
const commonHeaders = {
  "Content-Type": "application/json",
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Response is not ok with status ${res.status}`);
  }
};

const getImages = () =>
  fetch(`${baseUrl}/v2/list?page=1&limit=12`, { headers: commonHeaders }).then(
    checkResponse
  );

const getImageInfo = (id) =>
  fetch(`${baseUrl}/id/${id}/info`, { headers: commonHeaders }).then(
    checkResponse
  );

export { getImages, getImageInfo };
