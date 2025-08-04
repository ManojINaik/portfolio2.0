import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import PullRequestIcon from "@/components/lottie-ui/pull-request-icon";

const LearningPlatformCard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-between gap-2 py-3 sm:py-4 px-4 sm:px-6 overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative h-[85%] w-[90%] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2932&auto=format&fit=crop"}
              alt={"Modern learning environment"}
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
            <span>Project</span>
          </h4>
          <div className="w-full flex gap-2 items-center justify-between">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              AI Learning Platform
            </h1>
            <PullRequestIcon link="https://github.com/ManojINaik/Ai-learning/pulls" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              TypeScript
            </Badge>
            <Badge variant="default" className="text-xs">
              Modern Web Frameworks
            </Badge>
            <Badge variant="default" className="text-xs">
              AI Technology
            </Badge>
            <Badge variant="default" className="text-xs">
              Adaptive Learning
            </Badge>
          </div>
          {/* Removed verbose text links in favor of a compact PR icon button */}
        </div>
      </div>
    </CardWrapper>
  )
}

export default LearningPlatformCard