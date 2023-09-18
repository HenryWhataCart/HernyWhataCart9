import ACTION_TYPES from "../../actionTypes"

const setMessageSend = (message) => {
    // text:payload.payload.text,           //Que el mensaje sea mandado ala ruta para mandar mensajes, y que cuando responda con el evento del socket, ese evento con la data que transmite, la mande al dispatch y la concatene a lo que ya existe y se aloje al estado global, por lo tanto el dispatch de esta action lo hara el dashboard
    // from: payload.source,
    // name:payload.sender.name,
    // timestamp: `${hours}:${minutes}:${seconds}`,
    // sent:false,
    // key:payload.payload.id
    return {
        type: ACTION_TYPES.SET_MESSAGE_SEND_SUCCESS,
        payload: message    
    }
}

export default setMessage