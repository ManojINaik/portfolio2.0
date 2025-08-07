import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import GithubIconButton from "../github-icon-button";

const InterviewSystemCard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-between gap-2 py-3 sm:py-4 px-4 sm:px-6 overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative h-[85%] w-[90%] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop"}
              alt={"Professional interview setup"}
              fill
              sizes="(max-width: 640px) 250px, 350px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "8px"
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Hackathon — 2nd Runner-up</span>
          </h4>
          <div className="w-full flex gap-2 items-center justify-between">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              AI-Driven Interview System
            </h1>
            <GithubIconButton href="https://github.com/ManojINaik/Devops" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Next.js
            </Badge>
            <Badge variant="default" className="text-xs">
              Gemini API
            </Badge>
            <Badge variant="default" className="text-xs">
              Clerk
            </Badge>
            <Badge variant="default" className="text-xs">
              Real-time Processing
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default InterviewSystemCard