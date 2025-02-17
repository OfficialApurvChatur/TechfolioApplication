import React, { useEffect, useRef } from 'react'
import handleInput from '@/love/dFunction/dHandleInput';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const ProfilePasswordUpdateComponent = ({ Redux, OnClick }) => {
  // JSX
  return (
    <React.Fragment>
      <section className="bg-[#DBB98F] dark:bg-[#96351F] text-[#96351F] dark:text-[#DBB98F] lg:px-20">
        <div className="container px-5 py-12 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url || "https://picsum.photos/seed/picsum/1200/500"} />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-[#96351F] dark:bg-[#DBB98F] text-[#DBB98F] dark:text-[#96351F]">
                  {Redux.state.ReceivedObject?.Retrieve?.image ? 
                    <img alt="content" className="object-cover object-center rounded-full" src={Redux.state.ReceivedObject?.Retrieve?.image?.url} />
                    :
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  }
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-lg">
                    {Redux.state.ReceivedObject?.Retrieve?.firstName} {" "}
                    {Redux.state.ReceivedObject?.Retrieve?.lastName}
                  </h2>
                  <div className="w-12 h-1 bg-[#96351F] dark:bg-[#DBB98F] rounded mt-2 mb-4"></div>
                  <p className="text-base">{Redux.state.ReceivedObject?.Retrieve?.subtitle}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-[#96351F] dark:border-[#DBB98F] sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">{Redux.state.ReceivedObject?.Retrieve?.description}</p>
                <Button asChild variant="custom" >
                  <Link to={FinalRouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute}>
                    Edit Profile
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>                  
                  </Link>
                </Button>              
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-[#96351F] dark:bg-[#DBB98F]" />
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-full md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border border-[#96351F] dark:border-[#DBB98F] flex flex-col relative overflow-hidden">
                <h1 className="text-2xl pb-4 mb-4 border-b border-[#96351F] dark:border-[#DBB98F] leading-none">Critical Information</h1>
                
                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Old Password</label>
                    <input 
                      className="w-full bg-[#DBB98F] dark:bg-[#96351F] bg-opacity-40 rounded border 
                        border-[#96351F] dark:border-[#DBB98F]
                        focus:border-[#DBB98F] dark:focus:border-[#96351F] 
                        focus:bg-[#96351F] dark:focus:bg-[#DBB98F] 
                        focus:text-[#DBB98F] dark:focus:text-[#96351F] 
                        focus:ring-2 
                        focus:ring-[#96351F] dark:focus:ring-[#DBB98F] 
                        text-[#96351F] dark:text-[#DBB98F] 
                        text-base outline-none 
                        py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                      " 
                      type='password' 
                      name='oldPassword'
                      label='Old Password'
                      placeholder='Old Password' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.title}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["oldPassword"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">New Password</label>
                    <input 
                      className="w-full bg-[#DBB98F] dark:bg-[#96351F] bg-opacity-40 rounded border 
                        border-[#96351F] dark:border-[#DBB98F]
                        focus:border-[#DBB98F] dark:focus:border-[#96351F] 
                        focus:bg-[#96351F] dark:focus:bg-[#DBB98F] 
                        focus:text-[#DBB98F] dark:focus:text-[#96351F] 
                        focus:ring-2 
                        focus:ring-[#96351F] dark:focus:ring-[#DBB98F] 
                        text-[#96351F] dark:text-[#DBB98F] 
                        text-base outline-none 
                        py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                      " 
                      type='password' 
                      name='newPassword'
                      label='New Password'
                      placeholder='New Password' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.subtitle}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["newPassword"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Confirm Password</label>
                    <input 
                      className="w-full bg-[#DBB98F] dark:bg-[#96351F] bg-opacity-40 rounded border 
                        border-[#96351F] dark:border-[#DBB98F]
                        focus:border-[#DBB98F] dark:focus:border-[#96351F] 
                        focus:bg-[#96351F] dark:focus:bg-[#DBB98F] 
                        focus:text-[#DBB98F] dark:focus:text-[#96351F] 
                        focus:ring-2 
                        focus:ring-[#96351F] dark:focus:ring-[#DBB98F] 
                        text-[#96351F] dark:text-[#DBB98F] 
                        text-base outline-none 
                        py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                      " 
                      type='password' 
                      name='confirmPassword'
                      label='Confirm Password'
                      placeholder='Confirm Password' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.description}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["confirmPassword"]}</label>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Button variant="custom" className="mt-8" onClick={OnClick}>
            Update Profile Password
          </Button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProfilePasswordUpdateComponent