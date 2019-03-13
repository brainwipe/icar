import React from "react"
import Layout from "../components/layout"
import TitleLogo from "../img/title-logo.svg"
import IcarTitle from "../img/front-splash-text.svg"
import CoreRules from "../img/icar-core-rules.jpg"
import PlayerHandouts from "../img/icar-equipment-index.jpg"
import FleetSetting from "../img/icar-fleet-setting.jpg"

export default () => (
    <Layout>
        <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <a href="#">
                    <img className="icar-title-logo" src={TitleLogo} height="30px"/>
                </a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected"><a href="#a" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#downloads" className="pure-menu-link">Downloads</a></li>
                    <li className="pure-menu-item"><a href="#c" className="pure-menu-link"></a></li>
                </ul>
            </div>
        </div>
 
        <div className="splash-container">
            <div className="splash">
                <img src={IcarTitle} width="100%"/>

                <p className="splash-subhead">
                Icar is a free science fiction tabletop RPG where you zip between the stars, battle killer Droids and subvert a benevolent Imperium        </p>
                <p>
                    <a href="#downloads" className="pure-button pure-button-primary">Download Now</a>
                </p>
            </div>
        </div>
        
        <a name="downloads"></a>
        <div className="content-wrapper">
            <div className="content">
                <h2 className="content-head is-center">Downloads</h2>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-3 is-center l-box">
                        <a href="https://www.drivethrurpg.com/product/133597/Icar">
                            <img src={CoreRules} />
                        </a>
                        <h3 className="content-subhead">
                            <a href="https://www.drivethrurpg.com/product/133597/Icar">Core Rules</a>
                        </h3>
                        <p>
                            Everything you need to play; rules, background and setting. 96 pages. 
                        </p>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-3 is-center l-box">
                        <a href="https://www.drivethrurpg.com/product/133598/Icar-Equipment-Index">
                            <img src={PlayerHandouts} />
                        </a>
                        <h3 className="content-subhead">
                            <a href="https://www.drivethrurpg.com/product/133598/Icar-Equipment-Index">Player Handouts</a>
                        </h3>
                        <p>
                            Weapons, vehicles, spacecraft. All ready to print, fold and hand out. 
                        </p>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-3 is-center l-box">
                        <a href="https://www.drivethrurpg.com/product/171424/Icar-Fleet-Setting">
                            <img src={FleetSetting} />
                        </a>
                        <h3 className="content-subhead">
                            <a href="https://www.drivethrurpg.com/product/171424/Icar-Fleet-Setting">Fleet Setting</a>
                        </h3>
                        <p>
                            A military sourcebook, battle robots in bionics and powered armour. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="ribbon l-box-lrg pure-g">
                <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                    <img width="300" alt="File Icons" className="pure-img-responsive" src="img/common/file-icons.png" />
                </div>
                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                    <h2 className="content-head content-head-ribbon">Laboris nisi ut aliquip.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor.
                    </p>
                </div>
            </div>

            <div className="content">
                <h2 className="content-head is-center">Dolore magna aliqua. Uis aute irure.</h2>

                <div className="pure-g">
                    <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                        <form className="pure-form pure-form-stacked">
                            <fieldset>

                                <label htmlFor="name">Your Name</label>
                                <input id="name" type="text" placeholder="Your Name" />


                                <label htmlFor="email">Your Email</label>
                                <input id="email" type="email" placeholder="Your Email" />

                                <label htmlFor="password">Your Password</label>
                                <input id="password" type="password" placeholder="Your Password" />

                                <button type="submit" className="pure-button">Sign Up</button>
                            </fieldset>
                        </form>
                    </div>

                    <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                        <h4>Contact Us</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                </p>

                        <h4>More Information</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                </p>
                    </div>
                </div>

            </div>

            <div className="footer l-box is-center">
                View the source of this layout to learn more. Made with love by the YUI Team.
    </div>

        </div>


    </Layout>
)