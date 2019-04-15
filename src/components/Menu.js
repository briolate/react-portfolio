import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [open, setOpen] = useState(false);

  function toggle() {
    open ? setOpen(false) : setOpen(true);
  }

  const linksArray = [
    { name: 'about', url: '#' },
    { name: 'skills', url: '#' },
    { name: 'work', url: '#' },
    { name: 'contact', url: '#' }
  ];

  return (
    <div>
      <Panel open={open ? true : false} links={linksArray} />
      <Button props={toggle} open={open ? false : true} toggle={toggle} />
    </div>
  );
}

function Button(props) {
  return (
    <button
      className={props.open ? 'menu-toggle' : 'menu-toggle close-button'}
      onClick={props.toggle}
    >
      E
    </button>
  );
}

function Panel(props) {
  return (
    <div className={props.open ? 'menu-wrapper menu-open' : 'menu-wrapper'}>
      <Links links={props.links} open={props.open} />
    </div>
  );
}

function Links(props) {
  const linkList = props.links.map(link => (
    <li className="link" key={link.name}>
      <a href={link.url}>{link.name}</a>
    </li>
  ));

  return (
    <div
      className={
        props.open ? 'links-wrapper' : 'links-wrapper links-wrapper-closed'
      }
    >
      {' '}
      <ul className="link-list">{linkList}</ul>
    </div>
  );
}

export default Menu;
