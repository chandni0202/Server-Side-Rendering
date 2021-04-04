import Link from 'next/link';

import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
    return(
        <div>
        <div>Robots</div>
        <Link href='/'>

        </Link>
        <div>
            {props.robots.map(robot =>{

                <li key={robot.id}>
                    {robot.name}
                </li>
            })}
        </div>
        </div>
    )
}

Robots.getInitialProps = async function (){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await res.json();

    return {
        robots : data
    }
}
export default Robots;