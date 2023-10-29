import style from "./style/style.module.scss";

import EsportsCompanies from "../../components/EsportsCompanies/EsportsCompanies";
import PassionFirst from "../../components/PassionFirst/PassionFirst";
import Records from "../../components/Records/Records";
import FutureEvents from "../../components/FutureEvents/FutureEvents";
import Service from "../../components/Service/Service";
import RecentСases from "../../components/RecentСases/RecentСases";
import NewVideos from "../../components/NewVideos/NewVideos";
import OurPartners from "../../components/OurPartners/OurPartners";

const Start = () => {
  return (
    <div className={style.start}>
      <PassionFirst />
      <EsportsCompanies />
      <Records />
      <FutureEvents />
      <Service />
      <RecentСases />
      <NewVideos />
      <OurPartners />
    </div>
  );
};

export default Start;
