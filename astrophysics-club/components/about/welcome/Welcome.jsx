import "./welcome.css";
import Cards from "../cards/Card";
export default function Welcome() {
    return (
        <>
            <section className="welcome">
                <h1 className="about-h1">About Us</h1>
                <p className="about-p">
                    Are you a stargazer? Join The Astrophysics Club! We're a
                    group of cosmic enthusiasts exploring the wonders of the
                    universe together. From the Big Bang to alien life, we
                    discuss it all. Come share your passion and expand your
                    knowledge with us!
                </p>
            </section>
            <h1 className="vision-h1">Our Vision</h1>

            <Cards />
        </>
    );
}
