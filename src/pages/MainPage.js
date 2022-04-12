import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnnouncementCard from "../components/announcement-card/AnnouncementCard";
import PlusIcon from "../components/plus-icon/PlusIcon";
import CreateCardModal from "../components/create-card-moodal/CreateCardModal";
import SimilarAnnouncementModal from "../components/similar-announcement-modal/SimilarAnnouncementModal";

const MainPage = () => {
  const data = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [copyArr, setCopyArr] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [similarAnnouncementModal, setSimilarAnnouncementModal] = useState({
    isOpen: false,
    title: "",
    id: "",
  });

  useEffect(() => {
    setCopyArr(data.slice());
    searchInput && searchAnnouncementTitle();
  }, [data]);
  useEffect(() => {
    searchAnnouncementTitle();
  }, [searchInput]);

  const searchAnnouncementTitle = () => {
    const value = searchInput.toLowerCase().split(" ").join("");
    const search = data?.filter((item) => {
      const successSearch =
        item.title?.trim().toLowerCase().split(" ").join("").search(value) >= 0;
      if (successSearch) {
        return item;
      } else if (value.length === 0) {
        return data.slice();
      }
    });
    setCopyArr(search);
  };

  return (
    <>
      {showModal && <CreateCardModal setShowModal={setShowModal} />}
      {similarAnnouncementModal.isOpen && (
        <SimilarAnnouncementModal
          setSimilarAnnouncementModal={setSimilarAnnouncementModal}
          similarAnnouncementModal={similarAnnouncementModal}
        />
      )}
      <button
        onClick={() => setShowModal(true)}
        className="flex justify-between w-[230px] p-4 mb-6 outline-dashed outline-2 outline-offset-2 cursor-pointer hover:outline-carrot"
      >
        <PlusIcon />
        <p className="inline-block">Додати оголошення</p>
      </button>
      <div className="grid my-8">
        <p className="mr-2 font-bold">Пошук оголошень за назвою:</p>
        <input
          type="text"
          className="border-2 border-black rounded p-[2px]"
          placeholder="Пошук"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div
        className={`${copyArr?.length && "lg:grid-cols-2"} grid gap-3 lg:gap-6`}
      >
        {copyArr?.length ? (
          copyArr?.map((item, index) => {
            return (
              <AnnouncementCard
                setSimilarAnnouncementModal={setSimilarAnnouncementModal}
                id={item.id}
                key={index}
                title={item.title}
                description={item?.description}
                date={item?.date}
              />
            );
          })
        ) : (
          <p className="text-center font-bold">Нових оголошень немає</p>
        )}
      </div>
    </>
  );
};

export default MainPage;
