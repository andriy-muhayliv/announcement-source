import React from "react";
import moment from "moment";
import CloseIcon from "../close-icon/CloseIcon";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateCardModal = ({ setShowModal }) => {
  const [input, setInput] = useState();
  const [description, setDescription] = useState();
  const date = moment().locale("uk").format("D/MM/YYYY, H:mm:ss");
  const dispatch = useDispatch();

  const addNewCard = () => {
    dispatch({
      type: "ADD_CARD",
      date: date,
      title: input,
      description: description,
    });
    setShowModal(false);
  };

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-transparent-black z-20">
      <div className="absolute-centering bg-white w-11/12 md:w-3/6 h-4/6 md:h-3/6 rounded-lg z-30 p-6">
        <CloseIcon
          onClick={() => setShowModal(false)}
          className="absolute top-0 right-[10px] w-[30px]"
        />
        <div className="mt-[40px]">
          <div className="flex mx-auto my-[20px]">
            <p className="mr-[10px]">Заголовок:</p>
            <input
              type="text"
              className="h-20px border-2 border-black rounded w-full"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <p className="my-4">Опис:</p>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-black rounded w-full"
          ></textarea>
          <button
            onClick={addNewCard}
            className="absolute bottom-[10px] right-[10px] border-2 border-black rounded bg-wet-asphalt hover:bg-carrot py-[2px] px-[30px]"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCardModal;
