import React from "react";
import image from "../assets/515905789-cc27e748-346b-4eb5-b30e-b44a14f519ce.png";
import image2 from '../assets/image.png'
import { Link } from "react-router";
const CardSection = () => {
  return (
    <div className="w-5/9 mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        MY PROJECTS
      </h1>

      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="card bg-base-100 w-96 mx-auto shadow-sm mt-12">
          <figure>
            <img src={image} alt="krishilink" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Krishilink BD</h2>
            <p>
              KrishiLink is a modern web application that connects farmers,
              traders, and consumers in one digital space.
            </p>
            <div className="card-actions flex justify-between">
            <div className="badge badge-soft badge-accent">MERN</div>

              <Link to={'https://krishilink-c85d4.web.app/'} className="btn btn-primary">Preview</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 mx-auto shadow-sm mt-12">
          <figure>
            <img src={image2} alt="gameverse" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gameverse</h2>
            <p>
            Gameverse is a game library where you can find all of your desired favourite game titles.
            </p>
            <div className="card-actions flex justify-between">
            <div className="badge badge-soft badge-accent">Frontend</div>
              <Link to={'https://gameverse98.netlify.app/'} className="btn btn-primary">Preview</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
