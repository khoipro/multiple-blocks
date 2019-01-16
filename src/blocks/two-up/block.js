/**
 * BLOCK: two-up
 */

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, PlainText } = wp.editor;
const { Fragment } = wp.element;
const { Button } = wp.components;

const blockAttributes = {
	title: {
		source: 'text',
		selector: '.two-up__title',
	},
	body: {
		type: 'array',
		source: 'children',
		selector: '.two-up__body',
	},
	imageAlt: {
		attribute: 'alt',
		selector: '.two-up__image',
	},
	imageUrl: {
		attribute: 'src',
		selector: '.two-up__image',
	},
}

registerBlockType( 'multiple-blocks/two-up', {
	title: __( 'Two Up' ),
	icon: 'shield',
	category: 'layout',
	keywords: [
		__( 'two up' ),
		__( 'column' ),
	],
	attributes: blockAttributes,

	edit( { attributes, setAttributes } ) {
		const getImageButton = ( openEvent ) => {
			if ( attributes.imageUrl ) {
				return (
					<img
						src={ attributes.imageUrl }
						alt={ attributes.imageAlt }
						onClick={ openEvent }
						className="two-up__image"
						role="presentation"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		}

		return (
			<Fragment>
				<div className="two-up">
					<div className="two-up__grid">
						<div className="two-up__col">
							<MediaUpload
								onSelect={ media => {
									setAttributes( { imageAlt: media.alt, imageUrl: media.url } );
								} }
								type="image"
								value={ attributes.imageID }
								render={ ( { open } ) => getImageButton( open ) }
							/>
						</div>
						<div className="two-up__col">
							<PlainText
								onChange={ content => setAttributes( { title: content } ) }
								value={ attributes.title }
								placeholder="Your title"
								className="heading"
							/>
							<RichText
								onChange={ content => setAttributes( { body: content } ) }
								value={ attributes.body }
								multiline="p"
								placeholder="Your description"
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const cardImage = ( src, alt ) => {
			if ( ! src ) {
				return null;
			}
			if ( alt ) {
				return (
					<img
						className="two-up__image"
						src={ src }
						alt={ alt }
						role="presentation"
					/>
				);
			}
			return (
				<img
					className="two-up__image"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		}

		return (
			<div className="two-up">
				<div className="two-up__container">
					<div className="two-up__grid">
						<div className="two-up__col two-up__col--primary">
							<div className="two-up__col-inner">
								{ cardImage( attributes.imageUrl, attributes.imageAlt ) }
							</div>
						</div>
						<div className="two-up__col two-up-col--secondary">
							<div className="two-up__col-inner">
								<h3 className="two-up__title">{ attributes.title }</h3>
								<div className="two-up__body">
									{ attributes.body }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
