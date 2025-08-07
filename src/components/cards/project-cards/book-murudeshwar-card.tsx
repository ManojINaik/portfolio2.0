import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import GithubIconButton from "../github-icon-button";

const BookMurudeshwarCard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-between gap-2 py-3 sm:py-4 px-4 sm:px-6 overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative h-[85%] w-[90%] rounded-lg overflow-hidden shadow-lg">
            <video
              src="/videos/murudeshwar.co.in.mp4"
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
              BookMurudeshwar
            </h1>
            <GithubIconButton href="https://github.com/ManojINaik/book-murudeshwar" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">HTML5</Badge>
            <Badge variant="default" className="text-xs">CSS3</Badge>
            <Badge variant="default" className="text-xs">JavaScript (ES6+)</Badge>
            <Badge variant="default" className="text-xs">GSAP</Badge>
            <Badge variant="default" className="text-xs">ScrollTrigger.js</Badge>
            <Badge variant="default" className="text-xs">Node.js</Badge>
            <Badge variant="default" className="text-xs">SEO</Badge>
            <Badge variant="default" className="text-xs">Vercel</Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default BookMurudeshwarCard
