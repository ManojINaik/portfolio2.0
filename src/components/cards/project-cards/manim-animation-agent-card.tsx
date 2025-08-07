import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import GithubIconButton from "../github-icon-button";

const ManimAnimationAgentCard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-between gap-2 py-3 sm:py-4 px-4 sm:px-6 overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative h-[85%] w-[90%] rounded-lg overflow-hidden shadow-lg">
            <video
              src="/videos/Manimanimation-agent.mp4"
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
            <span>AI Project</span>
          </h4>
          <div className="w-full flex gap-2 items-center justify-between">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Manim Animation Agent
            </h1>
            <GithubIconButton href="https://github.com/ManojINaik/manim-animation-agent" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Python
            </Badge>
            <Badge variant="default" className="text-xs">
              FastAPI
            </Badge>
            <Badge variant="default" className="text-xs">
              Next.js
            </Badge>
            <Badge variant="default" className="text-xs">
              RAG
            </Badge>
            <Badge variant="default" className="text-xs">
              Docker
            </Badge>
            <Badge variant="default" className="text-xs">
              GitHub Actions
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default ManimAnimationAgentCard