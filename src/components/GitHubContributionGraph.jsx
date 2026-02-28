import React from 'react'

const GitHubContributionGraph = () => {
  return (
    <div>
        <h2 className='font-bold m-10 ml-15 text-3xl'>
            GitHub Contributions
        </h2>


        <img 
        className='ml-15 mb-10'
        src="https://ghchart.rshah.org/PixelCraftLab" 
        alt="GitHub Contribution Calendar"
        />


        {/* <img
        className='ml-15'
        src="https://github-readme-activity-graph.vercel.app/graph?username=PixelCraftLab&theme=github"
        alt="GitHub Activity Graph"
        style={{ width: "100%", maxWidth: "900px" }}
        /> */}



    </div>
    
  )
}

export default GitHubContributionGraph