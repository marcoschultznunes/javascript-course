import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import Axios from 'axios'

const Navmenu = React.forwardRef((props, navMenuRef) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        Axios.get('http://localhost:8083/categories')
        .then(res => {
            setCategories(res.data.categories)
            setLoading(false)
        })
        .catch(err => {
            setError('Failed to fetch categories.')
            setLoading(false)
        })
    }, [])

    const closeNavMenu = () => {
        navMenuRef.current.classList.add('hidden')
    }

    const categoryList = error ? <li> {error} </li> :
        categories.map(category => 
            <li key={category.id + category.name}>
                <NavLink to={`/categories/${category.id}/${category.name}`} onClick={closeNavMenu}>
                    {category.name}
                </NavLink>
            </li>
        )

    return (  
        <nav id='navmenu' ref={navMenuRef} className='hidden'>
            <div className='navmenu-head'>
                <button id='close-navmenu-button' onClick={closeNavMenu}>X</button>
                <div className='navmenu-section'>
                    <h3>Welcome, Guest!</h3>
                </div>
                <div className='navmenu-section'>
                    <ul>
                        <li><NavLink to='/' onClick={closeNavMenu}>Home Page</NavLink></li>
                    </ul>
                </div>
            </div>  
            <div className="navmenu-body">
                <div className='navmenu-section'>
                    <h3 className='navmenu-section-title'>Departments</h3>
                    <ul className='navmenu-link-list'>
                        {loading ? <li>Loading categories...</li> : categoryList}
                    </ul>
                    {/* <h3 className='extend-link-list'>+ All departments</h3> */}
                </div>
            </div>
        </nav>
    );
})
 
export default Navmenu;
