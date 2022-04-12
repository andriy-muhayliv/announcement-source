import React from "react";
import { useSelector } from "react-redux";
import AnnouncementCard from "../announcement-card/AnnouncementCard";
import CloseIcon from "../close-icon/CloseIcon";

const SimilarAnnouncementModal = ({
  setSimilarAnnouncementModal,
  similarAnnouncementModal,
}) => {
  const data = useSelector((state) => state);
  const { title, id } = similarAnnouncementModal;
  const newData = data?.filter((item) => {
    var c = /[^\[\]\s]+|(\[\[[\s\S]*?\]\])/g;
    const a = title?.toLowerCase().match(c) || " ";
    const b = item.title?.toLowerCase().match(c) || " ";
    for (var i = 0; i < a.length; i++) {
      for (var k = 0; k < b.length; k++) {
        if (a[i] == b[k] && item.id != id) return item;
      }
    }
  });

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-transparent-black z-20">
      <div className="absolute-centering bg-slate-200 w-11/12 md:w-5/6 h-4/6 md:h-5/6 rounded-lg z-30 p-6">
        <CloseIcon
          onClick={() =>
            setSimilarAnnouncementModal({ isOpen: false, title: "", id: "" })
          }
          className="absolute top-0 right-[10px] w-[30px]"
        />
        <div className="grid gap-6 my-[20px] overflow-y-auto h-full">
          {newData.length ? (
            newData.slice(0, 3).map((item, index) => {
              return (
                <AnnouncementCard
                  setSimilarAnnouncementModal={setSimilarAnnouncementModal}
                  id={item.id}
                  index={index}
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  date={item?.date}
                />
              );
            })
          ) : (
            <p className="absolute-centering">
              Нажаль співпадінь не знайдено 😞
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarAnnouncementModal;
