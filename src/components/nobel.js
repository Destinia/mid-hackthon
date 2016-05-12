import React, { Component, PropTypes } from 'react';

import './cards.css'


class Nobel extends React.Component {
	constructor(props,context){
		super(props,context);
	}

	render(){
		return(
			<div className="playingCards">
				<ul className="table">
					<li>
            			<a className="card nobel">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
        			</li>
        			<li>
            			<a className="card nobel">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
					</li>
					<li>
            			<a className="card nobel">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
					</li>
					<li>
            			<a className="card nobel">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
					</li>
					<li>
            			<a className="card nobel">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
					</li>
				</ul>

			</div>

			);
	}
}
export default Nobel;