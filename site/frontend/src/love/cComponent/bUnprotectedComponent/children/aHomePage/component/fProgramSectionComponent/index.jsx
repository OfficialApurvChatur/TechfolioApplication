import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom";
import FinalRouteName from "@/love/gRoute/FinalRouteName";


function ProgramSectionComponent({ Redux }) {
  const [activeProjectGroup, setActiveProjectGroup] = useState("Andromeda Organisation")

  return (
    Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve &&  
    <React.Fragment>
      {/* Project Section */}
      <section>
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs tracking-widest font-medium title-font mb-1">OUR PROJECTS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">{Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve?.title}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve?.description}</p>
          </div>          

          <div className="flex flex-wrap text-center">
            {Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve?.programs?.map((each1, index1) => (
              <React.Fragment key={index1}>
                <div className="p-4 w-full md:w-1/3 text-left">
                  <div className="h-full bg-[#DBB98F] dark:bg-[#96351F] text-[#96351F] dark:text-[#DBB98F] rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={each1?.image?.url} alt="blog" />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium  mb-1">{each1.title}</h1>
                      <h2 className="tracking-widest text-xs title-font font-medium mb-3 uppercase">{each1.subtitle}</h2>
                      <p className="leading-relaxed mb-3">{each1.description}</p>
                      <div className="flex items-center flex-wrap ">
                        <Link to={`${FinalRouteName.GlobalRoute.ProgramRoute}/${each1.id}`} className="inline-flex items-center md:mb-2 lg:mb-0" >
                          {"Read More"}
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link> 
                        {each1?.links?.map((each2, index2) => (
                          each2?.title === "Visit Application" ? (
                            <span key={index2} className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 border-r-2 border-[#96351F] dark:border-[#DBB98F]">
                              <Link to={each2?.url} target="_blank" rel="noreferrer" >
                                <svg className="w-5 h-5 mr-3 cursor-pointer" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                              </Link>
                            </span>
                          ) : 
                          each2?.title === "Visit Admin" ? (
                            <span key={index2} className="mr-3 inline-flex items-center leading-none text-sm py-1 border-r-2 border-[#96351F] dark:border-[#DBB98F]">
                              <Link to={each2?.url} target="_blank" rel="noreferrer" >
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3 cursor-pointer" viewBox="0 0 24 24">
                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                              </Link>
                            </span>
                          ) :
                          each2?.title === "Visit Code" ? (
                            <span key={index2} className="cursor:pointer inline-flex items-center leading-none text-sm" >
                              <Link to={each2?.url} target="_blank" rel="noreferrer" >
                                <GitHubLogoIcon className="h-4 w-4 mr-1 cursor-pointer" /> 
                              </Link>
                            </span>
                          ) : (
                            <Link key={index2} to={each2?.url} target="_blank" rel="noreferrer" className="inline-flex items-center md:mb-2 lg:mb-0">
                              {each2.title}
                            </Link> 
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* <Separator/> */}
    </React.Fragment>
  );
}

export default ProgramSectionComponent;
