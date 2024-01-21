import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../utils/getData";

//1) context temelini oluştur
export const YoutubeContext = createContext();

//2) context'de tutulan verileri uygulamaya aktaracak
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  // selectedCategory her değiştiğinde apiden
  // ilgili kategorinin verilerini çek
  useEffect(() => {
    // farklı verileri alırken öncekileri temizle 
    setVideos(null);
  // eğerki seçili kategorinin tipi home veya trending
  // ise o kategorinin tipinin ismine istek at

    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      getData(`/${selectedCategory.type}`).then((data) => setVideos(data.data));
    }

    // eğerki seçili kategorinin tipi category ise
    // o zaman search endpointine istek at
    if(selectedCategory.type === "category"){
      getData(`/search?query=${selectedCategory.name}`).then((data) =>
        setVideos(data.data)
      );
    }
  }, [selectedCategory]);


  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
