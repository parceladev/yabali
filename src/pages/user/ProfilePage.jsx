import {
  ProfileBanner,
  GoalsAndMissions,
  OurTeamCard,
  DocumentCard,
} from "../../components/profile";

const ProfilePage = () => {
  return (
    <div className="">
      <div className=" flex flex-col mx-auto  w-full max-w-[1150px] my-24 relative z-[1]">
        <ProfileBanner />
      </div>
      <div className="h-full w-full bg-secondary2 relative  bottom-[250px] flex flex-col items-center justify-center p-10 shadow-md">
        <GoalsAndMissions />
      </div>
      <div className=" flex flex-col mx-auto  w-full max-w-[1150px]">
        <OurTeamCard />
        <DocumentCard />
      </div>
    </div>
  );
};

export default ProfilePage;
