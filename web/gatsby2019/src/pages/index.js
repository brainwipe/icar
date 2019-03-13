import React from "react"
import Layout from "../components/layout"
import TitleLogo from "../img/title-logo.svg"
import IcarTitle from "../img/front-splash-text.svg"
import CoreRules from "../img/icar-core-rules.jpg"
import PlayerHandouts from "../img/icar-equipment-index.jpg"
import FleetSetting from "../img/icar-fleet-setting.jpg"
import RulesPages from "../img/icar-core-pages.png"

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
                            <a href="https://www.drivethrurpg.com/product/133597/Icar" rel="external" rev="download/version4">Core Rules</a>
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
                    <a href="https://www.drivethrurpg.com/product/133597/Icar" rel="external" rev="download/version4">
                        <img width="300" alt="The core rules are high resolution PDFs filled with pictures. Click here to find out for yourself!" title="The core rules are high resolution PDFs filled with pictures. Click here to find out for yourself!" className="pure-img-responsive" src={RulesPages} />
                        </a>
                </div>
                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                    <h2 className="content-head content-head-ribbon">What is Icar?</h2>
                    <p>
                        Icar is a free tabletop roleplaying game, the kind you place with pencils, paper, dice and a bunch of friends. You can <a href="http://rpg.drivethrustuff.com/product/133597/Icar" rel="external" rev="download/version4">download the PDF for free</a> and either print it or play from a laptop or iPad.<br/>
                        <br/>
                        Icar is a space opera, more light hearted than hard science fiction. It is set in a distant future where a benevolent Imperium protect the human race, which is battling race of killer robots it created!<br/>
                        <br/>
                        Up to date news can be found on THE BLOG XXXXX, questions, feedback and chat can be found on <a href="http://www.1km1kt.net/forum/viewforum.php?f=34">the forum</a>.<br/>
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