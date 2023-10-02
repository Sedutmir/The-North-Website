import "./Home.css";
import ParallaxItem from "./Parallax/ParallaxItem";

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
        {/*  Social container  */}
    </>;
}