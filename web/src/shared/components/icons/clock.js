import React, { Component } from "react";

export default class ClockIcon extends Component {
	render() {
		return (
			<svg
				className={this.props.className}
				width={this.props.size || 24}
				height={this.props.size || 24}
				viewBox="0 0 24 24"
			>
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
			</svg>
		);
	}
}
