import Calendar from "@/components/Calendar";
import HeroArea from "@/components/Heroarea";
import JoinSteps from "@/components/JoinSteps";
import Utils from "@/components/Utils";
import Cta from "@/components/Cta";
import Winners from "@/components/Winners";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <HeroArea />
      <Utils />
      <Calendar />
      <JoinSteps />
      <Cta />
      <Winners />
    </div>
  );
}
