const { default: Link } = require("next/link")



const NavBar = ()=>{

    const links = [
        {
            'title' : 'Home',
            'href' :'/'
        },
        {
            'title' : 'Meals',
            'href' : '/meals'
        },
    ]

    return (
        <>
            <div className="flex gap-4 justify-between items-center container mx-auto">
                <div>
                    <h4 className="text-xl font-semibold">Logo <span className="text-tomato ">Here</span></h4>
                </div>
                <div>
                    <ul className="flex items-center gap-5 ">
                        {
                            links?.map(({title,href}) =><li key={href}><Link href={href}>{title}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}



export default NavBar;