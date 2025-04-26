import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";

const FarmersGatewayCard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-between gap-2 py-3 sm:py-4 px-4 sm:px-6 overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative h-[85%] w-[90%] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop"}
              alt={"Modern farming technology interface"}
              fill
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
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Farmer's Gateway
            </h1>
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              PHP
            </Badge>
            <Badge variant="default" className="text-xs">
              MySQL
            </Badge>
            <Badge variant="default" className="text-xs">
              JavaScript
            </Badge>
            <Badge variant="default" className="text-xs">
              Python
            </Badge>
            <Badge variant="default" className="text-xs">
              AI Integration
            </Badge>
          </div>
          <div className="mt-2 text-xs opacity-80">
            <a href="https://github.com/ManojINaik/Farmers-Gateway" target="_blank" rel="noopener noreferrer" className="underline">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default FarmersGatewayCard 