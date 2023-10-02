import "./Home.css";
import ParallaxItem from "./Parallax/ParallaxItem";

import Discord from "../../assets/discord.svg";
import Telegram from "../../assets/telegram.svg";
import VK from "../../assets/vk.svg";
import Twitch from "../../assets/twitch.svg";
import GitHub from "../../assets/github.svg";

export default function Home() {
    return <>
        <ParallaxItem/>
        <section className={"subscribe"}>
            <div>
                <h2>Subcribe to our Newsletter</h2>
                <form>
                    <input type="email" name="email" placeholder={"E-mail"} required={true}/>
                    <input type="submit" value="Subscribe"/>
                </form>
            </div>
        </section>
        <section className="social">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/K3GwvMvzBTY?si=jXvBjBUg7DXCyhOu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div class={"social-text"}>
                    <p><b>The North</b> - проект, зародившийся в студенческие времена!</p>
                    <p>Мы поставили себе цель продвинуть игростроительство в Московском Политехе и создали <b>крупную</b> и <b>интересную</b> игру про <b>викингов</b>. </p>
                </div>
                <ul className="social-icons">
                    <li><a href="#"><img src={Discord} alt=""/></a></li>
                    <li><a href="#"><img src={Telegram} alt=""/></a></li>
                    <li><a href="#"><img src={VK} alt=""/></a></li>
                    <li><a href="#"><img src={Twitch} alt=""/></a></li>
                    <li><a href="#"><img src={GitHub} alt=""/></a></li>
                </ul>
            </div>
        </section>
    </>;
}