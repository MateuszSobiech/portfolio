import React from "react";
import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";

function Card(props) {
  const card = props.card;
  const hasHtmlId = props.hasHtmlId;
  const hasALink = Boolean(card.btn.aLink);

  return (
    <div
      id={hasHtmlId ? card.htmlId : ""}
      className="project-container"
      style={{ backgroundColor: card.backgroundColor }}
    >
      <article>
        <div className="card-container">
          <div className="card-container-text">
            <p className="card-title">{card.title}</p>
            <p className="card-description">{card.description}</p>
            <p className="card-tools">{card.tools}</p>
            <Link
              to={hasALink ? card.btn.aLink : card.btn.refLink}
              target={hasALink ? "_self" : "_blank"}
            >
              <button
                className="btn-project"
                style={{ backgroundColor: card.btn.color }}
              >
                {card.btn.text}
                {!hasALink && (
                  <div className="btn-icon">
                    <HiExternalLink />
                  </div>
                )}
              </button>
            </Link>
          </div>
          <div
            className="card-container-img-desktop card-container-img-tablet"
            style={{
              backgroundImage: `url(${card.images.desktop.src})`,
              backgroundPosition: `center center`,
            }}
          />
          <div
            className="card-container-img-mobile"
            style={{
              backgroundColor: card.btn.color,
              backgroundImage: `url(${card.images.mobile.src})`,
              backgroundPosition: `bottom ${card.images.mobile.positionBottom} right ${card.images.mobile.positionRight}`,
            }}
          />
        </div>
      </article>
    </div>
  );
}

export default Card;
