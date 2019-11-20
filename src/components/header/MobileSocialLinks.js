import React from "react";
import {
    FaLinkedin,
    FaGithubSquare,
    FaTwitterSquare
} from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
    return (
        <div className="bottom-bar py-3">
            <a className=" text-primary"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={26} style={{ color: "primary" }} />
                </span>
            </a>
            <a className="text-light"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={26} style={{ color: "light" }} />
                </span>
            </a>
            <a className="text-info"
                href={contacts.twitter}>
                <span title="Twitter">
                    <FaTwitterSquare size={26} style={{ color: "info" }} />
                </span>
            </a>
        </div>
    )
}

export default MobileSocialLinks;