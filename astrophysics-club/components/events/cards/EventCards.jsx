import './EventCards.css';

export default function EventCards() {
    return (
        <div className="container">
            <div classname="wrapper">
                <div classname="banner-image"> </div>
                <h1> Event Name</h1>
                <p>
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.
                </p>
            </div>
            <div classname="button-wrapper">
                <button classname="btn outline">DETAILS</button>
                <button classname="btn fill">Register</button>
            </div>
        </div>
    );
}
