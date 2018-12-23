import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Michal Wojewodzki</h1>
                <p>IT Recruiter, Political Scientist, Aspiring Software Developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="https://www.linkedin.com/in/michalwojewodzki/">LinkedIn</a></li>
                <li><a href="https://github.com/mpw209 ">GitHub</a></li>
                <li><a href="https://stackoverflow.com/users/10827083/">StackOverflow</a></li>
                <li><a href="mailto:michal.wojewodzki@harveynash.com?Subject=mw.edu.pl">Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
