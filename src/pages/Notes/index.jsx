import Git from '../../components/section/Git'
import GitHub from '../../components/section/GitHub'
import Bootstrap from '../../components/section/Bootstrap'
import Node from '../../components/section/Node'

export default function Notes() {

    return (
        <section className='notas-container'>
            <Git className="git"/>
            <GitHub/>
            <Node/>
            <Bootstrap/>
        </section>
    )
}