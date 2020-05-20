import React, {Component} from "react";
import defaultBg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../context/context";

class SingleRoom extends Component{

    state = {
        slug: this.props.match.params.slug,
        defaultBg
    };

    static  contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>no such room was founded</h3>
                <Link to='/rooms' className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        console.log(room)
        return (
            <Hero hero='roomsHero'>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </Hero>
        )
    }

}

export default  SingleRoom;
