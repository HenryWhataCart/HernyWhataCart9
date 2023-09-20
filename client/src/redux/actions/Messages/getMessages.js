import ACTION_TYPES from "../../actionTypes";
import axios from "axios";

const getMessage = (businessId, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/msgFind/?BusinessId=${businessId}&ContactId=${id}`
      );
      const response2 = await axios.get(
        `/messageSendSearch/?BusinessId=${businessId}&ContactId=${id}`
      );

      let messages = [];
      response.data.forEach((res) => {
        const date = new Date(Number(res.timestamp));
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();
        // const seconds = date.getSeconds().toString();
        const message = {
          text: res.payload.payload.text,
          from: res.payload.source,
          name: res.payload.sender.name,
          timestamp: `${hours}:${minutes}`,
          timestampCompare: date,
          sent: false,
          key: res.payload.payload.id,
        };

        messages.push(message);
      });

      response2.data.forEach((res) => {
        const date = new Date(res.timestamps);
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();
        // const seconds = date.getSeconds().toString();
        const message = {
          text: res.message,
          from: res.phone,
          name: res.name,
          timestamp: `${hours}:${minutes}`,
          timestampCompare: date,
          sent: true,
          key: res.id,
        };
        messages.push(message);
      });

      messages.sort((a, b) => {
        const timestampA = new Date(a.timestampCompare);
        const timestampB = new Date(b.timestampCompare);

        if (timestampA.toDateString() !== timestampB.toDateString()) {
          return timestampA - timestampB;
        } else {
          return timestampA - timestampB;
        }
      });

      dispatch({
        type: ACTION_TYPES.GET_MESSAGE_SUCCESS,
        payload: messages,
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.GET_MESSAGE_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default getMessage;
