import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { OurTeamContent } from "../../content/profileContent";
const OurTeamCard = () => {
  return (
    <section className="mb-[100px]">
      <h1 className="text-center mb-5 font-paragraph font-bold text-[35px]">
        Meet our team
      </h1>
      <p className="text-center font-paragraph font-normal text-[14px]">
        Yuk kenalan dengan kami, Pengelola yayasan YABALI
      </p>
      <div className="flex justify-center gap-5">
        {OurTeamContent.map((team, index) => (
          <div key={index}>
            <div className=" mt-[50px] mb-[20px]">
              <img
                src={team.img}
                alt="Profile Image"
                className="w-[300px] h-[300px] object-cover object-center rounded-xl shadow-md"
              />
            </div>
            <div className="text-center mb-6">
              <h1 className="mb-3 font-paragraph font-medium text-[20px]">
                {team.name}
              </h1>
              <p className="font-paragraph font-medium text-[11px]">
                {team.position}
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <a href={team.facebook}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[22px] text-primary"
                />
              </a>
              <a href={team.twitter}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-[22px] text-primary"
                />
              </a>
              <a href={team.linkedin}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[22px] text-primary"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamCard;
