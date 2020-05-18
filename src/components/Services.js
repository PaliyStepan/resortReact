import React, {Component} from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

class Services extends Component{
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ratione.'
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ratione.'
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ratione.'
            },
            {
                icon: <FaBeer/>,
                title: "Strongers Beer",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ratione.'
            },
        ]
    };
    render() {
        return(
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) =>(
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}



export default Services;
