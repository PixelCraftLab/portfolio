import React from 'react'
import GitHubContributionGraph from '../components/GitHubContributionGraph'
import LeetCodeStreekGraph from '../components/LeetCodeStreekGraph'
// import MatrixBackground from '../components/MatrixBackground'

const Graphs = () => {
  return (
    <div  className='relative h-full w-full overflow-hidden mt-10 '
          style={{
            height: '700px',
           
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 75%), url('/assets/projects/HackerImg.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50% ', 
            backgroundPosition: 'center',
            
            
            }}
    
    >
        {/* <MatrixBackground/> */}
        <div className='z-10 h-full'>
        <LeetCodeStreekGraph/>
        <GitHubContributionGraph/>
        </div>
        

    </div >
  )
}

export default Graphs