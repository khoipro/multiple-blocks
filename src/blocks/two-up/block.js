/**
 * BLOCK: two-up
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { InnerBlocks } from '@wordpress/editor';

registerBlockType( 'multiple-blocks/two-up', {
	title: __( 'Two Up' ),
	icon: 'shield',
	category: 'layout',
	keywords: [
		__( 'two up' ),
		__( 'column' ),
	],

	edit: function() {
		return (
			<div className="two-up">
				<InnerBlocks template={ [
					[ 'core/paragraph', { placeholder: 'Enter side content...' } ],
					[ 'core/paragraph', { placeholder: 'Second Content' } ],
				] } />
			</div>
		);
	},

	save: function() {
		return (
			<div className="two-up">
				<InnerBlocks.Content />
			</div>
		);
	},
} );
