import Loader from '@/love/cComponent/aGlobalComponent/component/cLoader';
import React, { Suspense, useState } from 'react'

// Component
const HeroSectionComponent = React.lazy(() => import('./component/aHeroSectionComponent'));
const CounterSectionComponent = React.lazy(() => import('./component/bCounterSectionComponent'));
const AboutAndServiceSectionComponent = React.lazy(() => import('./component/cAboutAndServiceSectionComponent'));
const BranchSectionComponent = React.lazy(() => import('./component/dBranchSectionComponent'));
const ProjectSectionComponent = React.lazy(() => import('./component/eProjectSectionComponent'));
const ProgramSectionComponent = React.lazy(() => import('./component/fProgramSectionComponent'));


const HomePageComponent = ({ Redux, ReduxUltimate }) => {
  return (
    <div className="bg-[#DBB98F] dark:bg-[#96351F] text-[#96351F] dark:text-[#DBB98F] lg:px-20">
      <Suspense fallback={<Loader text="Suspense Boom Loading..." />}>
        {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve && <HeroSectionComponent Redux={Redux} ReduxUltimate={ReduxUltimate} />}

        {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve &&
          <React.Fragment>
            {Redux.state.ReceivedObject?.Retrieve?.CounterList && <CounterSectionComponent Redux={Redux} />}
            {
              Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve && 
              Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually && 
              Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively && 
              Redux.state.ReceivedObject?.Retrieve?.ServiceList && 
                <AboutAndServiceSectionComponent Redux={Redux} />
            }
            {Redux.state.ReceivedObject?.Retrieve?.BranchRetrieve && <BranchSectionComponent Redux={Redux} />}
            {Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve && <ProjectSectionComponent Redux={Redux} />}
            {Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve && <ProgramSectionComponent Redux={Redux} />}
          </React.Fragment>
        }
      </Suspense>
    </div>
  )
}

export default HomePageComponent