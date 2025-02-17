import React from 'react'
import { Link } from "react-router-dom";
import { 
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';
import { RocketIcon } from "@radix-ui/react-icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


const AuthFormComponent = ({ Data, Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      <section className="bg-[#DBB98F] dark:bg-[#96351F] text-[#96351F] dark:text-[#DBB98F] lg:px-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">{Data.title}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{Data?.subtitle}</p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto mb-4">
            <Alert variant="custom" >
              <RocketIcon className="h-4 w-4" />
              <AlertTitle>Try Demo User!</AlertTitle>
              <AlertDescription>
                <p><b>Email:</b> shraddha.kapoor@techfolio.com</p> 
                <p><b>Password:</b> Shraddha@123</p>
                <p><b>Role:</b> Super Admin</p>
                
              </AlertDescription>
            </Alert>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {ReduxUltimate.state.RequiredObject?.Loading ? (
              <div className='flex justify-center'>Loading...</div>
            ) : (
              <div className="flex flex-wrap -m-2">
                {Data.inputs.map((each, index) => {
                  return (
                    <React.Fragment key={index} >
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label className="leading-7 text-sm">{each.label}</label>
                          <input 
                            className="
                              w-full bg-[#DBB98F] dark:bg-[#96351F] bg-opacity-40 rounded border 
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
                            type={each.type}
                            name={each.name} 
                            placeholder={each.placeholder} 
                            onChange={each.onChange}  
                          />
                          <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.[each.name]}</label>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                }) }
                
                <div className="p-2 w-full mt-4">
                  {Data.buttons.map((each, index) =>  {
                    return (
                      <React.Fragment key={index}>
                        <Button variant="custom" className="flex mx-auto" onClick={each.onClick} >
                          {each.label} <DoubleArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </React.Fragment>
                    )
                  }) }
                </div>

                <div className="p-2 w-full pt-2 mt-4 border-t border-[#96351F] dark:border-[#DBB98F] text-center">
                  {Data.links.map((each, index) => {
                    return (
                      <React.Fragment key={index}>
                        <p className="leading-normal my-5">
                          {each?.note}{" "}
                          <Link to={each.route} className='underline' >{each.label}</Link>
                        </p>
                      </React.Fragment>
                    )
                  }) }
                </div>
              </div>
            )}
          </div>

        </div>
      </section>   
    </React.Fragment>
  )
}

export default AuthFormComponent