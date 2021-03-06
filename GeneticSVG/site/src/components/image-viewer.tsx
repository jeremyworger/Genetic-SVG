﻿import * as React from 'react'
import * as SvgGenerator from './_imports'

type Props = { image: SvgGenerator.Image.IImage };
type State = {};

export default class ImageViewer extends React.Component<Props, State>
{
	render() {
		if (!this.props.image)
			return <div></div>

		const src = this.props.image.getCanvas().toDataURL();

		return (
			<div className="image-viewer">
				<img src={src} />
			</div>
		);
	}
}