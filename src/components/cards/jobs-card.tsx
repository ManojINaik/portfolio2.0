import React from "react";
import CardWrapper from "@/components/cards/card-wrapper";
import PullRequestIcon from "@/components/lottie-ui/pull-request-icon";
import classNames from "classnames";

interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
}

const jobsData: Job[] = [
  {
    role: "Open Source Contributor",
    company: "GitHub",
    period: "2024-Present",
    description: "Web dev & AI focus",
    link: "https://github.com/pulls?q=is%3Apr+author%3Amanojinaik+is%3Aclosed",
  },
  {
    role: "Software Development Intern",
    company: "Ukshati Technologies",
    period: "Feb–May 2025",
    description: "IoT Dashboard & Arduino",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Samagra Technologies",
    period: "Oct–Nov 2023",
    description: "Next.js & FastAPI",
  },
];

const JobItem = ({
  job,
  active
}: {
  job: Job;
  active?: boolean;
}) => {
  const { role, company, period, description, link } = job;

  return (
    <div
      className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2"
    >
      <div className="flex flex-col gap-1">
        <h5 className={classNames(
          "block text-xs md:text-md md:hidden font-medium dark:text-white text-black",
          { 'opacity-35': !active, 'opacity-65': active }
        )}>
          {period}
        </h5>
        <h1 className={classNames(
          "text-3xl md:text-4xl font-medium dark:text-white text-black text-left w-fit",
          { 'line-through opacity-55': !active, 'opacity-100': active }
        )}>
          {role}
        </h1>
      </div>
      <div className="flex flex-col md:items-end md:text-right">
        <h3 className={classNames(
          "text-sm lg:text-lg font-medium dark:text-white text-black",
          { 'opacity-65': !active, 'opacity-80': active }
        )}>
          {company}
        </h3>
        <h5 className={classNames(
          "hidden md:block text-xs lg:text-md font-medium dark:text-white text-black",
          { 'opacity-35': !active, 'opacity-65': active }
        )}>
          {period}
        </h5>
        <div className="flex items-center">
          {description && (
            <p className="text-opacity-50 text-white/70 dark:text-white/80">
              {description}
            </p>
          )}
          {link && (
            <div className="ml-3">
              <PullRequestIcon 
                link={link} 
                size="sm"
                className="!h-8 !w-8"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const JobsCard = () => {
  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-6 p-8 justify-start">
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-60 uppercase">
            Professional
          </h4>
          <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90 text-center">
            Experience
          </h1>
        </div>
        <div className="flex flex-col relative z-10 lg:justify-around">
          <JobItem job={jobsData[0]} active />

          {jobsData.slice(1).map((job, index) => (
            <JobItem key={index} job={job} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default JobsCard;
