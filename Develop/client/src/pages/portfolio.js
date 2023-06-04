import React from "react";
import BasicCard from "../components/Project";

const Portfolio = (props) => {


    const projects = [
        {
            title: "Florida Springs Deep Dive",
            image: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1685915992/Screenshot_2023-06-04_175743_yp7fnm.png",
            subtitle: "A webpage for people who love to explore freshwater springs in FL.",
            link: "https://floridasprings.herokuapp.com/"
        },
        {
            title: "Project Artscape",
            image: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1685916857/Screenshot_2023-06-04_181355_vpw9xe.png",
            subtitle: "searching Chicago institute of art API for art",
            link: "https://hmccarthy1.github.io/Project-ArtScape/"
        }
    ]
    return (
        <>
        
        <BasicCard
        items = {projects}
        ></BasicCard>

        </>
    )
}



export default Portfolio