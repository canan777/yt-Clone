import { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="video-layout">
        {/* 
            1) eğer api'den henüz cevap gelmediyse yükleniyor bas
            2) api'den cevap geldiyse sadece type'ı video olanlar
            *  için ekrana video card'ı bas
        */}
        {!videos ? (
          <Loader/>
        ) : (
          videos.map(
            (item, i) =>
              item.type === "video" && (<VideoCard key={i} video={item} />)
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
