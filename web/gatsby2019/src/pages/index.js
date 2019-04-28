import React from "react"
import Layout from "../components/layout"
import IcarTitle from "../img/front-splash-text.svg"
import CoreRules from "../img/icar-core-rules.jpg"
import PlayerHandouts from "../img/icar-equipment-index.jpg"
import FleetSetting from "../img/icar-fleet-setting.jpg"
import RulesPages from "../img/icar-core-pages.png"
import { Link } from "gatsby"

export default () => (
    <Layout>
        <div className="splash-container">
            <div className="splash">
                <img src={IcarTitle} width="100%" alt="Icar - the free Sci Fi tabletop rpg"/>
                <p className="splash-subhead">
                Icar is a free science fiction tabletop RPG where you zip between the stars, battle killer Droids and subvert a benevolent Imperium        </p>
            </div>
        </div>
        
        <a name="downloads"></a>
        <div className="index-wrapper pure-g">
            <div className="content content pure-u-1 pure-u-lg-2">
                <h2 className="content-head is-center">Downloads</h2>
                <div>
                    <div className="pure-u-1 pure-u-md-1-3 is-center l-box">
                        <a name="download-corerules" href="https://www.drivethrurpg.com/product/133597/Icar">
                            <img src={CoreRules} alt="Core rules - all you need to play" />
                        </a>
                        <h3 className="content-subhead">
                            <a href="https://www.drivethrurpg.com/product/133597/Icar" rel="external" rev="download/version4">Core Rules</a>
                        </h3>
                        <p>
                            Everything you need to play; rules, background and setting. 96 pages. 
                        </p>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 is-center l-box">
                        <a name="download-equipmentindex" href="https://www.drivethrurpg.com/product/133598/Icar-Equipment-Index">
                            <img src={PlayerHandouts} alt="Equipment Index - player handouts representing weapons, vehicles, spacecraft etc" />
                        </a>
                        <h3 className="content-subhead">
                            <a href="https://www.drivethrurpg.com/product/133598/Icar-Equipment-Index">Player Handouts</a>
                        </h3>
                        <p>
                            Weapons, vehicles, spacecraft. All ready to print, fold and hand out. 
                        </p>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 is-center l-box">
                        <a name="download-fleetsetting" href="https://www.drivethrurpg.com/product/171424/Icar-Fleet-Setting">
                            <img src={FleetSetting} alt="Fleet Setting - a dropship delivers troopers to the middle of a battle" />
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

            <div className="ribbon l-box-lrg pure-u-1">
                <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                    <a href="https://www.drivethrurpg.com/product/133597/Icar" rel="external" rev="download/version4">
                        <img width="300" alt="The core rules are high resolution PDFs filled with pictures. Click here to find out for yourself!" title="The core rules are high resolution PDFs filled with pictures. Click here to find out for yourself!" className="pure-img-responsive" src={RulesPages} />
                        </a>
                </div>
                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5 pure-u-xl-2-5">

                    <h2 className="content-head content-head-ribbon">What is Icar?</h2>
                    <p>
                        Icar is a free tabletop roleplaying game, the kind you place with pencils, paper, dice and a bunch of friends. You can <a href="http://rpg.drivethrustuff.com/product/133597/Icar" rel="external" rev="download/version4">download the PDF for free</a> and either print it or play from a laptop or iPad.<br/>
                        <br/>
                        Icar is a space opera, more light hearted than hard science fiction. It is set in a distant future where a benevolent Imperium protect the human race, which is battling race of killer robots it created!<br/>
                        <br/>
                        Up to date news can be found on <Link to="blogs">the blog</Link>, questions, feedback and chat can be found on <a href="http://www.1km1kt.net/forum/viewforum.php?f=34">the forum</a>.<br/>
                    </p>
                </div>
            </div>
       </div>
    </Layout>
)