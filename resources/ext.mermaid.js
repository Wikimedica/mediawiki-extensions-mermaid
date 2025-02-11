/*!
 * @file
 * @ingroup SMW
 *
 * @licence GNU GPL v2+
 * @author mwjames
 */

/*global jQuery, mediaWiki, smw */
/*jslint white: true */

( function( $, mw ) {

	'use strict';

	var config = mw.config.get( 'mermaid' );

	mw.loader.using( [ 'mediawiki.api', 'ext.mermaid' ] ).then( function () {

	console.log("Loading mermaid graphs");
	$( document ).ready( function() {

		$( '.ext-mermaid' ).each( function() {

			var that = $( this );

			// Display section because this is required for mermaid to load (they are hidden by the MobileFrontend extension).
			var collapsed = that.parents("section").hasClass("collapsible-block");
			if(collapsed) { that.parents("section").removeClass("collapsible-block"); }

			var id = 'ext-mermaid-' + ( new Date().getTime() );
			var data = that.data( 'mermaid' );

			that.find( '.mermaid-dots' ).hide();
			that.append( '<div id=' + id + '> ' + data.content + ' </div>' );

			mermaid.initialize( data.config );
			mermaid.init( undefined, $( "#" + id ) );
			
			if(collapsed) { that.parents("section").addClass("collapsible-block"); }
		} );
	} );
} );

}( jQuery, mediaWiki ) );
