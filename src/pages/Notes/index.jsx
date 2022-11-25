import Git from '../../components/section/Git'
import Bootstrap from '../../components/section/Bootstrap'
import Node from '../../components/section/Node'

export default function Notes() {

    return (
        <section className='container-notes'>
            <Git/>
            <Bootstrap/>
            <Node/>
        </section>
    )
}