import React from 'react'

const educations = [
    {title: 'EXPERIENCE'},
    {title: 'EDUCATION'},
]

const experience = [
    {title: 'Frontend developer', academy: 'GLOBAL TRAVEL TELECOM', date: '2022 - PRESENT'},
    {title: 'Frontend developer', academy: 'OGOGO ACADEMY', date: 2022},
]

const skills = [
    {title: 'REACT JS'},
    {title: 'VUE 3'},
    {title: 'HTML'},
    {title: 'CSS'},
    {title: 'TAILWIND'},
    {title: 'SCSS'},
    {title: 'TYPESCRIPT'},
    {title: 'JAVASCRIPT'},
]

const Experience = () => {
  return (
    <div className='bg-neutral-900'>
        <div className='bg-neutral-300 text-neutral-900 px-4 rounded-b-xl'>
            <div className="container mx-auto px-2">
                <div className='border-b-2 border-t-2 border-neutral-900 py-12 flex justify-between items-start flex-col sm:flex-row gap-12 sm:gap-0'>
                    <div className='flex gap-2 flex-wrap'>
                        {educations.map((education, index) => (
                            <p className='rounded-full border-2 border-neutral-900 px-4 py-2' key={index}>{education.title}</p>
                        ))}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 justify-between items-center w-1/2 gap-12'>
                        {experience.map((skill, index) => (
                            <div key={index}>
                                <p>{skill.date}</p>
                                <p>{skill.title}</p>
                                <p>{skill.academy}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='py-12 flex justify-between items-start flex-col sm:flex-row gap-12 sm:gap-0'>
                    <div className='flex gap-2'>
                        <p className='rounded-full border-2 border-neutral-900 px-4 py-2'>SKILLS</p>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 justify-between items-center w-1/2 gap-12'>
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <p>{skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience