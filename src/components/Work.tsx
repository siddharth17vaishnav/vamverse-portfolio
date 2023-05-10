import { WorkCardProps } from '@src/types/work.types'
import workData from '../data/work.json'



const WorkCard = ({ index, title, description, category }: WorkCardProps) => {
    return (
        <div className={`work-wrapper`} >
            <img src="/assets/i.png" alt="work" className='w-[400px] mx-auto' />
            <div className='flex flex-col items-start' >
                <h4 className='text-2xl font-semibold'>{title}</h4>
                <p className=''>{description}</p>
                <p>{category}</p>
                <button className='border rounded-2xl px-3 py-1 mt-3 hover:text-black hover:bg-white'>VIEW WORK</button>
            </div>
        </div>
    )
}

const Work = (): JSX.Element => {

    return (
        <div id="work">
            <div className="min-h-screen mt-12 ">
                <h2 className="text-3xl underline pt-12">WORK</h2>
                <div>
                    {workData.map((item) => <WorkCard key={item.id} index={item.id} title={item.title} description={item.description} category={item.category} />)}
                </div>
            </div>
        </div>
    )
}

export default Work