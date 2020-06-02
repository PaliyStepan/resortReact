import React from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import {withRoomConsumer} from "../context/context";
import Loader from "./Loader";

function RoomsContainer({context}) {
    const {loading, sortedRooms,rooms } = context;
    if (loading) {
        return <Loader/>;
        }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms} />
        </>
    )
}


export default withRoomConsumer(RoomsContainer);













// import React from "react";
// import RoomsList from "./RoomsList";
// import RoomsFilter from "./RoomsFilter";
// import {RoomConsumer} from "../context/context";
// import Loader from "./Loader";
//
// const RoomsContainer = () => {
//
//     return(
//         <RoomConsumer>
//             {
//                 (value) =>{
//                     const {loading, sortedRooms, rooms} = value;
//
//                     if (loading) {
//                         return <Loader/>
//                     }
//                     return (
//                         <div>
//                             <RoomsList rooms={rooms} />
//                             <RoomsFilter rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//
//             }
//         </RoomConsumer>
//     )
// };
//
//
//
//
// export default RoomsContainer;
