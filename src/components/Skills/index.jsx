import './Skills.css'

import { SiJavascript, SiNodedotjs, SiReact } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

export default function Skills() {
    return (
        <section className='container-skills'>

            <div className='skills'>
                <h2>Skills</h2>
                <div className='tecs'>
                    <div className='tec'>
                        <h3><SiJavascript className='js'/></h3>
                        <button>JavaScript</button>
                    </div>
                    <div className='tec'>
                        <h3><SiNodedotjs className='node'/></h3>
                        <button>Node.js</button>
                    </div>
                    <div className='tec'>
                        <h3><SiReact className='react'/></h3>
                        <button>React.js</button>
                    </div>
                    <div className='tec'>
                        <h3><FaGitAlt className='git'/></h3>
                        <button>Git</button>
                    </div>
                </div>
            </div>
                
        </section>
    )
}