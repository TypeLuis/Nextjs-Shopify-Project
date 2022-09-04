import classes from './HeaderSmall.module.scss'

import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group';

function HeaderSmall() {

    return (
        <Navbar>

            {/* <NavItem menu='main' icon={<CaretIcon className='nav-event nav-control' />}> */}
            <NavItem menu='main' icon={"^"}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
            <NavItem menu='main2' icon={"^"}>
                <DropdownMenu></DropdownMenu>
            </NavItem>

        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className={`nav-event ${classes.navbar_small}`}>
            <ul className={`nav-event ${classes.navbar_nav}`}>{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(false)
    const icon = useRef(null)


    // determines if dropdown is open or closed
    const handleOpenClick = (e) => {
        e.preventDefault()

        // this classList references the current click
        // console.log('e', e.target.classList)
        console.log('i', icon.current?.classList)


        // using setTimeout to reference previous button
        setTimeout(() => {

            // The window on click is inside the handle click because we need to recall it every time the button is clicked
            window.onclick = function (e) {
                // each class name has an event to toggle

                // if user clicks on element that doesn't contain 'nav-event' as it's first class name
                if (e.target.classList[0] != 'nav-event') {
                    setContent(false)

                    // this setTimeOut is here to let the animation of dropdown fade out
                    setTimeout(() => { setOpen(false) }, 400)
                }


                // if the icon reference has a class name of true which is determined by the open state and if the element clicked has a class named 'nav control'
                else if (!open === true && icon.current?.classList.contains(classes[!open]) && e.target.classList.contains('nav-control')) {
                    console.log(!open)
                    console.log(icon.current?.classList.contains(classes[!open]))
                    setContent(false)
                    setTimeout(() => { setOpen(false) }, 400)
                }


                // else if (icon.current?.classList.contains(props.menu) && e.target.classList.contains(props.menu) === false && e.target.classList.contains('nav-button')) {
                //     console.log(icon.current?.classList)
                //     console.log(e.target.classList.contains(props.menu))
                //     setContent(false)
                //     setTimeout(() => { setOpen(false) }, 400)
                // }
            }
        }, 100)

        if (open === true && content === true) { }
        else {
            setTimeout(() => {

                setOpen(true)
                setContent(true)
            }, 200)
        }
    }

    return (
        <li ref={icon} className={`nav-event nav-control ${props.menu} ${classes[open]} ${classes.nav_item}`}>
            {/* <a href="#" className={`nav-event nav-control ${classes.open} ${classes.icon_button}`} id='icon' onClick={(e) => { setOpen(!open) }}> */}
            <a href="#" className={`nav-event nav-button nav-control ${props.menu} ${classes[open]} ${classes.icon_button}`} id='icon' onClick={(e) => { handleOpenClick(e) }} >
                {props.icon}
            </a>

            {/* {open && props.children} */}
            {/* https://stackoverflow.com/questions/64732498/how-to-pass-a-prop-to-children-in-react */}
            {open && React.cloneElement(props.children, { content: content, menu: props.menu })}
        </li>
    );
}

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState(props.menu);
    const [menuHeight, setMenuHeight] = useState(null);

    const dropdownRef = useRef(null);

    const nodeRef = useRef(null)
    const nodeRef2 = useRef(null)
    const nodeRef3 = useRef(null)

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.offsetHeight);
        // console.log(classes, String(props.content))
        // console.log(dropdownRef)
        // console.log(nodeRef)
    }, [])



    function calcHeight(el, ref) {
        // const height2 = el.offsetHeight;
        const height = ref.current?.offsetHeight + 30;
        // setTimeout(()=>{console.log(el.offsetHeight)}, 1000)

        // console.log(ref)
        setMenuHeight(height);

    }

    function DropdownItem(props) {
        return (

            <>
                {props.dropLink ?


                    <Link href={props.dropLink}  >
                        <a className={`${classes.menu_item}`}>
                            <span className={`nav-event ${classes.icon_button}`}>{props.leftIcon}</span>
                            {props.children}
                            <span className={`nav-event ${classes.icon_right}`}>{props.rightIcon}</span>
                        </a>
                    </Link>


                    :


                    <Link href='#'  >
                        <a className={`nav-event ${classes.menu_item}`} onClick={(e) => { e.preventDefault(); props.goToMenu && setActiveMenu(props.goToMenu) }}>
                            <span className={`nav-event ${classes.icon_button}`}>{props.leftIcon}</span>
                            {props.children}
                            <span className={`nav-event ${classes.icon_right}`}>{props.rightIcon}</span>
                        </a>
                    </Link>

                }

            </>



        );
    }

    return (
        // props.content is referring if the content is showing is true, making this className a boolean in which we can toggle the fade in and out animation in css
        <div className={`nav-event ${classes[props.content]} ${classes.dropdown_small}`} id='dropDown' style={{ "height": menuHeight }} ref={dropdownRef}>


            {/* Main */}
            {/* CSS Transition gives us 4 different classnames we can use to toggle transitions */}
            <CSSTransition
                // checks if condition is true to transition to this component
                in={activeMenu === 'main'}
                timeout={500}
                classNames={{
                    "nav-event": 'nav-event',
                    enterActive: classes.menu_primary_Enter_Active,
                    enterDone: classes.menu_primary_Enter_Done,
                    exitActive: classes.menu_primary_Exit_Active,
                    exitDone: classes.menu_primary_Exit_Done
                }}
                nodeRef={nodeRef}
                unmountOnExit
                onEnter={(el) => { calcHeight(el, nodeRef) }}>
                {/* // give functions on enter */}
                {/* >  */}
                <div ref={nodeRef} className={`nav-event ${classes.menu}`}>
                    {/* <div  className={`nav-event ${classes.menu}`}> */}

                    <DropdownItem leftIcon={"^"} dropLink='/'>Home</DropdownItem>
                    <DropdownItem
                        leftIcon={"^"}
                        rightIcon={">"}
                        goToMenu="Shop"
                    >
                        Shop
                    </DropdownItem>

                    <DropdownItem leftIcon={"^"} dropLink='/About'>About</DropdownItem>
                    <DropdownItem leftIcon={"^"} dropLink='/Blog'>Blog</DropdownItem>
                    <DropdownItem leftIcon={"^"} dropLink='/Features'>Features</DropdownItem>
                    <DropdownItem leftIcon={"^"} dropLink='/Subcribe'>Subcribe</DropdownItem>






                </div>
            </CSSTransition>
            <CSSTransition
                // checks if condition is true to transition to this component
                in={activeMenu === 'main2'}
                timeout={500}
                classNames={{
                    "nav-event": 'nav-event',
                    enterActive: classes.menu_primary_Enter_Active,
                    enterDone: classes.menu_primary_Enter_Done,
                    exitActive: classes.menu_primary_Exit_Active,
                    exitDone: classes.menu_primary_Exit_Done
                }}
                nodeRef={nodeRef3}
                unmountOnExit
                onEnter={(el) => { calcHeight(el, nodeRef) }}>
                {/* // give functions on enter */}
                {/* >  */}
                <div ref={nodeRef3} className={`nav-event ${classes.menu}`}>
                    {/* <div  className={`nav-event ${classes.menu}`}> */}

                    <DropdownItem leftIcon={"^"} dropLink='/'>Home</DropdownItem>
                    <DropdownItem
                        leftIcon={"^"}
                        rightIcon={">"}
                        goToMenu="Shop"
                    >
                        Poped
                    </DropdownItem>

                    <DropdownItem leftIcon={"^"} dropLink='/About'>About</DropdownItem>
                    <DropdownItem leftIcon={"^"} dropLink='/Blog'>Blog</DropdownItem>
                    <DropdownItem leftIcon={"^"} dropLink='/Features'>Features</DropdownItem>
                    <DropdownItem leftIcon={"^"} dropLink='/Subcribe'>Subcribe</DropdownItem>






                </div>
            </CSSTransition>




            {/* Shop */}
            <CSSTransition
                in={activeMenu === 'Shop'}
                timeout={500}
                // gives this the secondary menu because it's transitioning from primary
                classNames={{
                    "nav-event": 'nav-event',
                    enterActive: classes.menu_secondary_Enter_Active,
                    enterDone: classes.menu_secondary_Enter_Done,
                    exitActive: classes.menu_secondary_Exit_Active,
                    exitDone: classes.menu_secondary_Exit_Done
                }}
                // classNames={`nav-event ${classes.menu_secondary}`}
                unmountOnExit
                nodeRef={nodeRef2}
                onEnter={(el) => { calcHeight(el, nodeRef2) }}>
                {/* > */}
                <div ref={nodeRef2} className={`nav-event ${classes.menu}`}>
                    {/* <div className={`nav-event ${classes.menu}`}> */}

                    <div className={classes.second_heading}>

                        <DropdownItem goToMenu="main" leftIcon={"<"}>
                            <h2 className={`nav-event`}>Shop</h2>
                        </DropdownItem>
                    </div>

                    <DropdownItem dropLink='/Shop/bag' leftIcon={"^"}>Bag</DropdownItem>

                    <DropdownItem dropLink='/Shop/vaccum' leftIcon={"^"}>Vaccum</DropdownItem>

                    <DropdownItem dropLink='/Shop/console' leftIcon={"^"}>Console</DropdownItem>

                    <DropdownItem dropLink='/Shop/games' leftIcon={"^"}>Games</DropdownItem>

                </div>
            </CSSTransition>



        </div>
    );
}

export default HeaderSmall;