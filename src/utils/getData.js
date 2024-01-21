import axios from "axios";

//yapacağımız bütün api isteklerinin başına bu url'i ekler
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    "X-RapidAPI-Key": "37781a9629mshb2b0eda2ccbb0ebp1ba12ajsn267bb0e69ced",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

//parametre olarak aldığı url'e api isteği atıp elde ettiği sonucu
//döndüren yardımcı fonksiyon
export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
