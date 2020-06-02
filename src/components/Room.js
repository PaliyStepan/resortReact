import React from "react";
import defaultImg from "../images/room-1.jpeg"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import breakfastImg from "../images/breakfast.svg";
import petsImg from "../images/pets.svg";

const Room = (props)=> {
    const {name,slug,images,price,breakfast, pets} = props.room;
    return(
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="room"/>
                <div className="price-top">
                    <h6>{price}</h6>
                    <p>per night</p>
                </div>
                {/*<div className="room__icons">*/}
                {/*    <p>{ breakfast ? <img src={breakfastImg} alt="breakfast"/> : null}</p>*/}
                {/*    <p>{ pets ? <img src={petsImg} alt="pets"/> : null}</p>*/}
                {/*</div>*/}

                {
                    breakfast || pets ? <div className="room__icons">
                        { breakfast ?<p> <img src={breakfastImg} alt="breakfast"/> </p> : null}
                        { pets ? <p> <img src={petsImg} alt="pets"/> </p>: null}
                    </div> : null
                }
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
};

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
};

export default Room;
