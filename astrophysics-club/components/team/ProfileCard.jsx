import './ProfileCard.css';
import TeamData from "../../public/data/TeamData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn } from '@fortawesome/react-fontawesome';
import {Image} from "mext/image";

function TeamMember(props) {
    return (
        <div className="our-team">
            <div className="picture">
                <Image
                    className="img-fluid"
                    src={props.image}
                    alt={props.name}
                    height="100"
                    width="100"
                />
            </div>
            <div className="team-content">
                <h3 className="name">{props.name}</h3>
                <h4 className="title">{props.title}</h4>
            </div>
            <ul className="social">
                <li>
                    <a href={props.facebook} aria-hidden="true">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
                <li>
                    <a href={props.twitter} aria-hidden="true">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href={props.googlePlus} aria-hidden="true">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                    </a>
                </li>
                <li>
                    <a href={props.linkedin} aria-hidden="true">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

function ProfileCard() {
    return (
        <div className="container">
            {TeamData.map((member, index) => (
                <TeamMember
                    key={index}
                    name={member.name}
                    title={member.title}
                    image={member.image}
                    facebook={member.facebook}
                    twitter={member.twitter}
                    googlePlus={member.googlePlus}
                    linkedin={member.linkedin}
                />
            ))}
        </div>
    );
}

export default ProfileCard;
