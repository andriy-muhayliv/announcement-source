import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "../delete-icon/DeleteIcon";
import EditIcon from "../edit-icon/EditIcon";

const AnnouncementCard = ({
  title,
  description,
  date,
  id,
  setSimilarAnnouncementModal,
}) => {
  const [editCard, setEditCard] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const dispatch = useDispatch();

  const deleteAnnouncement = () => {
    dispatch({ type: "DELETE_CARD", id: id });
    setDescriptionInput(description);
    setTitleInput(title);
    setEditCard(false);
  };

  const editCardDefaultInputStates = () => {
    setDescriptionInput(description);
    setTitleInput(title);
    setEditCard(true);
  };

  const saveEditedCard = () => {
    dispatch({
      type: "EDIT_CARD",
      title: titleInput,
      description: descriptionInput,
      id: id,
    });
    setEditCard(!editCard);
  };

  return (
    <div className="bg-white w-full h-[460px] rounded p-4 drop-shadow-xl hover:drop-shadow-2xl overflow-hidden">
      {editCard ? (
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          className="w-full border-4 p-2"
        />
      ) : (
        <h3 className="font-bold text-[20px]">{title}</h3>
      )}
      <div className="flex">
        <p className="my-2">Додано: {date}</p>
        <div className="flex" onClick={editCardDefaultInputStates}>
          <EditIcon className="mx-4" />
        </div>
        <div onClick={deleteAnnouncement} className="flex">
          <DeleteIcon />
        </div>
      </div>
      <div className="w-full overflow-y-auto h-[200px]">
        {editCard ? (
          <textarea
            type="text"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
            className="w-full border-4 p-2 h-full pb-[10px]"
          ></textarea>
        ) : (
          <p className="text-[20px] h-full">{description}</p>
        )}
      </div>
      {!editCard && (
        <button
          onClick={() =>
            setSimilarAnnouncementModal({ isOpen: true, title: title, id: id })
          }
          className="absolute left-[10px] bottom-[10px] py-[4px] px-6 border rounded bg-carrot cursor-pointer hover:bg-secondary-carrot"
        >
          Подібні оголошення
        </button>
      )}
      {editCard && (
        <div className="flex justify-around absolute bottom-[10px] right-[10px] max-w-[300px]">
          <button
            onClick={() => setEditCard(!editCard)}
            className="mx-6 py-[4px px-4 border rounded bg-red-600 cursor-pointer hover:bg-red-500"
          >
            Відмінити
          </button>
          <button
            onClick={saveEditedCard}
            className=" py-[4px] px-4 px-auto border rounded bg-carrot cursor-pointer hover:bg-secondary-carrot"
          >
            Зберегти
          </button>
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard;
