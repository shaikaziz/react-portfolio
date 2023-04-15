import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                {/* <span onClick={() => { window.location.href = "www.google.com" }}><InstagramIcon /></span> */}
                <Link href="https://www.instagram.com/shaik_aziz/" target="_blank" ><InstagramIcon /></Link>

                <Link href="https://twitter.com/ShaikAzizz98" target="_blank" ><TwitterIcon /></Link>
                <Link href="https://www.linkedin.com/in/shaik-azizuddin-mohammed/" target="_blank" ><LinkedInIcon /></Link>
                
                
            </div >
        </div >
    );
}

export default Footer;
