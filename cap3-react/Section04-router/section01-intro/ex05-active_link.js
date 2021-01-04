/* 
    We can acheive it by using NavLink instead of Link tag. This will give the component an 
    'active' class according to the route  
*/

/* On app.jsx */
<header>
    <nav className='navbar'>
        <ul className='links'>
            {/* We need the exact attribute for the '/' route */}
            <li><NavLink to="/" exact activeClassName="active-link"> Hello</NavLink></li>
            <li><NavLink to="/shadow" activeClassName="active-link"> Shadow</NavLink></li>
            <li><NavLink to="/angel" activeClassName="active-link"> Angel</NavLink></li>
            <li><NavLink to="/victim" activeClassName="active-link"> Victim</NavLink></li>
            <li><NavLink to="/list" activeClassName="active-link"> List</NavLink></li>
            <li><NavLink to="/form" activeClassName="active-link"> Form</NavLink></li>
        </ul>
    </nav>
</header>

/*
    If we omit the activeClassName attribute, the active class will simply be called 'active'.
*/
