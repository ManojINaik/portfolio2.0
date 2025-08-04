import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import PullRequestIcon from "@/components/lottie-ui/pull-request-icon";

const EchoVerseAICard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-between gap-2 py-3 sm:py-4 px-4 sm:px-6 overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative h-[85%] w-[90%] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"}
              alt={"AI Learning Platform"}
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
            <span>Hackathon Project</span>
          </h4>
          <div className="w-full flex gap-2 items-center justify-between">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              EchoVerse AI Hub
            </h1>
            <PullRequestIcon link="https://github.com/ManojINaik/echoverse-ai" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              React
            </Badge>
            <Badge variant="default" className="text-xs">
              TypeScript
            </Badge>
            <Badge variant="default" className="text-xs">
              Supabase
            </Badge>
            <Badge variant="default" className="text-xs">
              Gemini API
            </Badge>
            <Badge variant="default" className="text-xs">
              Tavus AI
            </Badge>
            <Badge variant="default" className="text-xs">
              ElevenLabs
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default EchoVerseAICard