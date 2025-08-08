import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import GithubIconButton from "../github-icon-button";

const MrRidersCard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-between gap-2 py-3 sm:py-4 px-4 sm:px-6 overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative h-[85%] w-[90%] rounded-lg overflow-hidden shadow-lg">
            <video
              src="/videos/mrriders.mp4"
              className="h-full w-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Project</span>
          </h4>
          <div className="w-full flex gap-2 items-center justify-between">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Mr Riders
            </h1>
            <GithubIconButton href="https://github.com/ManojINaik/MRriders/tree/main/vue-app" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">Vue 3</Badge>
            <Badge variant="default" className="text-xs">TypeScript</Badge>
            <Badge variant="default" className="text-xs">Vite</Badge>
            <Badge variant="default" className="text-xs">Pinia</Badge>
            <Badge variant="default" className="text-xs">Vue Router</Badge>
            <Badge variant="default" className="text-xs">Tailwind CSS</Badge>
            <Badge variant="default" className="text-xs">shadcn-vue</Badge>
            <Badge variant="default" className="text-xs">Lottie</Badge>
            <Badge variant="default" className="text-xs">Vercel Analytics</Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default MrRidersCard
