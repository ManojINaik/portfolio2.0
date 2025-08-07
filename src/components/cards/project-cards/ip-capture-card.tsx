import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import GithubIconButton from "../github-icon-button";

const IPCaptureCard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-between gap-2 py-3 sm:py-4 px-4 sm:px-6 overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative h-[85%] w-[90%] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop"}
              alt={"Network monitoring visualization"}
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
              IP Capture Tool
            </h1>
            <GithubIconButton href="https://github.com/ManojINaik/IPCAPTURE" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              HTML
            </Badge>
            <Badge variant="default" className="text-xs">
              JavaScript
            </Badge>
            <Badge variant="default" className="text-xs">
              IP APIs
            </Badge>
            <Badge variant="default" className="text-xs">
              Geolocation
            </Badge>
          </div>
          {/* compact icon only, removed verbose links */}
        </div>
      </div>
    </CardWrapper>
  )
}

export default IPCaptureCard